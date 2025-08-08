import React from 'react';
import { HiArrowNarrowUp } from "react-icons/hi";

function LandingPage() {
  return (
    <div className="w-100 min-vh-100 bg-dark text-light">
      <div className="container py-5 mt-5">

        <div className="textstructure mb-4">
          <div className="masker fw-bold mb-2"></div>
          <h1 className="display-3 fw-bold lh-1 mb-0">WE CREATE</h1>
        </div>

        <div className="textstructure ">
          <div className="masker fw-bold mb-2"></div>
          <h1 className="display-3 fw-bold lh-1 mb-0">EYE OPENING</h1>
        </div>

        <div className="textstructure">
          <div className="masker fw-bold mb-2"></div>
          <h1 className="display-3 fw-bold lh-1">PRESENTATIONS</h1>
        </div>

        <div className="border-top border-dark mt-5 d-flex align-items-center custom-gap">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p key={index} className="fs-6 fw-light  mb-1">{item}</p>
          ))}

         <div className="d-flex justify-content-end">
  <div className="px-1 py-1 border border-2 border-secondary fw-light rounded-4">
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ width: '80px', height: '80px' }}
    >
      <span
        style={{
          transform: 'rotate(45deg)',
          display: 'inline-block',
          fontSize: '24px',
        }}
      >
        <HiArrowNarrowUp />
      </span>
      <span className="mt-2 text-center" style={{ fontSize: '14px' }}>
        START THE PROJECT
      </span>
    </div>
  </div>
</div>


        </div>

      </div>
    </div>
  );
}

export default LandingPage;
