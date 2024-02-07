import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <h3>Contact Us</h3>
            <p>Email:Info@example.com</p>
            <p>Phone:+121 56556 565556</p>
            <p>Address:Your Address 123 street</p>
          </div>
          <div className="footer-content">
            <h3>Quick Links</h3>
            <ul className="list">
              <li>
                <a className='list-item' href="">Home</a>
              </li>
              <li>
                <a className='list-item' href="">About</a>
              </li>
              <li>
                <a className='list-item' href="">Services</a>
              </li>
              
            </ul>
          </div>
         
        </div>
        <div className="bottom-bar">
          <p>&copy; 2024 your company . All rights reserved Created By PostEducation</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
