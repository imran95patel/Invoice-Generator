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
          {/* <div className="footer-content">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li>
                <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="bottom-bar">
          <p>&copy; 2024 your company . All rights reserved Created By PostEducation</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
