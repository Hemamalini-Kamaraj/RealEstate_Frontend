import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-container">
      <div className="first-col">
        <h1 className="company-name">RealEstate</h1>
        <div className="company-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          velit molestias ea dolor fugiat dignissimos at nam veritatis aliquid,
          accusamus cupiditate ab facere corporis fugit officia neque voluptates
          provident a.
        </div>
      </div>
      <div className="second-col">
        <h2 className="link-header">Contact</h2>
        <ul className="link-items">
          <li>Tamil Nadu, India</li>
          <li>******@gmail.com</li>
          <li>+91 1234567890</li>
          <li>0422 123456</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer