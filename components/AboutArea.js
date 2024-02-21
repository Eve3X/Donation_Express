import React from 'react';

const AboutArea = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-12">
                        <div className="about-large-img">
                            <img src="/images/about-img.jpg" alt="" />
                        </div>
                    </div> */}  
                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <img src="/images/aboutus.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-heading">
                            <div className="section-heading">
                                <div className="section-icon">
                                    {/* <img src="/images/justlogo.svg" alt="section-icon" /> */}
                                </div>
                                <h2 className="section__title">Discover Donation Express</h2>
                                <p className="section__meta" >learn about non profit agency</p>
                                <p className="section__desc">
                                Welcome to Donation Express, where the spirit of giving meets the drive for positive change. As an organization committed to making a difference, Donation Express focuses on community development, education, healthcare, and social welfare. With an inclusive approach, we embrace diversity and welcome individuals, volunteers, and organizations to join us on our mission. Transparency and accountability are our guiding principles, ensuring that every contribution counts toward creating a more equitable and sustainable world. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutArea;
