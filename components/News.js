import React from 'react';
import Link from 'next/link';

const News = () => {
    return (
        <section className="blog-area blog-area2">
            <div className="container">
                <div className="row recent-post-wrap">
                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date">14 oct, 2023</span>
                                <img src="/images/blog-img.jpg" alt="service-image" />
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><Link href="/single-news">A place where start new
                                    life with peace</Link></h3>
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><a href="#">mike hardson</a></li>
                                    <li><a href="#">3 comments</a></li>
                                </ul>
                                <p className="news__content-text">
                                Historic floods have left families devastated. Water-borne diseases and malnutrition are compounding the threats to their safety. 
                                </p>
                                <Link href="https://www.unicef.org/blog/pakistan-floodwaters-hide-new-dangers" target="_blank" className="theme-btn">read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date meta__date-date2">07 mar, 2023</span>
                                <img src="/images/blog-img5.jpg" alt="service-image"/>
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><Link href="/single-news">Rising waters, sinking lives</Link></h3>
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><a href="#">jessica brown</a></li>
                                    <li><a href="#">2 comments</a></li>
                                </ul>
                                <p className="news__content-text">
                                Sustainable water solutions provide a glimpse of hope for a family living along the Mekong river.
                                </p>
                                <Link href="https://www.unicef.org/blog/rising-waters-sinking-lives-cambodia-battle-against-climate-health-threats" target="_blank" className="theme-btn">read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date meta__date-date3">12 sept, 2023</span>
                                <img src="/images/blog-img6.jpg" alt="service-image" />
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><Link href="/single-news">How flexible funding is saving lives</Link></h3> 
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><a href="#">john smith</a></li>
                                    <li><a href="#">0 comments</a></li>
                                </ul>
                                <p className="news__content-text">
                                With generous support from partners, Global Humanitarian Thematic Funding is helping UNICEF save lives.
                                </p>
                                <Link href="https://www.unicef.org/stories/how-flexible-funding-saving-lives" target="_blank" className="theme-btn">read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date meta__date-date4">04 aug, 2023</span>
                                <img src="/images/blog-img7.jpg" alt="service-image" />
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><Link href="/single-news">Through the eyes of a road crash survivor</Link></h3>
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><a href="#">kevin hart</a></li>
                                    <li><a href="#">4 comments</a></li>
                                </ul>
                                <p className="news__content-text">
                                Why it's time to meaningfully engage with youth on road safety.
                                </p>
                                <Link href="https://www.unicef.org/blog/meaningfully-engaging-with-youth-on-road-safety" target="_blank" className="theme-btn">read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date">26 feb, 2019</span>
                                <img src="/images/blog-img8.jpg" alt="service-image" />
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><Link href="/single-news">Climate finance is about fulfilling obligations</Link></h3>
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><a href="#">christine eve</a></li>
                                    <li><a href="https://www.unicef.org/blog/climate-financing-fulfilling-obligations">2 comments</a></li>
                                </ul>
                                <p className="news__content-text">
                                It’s no longer about developed countries being “good-hearted”.

                                </p>
                                <Link href="https://www.unicef.org/blog/climate-financing-fulfilling-obligations" target="_blank" className="theme-btn">read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date meta__date-date2">18 jan, 2024</span>
                                <img src="/images/blog-img9.jpg" alt="service-image" />
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><Link href="/single-news">Children’s futures at a crossroads</Link></h3>
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><a href="#">mike hardson</a></li>
                                    <li><a href="#">0 comments</a></li>
                                </ul>
                                <p className="news__content-text">
                                Geopolitical and geoeconomic fragmentation threaten the development and survival of children across the globe.
                                </p>
                                <Link href="https://www.unicef.org/blog/childrens-futures-crossroads" target="_blank" className="theme-btn">read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
