import React from "react";
import "./style.css";

function ContactForm() {
  return (
    <div>
      <form>
        <div className="form-group pl-4 pr-4">
          <label>Name</label>
          <input type="name" className="form-control" placeholder="Josh Vegas"/>
            <small id="emailHelp" className="form-text text-muted"></small>
                </div>
          <div className="form-group pl-4 pr-4">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" placeholder="joshvegas@gmail.com"/>
              <small id="emailHelp" className="form-text text-muted"></small>
                </div>
            <div className="form-group pl-4 pr-4">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary rounded-0 pl-4 pr-4 ml-4 mr-4 mb-4">Submit</button>
            </form>
        </div>
        );
      }
      
      export default ContactForm;
