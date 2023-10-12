import React from "react";
import "./contact.scss";
import CustomInput from "../../components/customInput/CustomInput";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-image">
        <img src="/image-15.jpeg" alt="" />
      </div>
      <div className="contact-content w-main">
        <div className="row">
          <div className="col-8">
            <div className="contact-form">
              <div className="header">
                <h4>Contact with us</h4>
                <h1>Get In Touch</h1>
                <p>
                  In hac habitasse platea dictumst. Pellentesque viverra sem nec
                  orci lacinia, in bibendum urna mollis. Quisque nunc lacus,
                  varius vel leo a, pretium lobortis metus. Vivamus consectetur
                  consequat justo.
                </p>
              </div>
              <div className="content">
                <form action="">
                  <div className="form-header">
                    <div className="col-6">
                      <label htmlFor="name">Your name *</label>
                      <CustomInput type="text" id="name" />
                    </div>
                    <div className="col-6">
                      <label htmlFor="email">Your email *</label>
                      <CustomInput type="email" id="email" />
                    </div>
                  </div>
                  <div className="form-subject">
                    <label htmlFor="subject">Subject *</label>
                    <CustomInput type="text" id="subject" />
                  </div>
                  <div className="form-message">
                    <label htmlFor="message">Your message *</label>
                    <textarea id="message" rows={10} cols={5} />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
