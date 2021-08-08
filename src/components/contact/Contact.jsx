import {React, useState} from 'react';
import './contact.css';

export const Contact = () => {
    const [values, setValues] = useState({
      name: '', email: '', subject: '', body: '' 
    });

    const set = (name) => {
      return ({ target: { value } }) => {
        setValues(oldValues => ({...oldValues, [name]: value }));
      }
    };

    const saveFormData = async () => {
      const response = await fetch('https://api.ssingularity.co.in/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer my-token',
          'My-Custom-Header': 'foobar'
        },
        body: JSON.stringify(values)
      });
      return response;
    }

    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent default submission    
      try {
        await saveFormData();      
        console.log(values);
        setValues({
          name: '', email: '', subject: '', body: '' 
        });
        console.log(values);
      } catch (e) {
        alert(`Request failed! ${e.message}`);
      }
    }

    return (
        <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact Us</h2>
          <p>We will be more than excited to talk to you. All your suggestions, reviews, feedback and queries will be appreciated. Do get in touch with us and we will love to hear from you!</p>
        </div>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Thane, Maharashtra</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@ssingularity.co.in</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 99677 14270 </p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.118403037804!2d72.98624461490365!3d19.233670886997658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bbbcd4f20c15%3A0x4c36bff2609ee7cf!2sLodha%20Amara%20Thane!5e0!3m2!1sen!2sin!4v1627570256377!5m2!1sen!2sin" frameBorder="0" style={{border:"0", width:"100%",height:"290px"}} allowFullScreen></iframe>
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form className="php-email-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" className="form-control" required value={values.name} onChange={set('name')}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" className="form-control" name="email" required value={values.email} onChange={set('email')}/>
                </div>
              </div>
              <div className="form-group">
                <label for="name">Subject</label>
                <input type="text" className="form-control" name="subject" required value={values.subject} onChange={set('subject')}/>
              </div>
              <div className="form-group">
                <label for="name">Message</label>
                <textarea className="form-control" name="body" rows="10" required value={values.body} onChange={set('body')}></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    )
}

export default Contact;