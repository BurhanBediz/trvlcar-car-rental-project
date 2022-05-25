import React from 'react'
import ContactBar from '../common/header/contact-bar'
import './contact.css'

const Contact = () => {
  return (
    <>
    <h3>Contact Info</h3>
    <div className="contact-list">
    <ContactBar/>
    </div>
{/*     <ul className="contact-list">
    <li>
        <h5>Adress</h5>
        <p>Cherry Tree Ct, Jacksonville, 32216 Florida USA</p>
    </li>
    <li>
        <h5>Phone</h5>
        <p>(904)-369-8938 <br />(904)-651-6572</p>
    </li>
    <li>
        <h5>Email</h5>
        <p>info@trvlcar.com <br />rent@trvlcar.com</p>
    </li>
    </ul> */}
    </>
  )
}

export default Contact