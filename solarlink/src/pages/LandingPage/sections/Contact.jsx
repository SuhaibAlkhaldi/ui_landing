const Contact = () => {
    return (<div id ='contact' className="section contact-background" >

   
        <div className="section contact-background">
            <section className="contact-bg">
                <div className="container">
                    <div className="content-top text-center">
                        <h5>Get in touch</h5>
                        <h2>Let's <span>Contact</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-sm-12 col-lg-4">
                            <div className="contact-info">
                                <div className="contact-info-inner phone">
                                    <i className="fa fa-phone"></i>
                                    <div className="info-inner">
                                        <h4>Phone</h4>
                                        <p>111-333-555-777</p>
                                        <p>111-333-555-777</p>
                                    </div>
                                </div>
                                <div className="contact-info-inner eamil">
                                    <i className="fa fa-envelope-open"></i>
                                    <div className="info-inner">
                                        <h4>Email</h4>
                                        <p>agency@gmail.com</p>
                                        <p>solaragency@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-info-inner address">
                                    <i className="fa fa-location-arrow"></i>
                                    <div className="info-inner">
                                        <h4>Address</h4>
                                        <p>4th street, house no.17, California<br />United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-sm-12 col-lg-8">
                            <form className="contact-form text-end" id="form" action="#">
                                <div className="row form-row">
                                    <div className="input-main col-sm-6">
                                        <input type="text" className="form-control input-style" id="name" placeholder="Name" name="name" required />
                                    </div>
                                    <div className="input-main col-sm-6">
                                        <input type="text" className="form-control input-style" id="email" placeholder="Email" name="email" required />
                                    </div>
                                    <div className="input-main col-sm-6">
                                        <input type="text" className="form-control input-style" id="phone" placeholder="Phone" name="phone" required />
                                    </div>
                                    <div className="input-main col-sm-6">
                                        <input type="text" className="form-control input-style" id="address" placeholder="Address" name="address" required />
                                    </div>
                                    <div className="input-main col-sm-12">
                                        <textarea className="form-control input-style" rows="5" id="comment" placeholder="Write your message here" required />
                                    </div>
                                </div>
                                <button type="submit" id="bg-btn-color-change" className="custom-btn-secondary">Send Message <i className="fa fa-angle-double-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
}

export default Contact;
