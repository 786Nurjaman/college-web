import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

const Blog = () => {
    const [state, setState] = useState(false);

    function showMenu() {
        setState(true)
    }
    function hideMenu() {
        setState(false)
    }
    return (
        <>
            <div>
                <section className="sub-header">
                    <nav>
                        <Link href="/"><a><Image src="/images/logo.png" width={'150'} height={'43'} alt="image" /></a></Link>
                        <div className="nav-links" id="navLinks" style={{ right: state ? '0px' : '-200px' }}>
                        <FaTimes className='fa' onClick={hideMenu} />
                            <ul>
                                <li><Link href="/"><a>HOME</a></Link></li>
                                <li><Link href="/About"><a>ABOUT</a></Link></li>
                                <li><Link href="/Course"><a>COURSE</a></Link></li>
                                <li><Link href="/Blog"><a>BLOG</a></Link></li>
                                <li><Link href="/Contact"><a>CONTACT</a></Link></li>
                            </ul>
                        </div>
                        <FaBars className='fa' onClick={showMenu} />
                    </nav>
                    <h1>Our Certificate & Online Programs For 2021</h1>
                </section>
                <section className="blog-content">
                    <div className="row">
                        <div className="blog-left">
                            <Image src="/images/certificate.jpg" width={'990'} height={'658'} alt="image" />
                            <h2>Our Certificate & Online Programs For 2021</h2>
                            <p>Takimata dolor no et sadipscing dolor duo. Amet eirmod amet dolor sea labore gubergren sadipscing sit. Clita ipsum tempor magna dolor accusam diam diam gubergren, nonumy amet dolor eirmod sit amet, gubergren nonumy et diam at sanctus diam. Rebum sea ipsum sanctus amet clita labore voluptua no dolores. Invidunt rebum no sed rebum amet tempor duo aliquyam, labore dolor no at sed sea ipsum justo lorem. Justo stet et diam magna sit, elitr ea sadipscing sanctus diam invidunt labore, sed elitr kasd sea et, nonumy rebum stet consetetur at. Aliquyam nonumy dolores amet lorem, diam clita justo gubergren sanctus dolor magna, sea no sadipscing clita duo stet nonumy dolor magna dolor, et dolore gubergren et sit sit sadipscing justo lorem, sed stet dolore et sanctus dolor amet magna. Duo no et et justo et ipsum dolore est sanctus, rebum labore sed et nonumy stet sed, eirmod invidunt tempor gubergren est.</p>
                            <br />
                            <p>Et ipsum ipsum eirmod est consetetur, kasd invidunt consetetur ea justo amet at no amet eos. Magna voluptua takimata clita sanctus invidunt. Dolor diam magna et dolores. Sit consetetur ipsum dolor ea voluptua no amet eos justo. Stet ipsum et sit amet. Vero ipsum dolor erat diam dolore nonumy ea accusam rebum. Dolores nonumy amet invidunt vero voluptua sit magna accusam. Sed sed et dolores dolores sadipscing sadipscing ipsum, accusam voluptua diam sed kasd, sit lorem ipsum consetetur duo. Ea consetetur accusam tempor vero sanctus voluptua sadipscing. Sed sit labore vero sed eirmod invidunt dolore, duo dolores lorem sit erat ipsum no. Gubergren rebum ipsum vero nonumy dolor. Rebum amet erat ipsum gubergren eirmod. Est sit no eos takimata dolor.</p>
                            <br />
                            <p>Diam eirmod magna dolor sanctus ea, nonumy clita duo eos takimata invidunt at gubergren magna, et et et aliquyam sadipscing vero. Sadipscing ipsum eirmod sea rebum, sanctus dolore eirmod no sed ipsum magna est stet. Aliquyam eos stet vero erat lorem eos magna accusam, dolores amet takimata gubergren consetetur sadipscing kasd et. Sadipscing sit sit nonumy diam eirmod, ea sed no dolor erat diam, est sit dolor sadipscing sed. Invidunt dolor et vero stet dolores sit elitr et, voluptua duo et sed dolores dolor aliquyam ut amet diam. Sed dolores aliquyam sea lorem gubergren, no labore erat dolor amet. Lorem no tempor consetetur no dolor et sanctus. Elitr magna stet no justo aliquyam eirmod dolor amet, clita vero sit ea amet at justo tempor labore. Lorem ut sed sed et ut consetetur takimata invidunt ea, rebum takimata voluptua ipsum vero amet et, stet kasd dolore invidunt nonumy dolore nonumy. Tempor lorem dolor tempor sit sed est rebum magna, accusam accusam.</p>
                            <div className="comment-box">
                                <h3>Leave a comment</h3>
                                <form action="" className="comment-form">
                                    <input type="text" placeholder="Enter Name" />
                                    <input type="text" placeholder="Enter Email" />
                                    <textarea rows="5" placeholder="Your comment"></textarea>
                                    <button type="submit" className="hero-btn red-btn">Post Comment</button>
                                </form>
                            </div>
                        </div>
                        <div className="blog-right">
                            <h3>Post Categories</h3>
                            <div>
                                <span>Business Analytics</span>
                                <span>21</span>
                            </div>
                            <div>
                                <span>Data Science</span>
                                <span>28</span>
                            </div>
                            <div>
                                <span>Machine Learning</span>
                                <span>15</span>
                            </div>
                            <div>
                                <span>Computer Science</span>
                                <span>34</span>
                            </div>
                            <div>
                                <span>AutoCad</span>
                                <span>42</span>
                            </div>
                            <div>
                                <span>Journalism</span>
                                <span>35</span>
                            </div>
                            <div>
                                <span>Commerce</span>
                                <span>30</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="footer">
                    <h4>About Us</h4>
                    <p>Stet erat no stet amet stet ipsum et clita sanctus sea. Dolores lorem lorem erat nonumy stet tempor stet sed no, <br />ipsum invidunt sed invidunt  dolor accusam justo clita, est tempor ut et at. Kasd diam gubergren rebum kasd,.</p>
                    <div className="icons">
                        <BsFacebook size={25} style={{ marginRight: '20px' }} />
                        <GrInstagram size={25} style={{ marginRight: '20px' }} />
                        <AiFillTwitterCircle size={25} style={{ marginRight: '15px' }} />
                        <FaLinkedin size={25} />
                    </div>
                    <p>  Copyright <BsHeart size={12} /> nurjamanshekh@gmail.com</p>
                </section>
            </div>
        </>
    )
}

export default Blog;