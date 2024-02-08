import React from 'react';

const Contact = () => {
    return (
        <section className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Get in Touch With Us</h2>
                            <p className="section__meta">Write a message</p>
                            <p className="section__desc">
                            Join Donation Express in making a difference. Reach out to us to learn more about our initiatives and how you can contribute. Whether you want to volunteer, donate, or learn more about our mission, we're here to connect and create a better world together.





                            </p>
                            <ul className="section__list">
                                <li><a href="https://twitter.com/DonationExpress"><i className="fa fa-twitter" target='_blank'></i></a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=61555580108720"><i className="fa fa-facebook" target='_blank'></i></a></li>
                                
                                <li><a href="https://www.instagram.com/donationexpress"><i className="fa fa-instagram" target='_blank'></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-shared">
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 form-group">
                                        <input className="form-control" type="text" name="name" placeholder="Full Name" />
                                    </div>

                                    <div className="col-lg-6 col-sm-6 form-group">
                                        <input className="form-control" type="email" name="email"
                                               placeholder="Email Address" />
                                    </div>

                                    <div className="col-lg-12 form-group">
                                        <input className="form-control" type="number" name="phone"
                                               placeholder="Phone Number" />
                                    </div>

                                    <div className="col-lg-12 col-sm-12 form-group">
                                        <textarea className="textarea" name="message"
                                                  placeholder="Write a Message"></textarea>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <button className="theme-btn submit__btn" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row contact-detail-action">
                    <div className="col-lg-4">
                        <div className="contact-item contact-item1">
                            <h3 className="contact__title">About</h3>
                            <p className="contact__desc">
                            We aim to address various societal challenges and contribute to it.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-item contact-item2">
                            <h3 className="contact__title">Address</h3>
                            <p className="contact__desc">
                            10 pleasant valley way , New Jersey 07005
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-item contact-item3">
                            <h3 className="contact__title">Contact</h3>
                            <p className="contact__desc">
                            hr@dreamsearchtech.com <br />
                            +19737222242
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
