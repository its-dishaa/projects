import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="position-relative bg-light rounded-3 p-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-end">
            <h2 className="display-5 fw-bold">
              Download Now
              <div>Lorem Ipsum</div>
            </h2>
            <Link to="/" className="btn btn-warning mt-4 d-inline-flex align-items-center">
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              <span className="ms-2">Download now</span>
            </Link>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://i.ibb.co/5BCcDYB/Remote2.png"
              alt="image1"
              className="img-fluid"
              style={{ maxWidth: '300px' }}
            />
          </div>
        </div>
      </div>

      {/* Second Image */}
      <div className="text-center mb-5">
        <img
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="image2"
          className="img-fluid"
          style={{ maxWidth: '300px' }}
        />
      </div>

      {/* Heading */}
      <h1 className="text-center display-6 fw-semibold">Lorem Ipsum Yojo</h1>
    </div>
  );
}
