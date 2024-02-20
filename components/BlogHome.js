import React from 'react';

const BlogHome = () => {
    return (
        <section className="blog-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className="section-heading blog-heading">
                            <div className="section-icon">
                                <img src="/images/justlogo.svg" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Recent Blog Posts</h2>
                            <p className="section__meta">news and updates</p>
                        </div>
                    </div>
                </div>
                <div className="row recent-post-wrap">
                    <div className="col-lg-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date">14 Oct, 2022</span>
                                <img src="/images/blog-img.jpg" alt="service-image" />
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><a href="https://www.unicef.org/blog/pakistan-floodwaters-hide-new-dangers" target="_blank">
                                In Pakistan, floodwaters hide new dangers</a></h3>
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><a href="#">mike hardson</a></li>
                                    <li><a href="https://www.unicef.org/blog/pakistan-floodwaters-hide-new-dangers" target="_blank">3 comments</a></li>
                                </ul>
                                <p className="news__content-text">
                                Historic floods have left families devastated. Water-borne diseases and malnutrition are compounding the threats to their safety.
                                </p>
                                <a href="https://www.unicef.org/blog/pakistan-floodwaters-hide-new-dangers" target="_blank" className="theme-btn">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="third-recent-box">
                            <ul className="third-recent-item">
                                <li>
                                    <div className="recent__img">
                                        <a href="/single-news"><img src="/images/blog-img2.jpg" alt="" /></a>
                                    </div>
                                    <div className="recent__content">
                                        <span>14 Nov, 2022</span>
                                        <h4><a href="https://www.unicef.org/blog/rising-waters-sinking-lives-cambodia-battle-against-climate-health-threats" target="_blank">Rising waters, sinking lives</a>
                                        </h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="recent__img">
                                        <a href="/single-news"><img src="images/blog-img3.jpg" alt="" /></a>
                                    </div>
                                    <div className="recent__content">
                                        <span>19 Dec, 2023</span>
                                        <h4><a href="https://www.unicef.org/blog/hope-and-resilience-amid-hardship-afghanistan" target="_blank">Hope and resilience amid hardship in Afghanistan</a></h4>
                                    </div>
                                </li>   
                                <li>
                                    <div className="recent__img">
                                        <a href="/single-news"><img src="/images/blog-img4.jpg" alt="" /></a>
                                    </div>
                                    <div className="recent__content">
                                        <span>12 Oct, 2023</span>
                                        <h4><a href="https://www.unicef.org/blog/haitis-unimaginable-struggles" target="_blank">
                                        Haiti’s unimaginable struggles </a></h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogHome;
