import React from 'react';

export default function About() {
  return (
    <div className="py-5 bg-white">
      <div className="container px-4">
        <div className="row align-items-center">
          
          {/* Image column */}
          <div className="col-md-5 col-lg-5 mb-4 mb-md-0">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="About"
              className="img-fluid"
            />
          </div>
          
          {/* Text column */}
          <div className="col-md-7 col-lg-7">
            <h2 className="h2 fw-bold text-dark">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-4 text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
              aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-3 text-muted">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
