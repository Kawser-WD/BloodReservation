import React from 'react';
import { Form,Button } from 'react-bootstrap'
import './Contact.css'
import emailjs from 'emailjs-com';

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ckud76d', 'template_majra2q', e.target, 'user_GMGwMjpOOKjDoBGsqzLQs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
const Contact = () => {
    return (
        // <section className="contact">
        //   <h1 className="info">আপনার মতামত পাঠান</h1> 
        //   <div className="p-form">
        //   <div className="form">
        //   <div className="input-form">
        //   <Form className="contact-form" onSubmit={sendEmail}>
        //     {/* <label>Name</label>
        //     <input type="text" name="name" />
        //     <label>Email</label>
        //     <input type="email" name="email" />
        //     <label>Message</label>
        //     <textarea name="message" />
        //     <input type="submit" value="Send" /> */}
        //     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        //         <Form.Label>নাম</Form.Label>
        //         <Form.Control type="text" name="name"/>
        //     </Form.Group>
        //     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        //         <Form.Label>ইমেইল</Form.Label>
        //         <Form.Control type="email" name="name"/>
        //     </Form.Group>
        //     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        //         <Form.Label>ম্যাসেজে</Form.Label>
        //         <Form.Control as="textarea" name="message" rows={3} />
        //     </Form.Group>
        //     <Button variant="primary" type="submit">Submit</Button>
        //     </Form>
        //   </div>
        //   </div>
        //   </div>
        // </section>
          <section className="contact">
            <div className="row">
              <div className="col-lg-12">
              <form className="was-validated w-50 m-auto">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Name</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Message</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              </div>
            </div>

          </section>
    );
};

export default Contact;