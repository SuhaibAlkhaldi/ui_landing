

import React from 'react';

const Whysolar = () => {
  
  return (
    <section className="container py-xl-5 mt-5" id="why">
  <div className="row">
        <div className="col-12 col-md-4 col-lg-4 d-md-flex">
            <div className="card bg-primary text-light border-0 shadow">
                <h4 className="card-title bg-secondary text-dark p-2">Let's go solar... why?</h4>   
                <div className="card-body">
                    <p className="card-text text-light">If you own your home and are on a limited or fixed income...</p>
                    <p className="card-text text-light">iIf you own your home and you are worry about your planet...</p>
                    <p className="card-text text-light">iIf you own your home and you want improve your property...</p>
                    <p className="card-text text-light">iIf you own a home and it is&nbsp; located far away from power grid ...</p>
                </div>
            </div>
        </div>
        <div className="col flex-wrap d-flex">
            <div className="row gx-4 gy-4 row-cols-1 row-cols-xl-3 d-xl-flex align-items-xl-center">
                <div className="col">
                    <div className="card why-subcard">
                        <div className="card-body p-3">
                            <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex d-xl-flex justify-content-center mx-auto align-items-xl-center d-inline-block mb-3 bs-icon bi bi-flower2"></div>
                            <h4 className="d-flex justify-content-center card-title">Greener Impact</h4>
                            <p className="card-text">Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card why-subcard">
                        <div className="card-body p-3">
                            <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center mx-auto d-inline-block mb-3 bs-icon bi bi-receipt-cutoff"></div>
                            <h4 className="d-flex justify-content-center   card-title">Lower Bills</h4>
                            <p className="card-text">Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card why-subcard">
                        <div className="card-body p-3">
                            <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center mx-auto d-inline-block mb-3 bs-icon bi bi-house-door"></div>
                            <h4 className="d-flex justify-content-center  card-title">Property Value</h4>
                            <p className="card-text">Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default Whysolar;
