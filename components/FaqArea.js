import React, {Component} from 'react';

class FaqArea extends Component {

    componentDidMount() {
        new Accordion('.accordion-container');
    }



    render() {
        return (
            <section className="faq-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/justlogo.svg" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Have any Question?</h2>
                                <p className="section__meta">frequently asked questions</p>
                            </div>
                            <div className="faq-img-box">
                                <img src="/images/questions.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion-container">
                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Make a difference in the life of a child</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Embark on a transformative journey by contributing to our mission to make a meaningful impact in the lives of children. Your support can provide them with education, healthcare, and the hope for a brighter future.</p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">How can I donate to your organization?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Donating is simple and impactful! You can contribute through our website's secure donation portal, by mailing a check to our headquarters, or by participating in fundraising events. Your generosity fuels our initiatives and makes a lasting difference.</p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">What impact has your organization made in the community so far?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Our organization has touched countless lives, from empowering education to providing essential healthcare services. Through community-driven projects, we've witnessed positive transformations, fostering self-sufficiency and resilience.  </p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Is my donation tax-deductible?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Yes, your donation is tax-deductible. We are a registered non-profit organization, and your contributions not only create positive change but also provide you with the benefit of a tax deduction.</p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Join your hand with us for a better life</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Extend your hand in solidarity as we work towards creating a better life for those in need. Your involvement, whether through volunteering, donations, or advocacy, strengthens our collective effort to build a more compassionate and equitable world.





</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqArea;