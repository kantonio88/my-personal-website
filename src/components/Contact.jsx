import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_snd1n5l', 'template_sn1kzax', e.target, 'RB_253im_9RtDb-k5')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="py-5" style={{ background: "#b8c1ec" }}>
      <div className="text-center">
        <h1 className="text-4xl text-dark mb-4 display-4">Contact Me</h1>
        <p className="fs-5">
          Feel free to get in touch with me via email below:
        </p>
      </div>
      <div className="container d-flex justify-content-center align-items-center h-100 pt-4">
        <div className="card" style={{ width: "50%", borderRadius: "10px" }}>
          <div className="card-body text-light" style={{ background: "#232946", borderRadius: "10px" }}>
            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="5"></textarea>
              </div>
              <button type="submit" className="btn" style={{ backgroundColor: "#eebbc3" }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
