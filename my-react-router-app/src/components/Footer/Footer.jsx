import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-5">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-3 mb-4 mb-md-0">
            <Link to="/" className="d-flex align-items-center mb-3">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="Logo"
                height="60"
              />
            </Link>
          </div>

          {/* Resources */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none text-muted">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none text-muted">About</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-3">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/miss-world-09/projects" className="text-decoration-none text-muted" target="_blank" rel="noreferrer">GitHub</a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">Discord</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/privacy-policy" className="text-decoration-none text-muted">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-decoration-none text-muted">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        {/* Bottom Row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span className="text-muted small">
            © 2025 <a href="" className="text-decoration-none">Disha Sahay</a>. All Rights Reserved.
          </span>

          <div className="mt-3 mt-md-0">
            <a href="#" className="text-muted me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-muted me-3"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-muted me-3"><i className="bi bi-github"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
