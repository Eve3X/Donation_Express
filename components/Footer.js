import React, {Component} from 'react';
import Link from 'next/link';

class Footer extends Component {
    constructor(){
        super()
        this.state = {
          scrollBtn: false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            scrollBtn: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            scrollBtn: false
        });
      }

    }

    scrollTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <section className="footer-area">
                    <div className="newsletter-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mx-auto text-center">
                                    <div className="section-heading footer-heading">
                                        <div className="section-icon">
                                            {/* <img src="/images/justlogo.svg" alt="section-icon" /> */}
                                        </div>
                                        <h2 className="section__title text__white">Newsletter</h2>
                                        <p className="section__meta">stay updated</p>
                                    </div>
                                    <div className="newsletter-form">
                                        <div className="form-shared">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control"
                                                                   placeholder="Email address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <button className="theme-btn submit__btn"
                                                                type="submit">subscribe
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-top">
                        <div className="container">
                            <div className="row footer-widget-wrap">
                                <div className="col footer-item footer-item1">
                                    <h3 className="widget__title">about</h3>
                                    <ul className="foot__links">
                                        {/* <li><Link href="#">causes</Link></li> */}
                                        <li><Link href="/about">about</Link></li>
                                        <li><Link href="/events">New Campaign</Link></li>
                                        <li><Link href="/map">Site Map</Link></li>
                                        <li><Link href="/events">events</Link></li>
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item2">
                                    <h3 className="widget__title">explore</h3>
                                    <ul className="foot__links">
                                        <li><Link href="/news">Press Release</Link></li>
                                        <li><Link href="/contact">contact</Link></li>
                                        {/* <li><Link href="/index">Blog Posts</Link></li> */}
                                        <li><Link href="/contact">Social Connect</Link></li>
                                        {/* <li><Link href="#">Help Topics</Link></li> */}
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item3">
                                    <h3 className="widget__title">links</h3>
                                    <ul className="foot__links">
                                        {/* <li><Link href="#">Podcasts</Link></li> */}
                                        {/* <li><Link href="#">Privacy Policy</Link></li> */}
                                        <li><Link href="#">Videos</Link></li>
                                        <li><Link href="#">Terms of Use</Link></li>
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item3">
                                    <h3 className="widget__title">More</h3>
                                    <ul className="foot__links">
                                        {/* <li><Link href="#">Care for All People</Link></li>
                                        <li><Link href="#">Build school for kids</Link></li> */}
                                        <li><Link href="/volunteer">Being Volunteer</Link></li>
                                        <li><Link href="/donate">Raise fund to help</Link></li>
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item4">
                                    <h3 className="widget__title">contact</h3>
                                    <ul className="contact__info">
                                        <li>10 pleasant valley way , New Jersey 07005</li>
                                        <li><Link href="mailto: hr@dreamsearchtech.com"> hr@dreamsearchtech.com</Link></li>
                                        <li><Link href="mailto: Info@dreamsearchtech.com"> Info@dreamsearchtech.com</Link></li>
                                        <li><Link href="tel:+1 (973) 722-2242">+1 (973) 722-2242</Link></li>
                                    </ul>
                                    <div className="footer__social">
                                        <ul>
                                            <li><Link href="https://twitter.com/DonationExpress" target='_blank'><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link href="https://www.facebook.com/profile.php?id=61555580108720" target='_blank'><i class="fa fa-facebook"></i></Link></li>
                                            <li><Link href="https://www.instagram.com/donationexpress" target='_blank'><i className="fa fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>

                <div onClick={this.scrollTop} id="back-to-top" className={this.state.scrollBtn ? 'back-btn-shown' : ''}>
                    <i className="fa fa-angle-up" title="Go top"></i>
                </div>

            </div>
        );
    }
}

export default Footer;