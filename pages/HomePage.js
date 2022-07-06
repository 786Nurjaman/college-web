import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai'
import { FaStarHalf } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'


const HomePage = () => {
    
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
                <div>
                    <section className="header">
                        <nav>
                            <Link href="/">
                                <a><Image src="/images/logo.png" width={'150'} height={'43'} alt="" /></a>
                            </Link>
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
                        <div className="text-box">
                            <h1>World's Biggest Universty</h1>
                            <p>Dolore volpuptua sit elitr kasd amet. Consetetur labore sea ipsum sanctus kasd labore invidunt accusam,<br /> ipsum et clita sadipscing lorem.</p>
                            <Link href="#"><a className="hero-btn">Visit Us To Know More</a></Link>
                        </div>
                    </section>
                    <section className="course">
                        <h1>Courses We Offer</h1>
                        <p>Dolore et erat elitr elitr tempor stet stet no, ipsum.</p>
                        <div className="row">
                            <div className="course-col">
                                <h3>Intermediate</h3>
                                <p>Duo ipsum sed et voluptua stet, consetetur rebum sed takimata at amet gubergren diam voluptua justo. Diam elitr amet est eos, invidunt takimata aliquyam elitr sed dolore. Invidunt sadipscing diam accusam lorem ut magna duo, et et invidunt lorem sit.</p>
                            </div>
                            <div className="course-col">
                                <h3>Degree</h3>
                                <p>Duo ipsum sed et voluptua stet, consetetur rebum sed takimata at amet gubergren diam voluptua justo. Diam elitr amet est eos, invidunt takimata aliquyam elitr sed dolore. Invidunt sadipscing diam accusam lorem ut magna duo, et et invidunt lorem sit.</p>
                            </div>
                            <div className="course-col">
                                <h3>Post  Graduation</h3>
                                <p>Duo ipsum sed et voluptua stet, consetetur rebum sed takimata at amet gubergren diam voluptua justo. Diam elitr amet est eos, invidunt takimata aliquyam elitr sed dolore. Invidunt sadipscing diam accusam lorem ut magna duo, et et invidunt lorem sit.</p>
                            </div>
                        </div>
                    </section>
                    <section className="campus">
                        <h1>Our Global Campus</h1>
                        <p>Diam sanctus justo ea voluptua clita consetetur amet vero ea.</p>
                        <div className="row">
                            <div className="campus-col">
                                <Image src="/images/london.png" width={'487'} height={'690'} alt="image" />
                                <div className="layer">
                                    <h3>LONDON</h3>
                                </div>
                            </div>
                            <div className="campus-col">
                                <Image src="/images/newyork.png" width={'487'} height={'690'} alt="image" />
                                <div className="layer">
                                    <h3>NEW YORK</h3>
                                </div>
                            </div>
                            <div className="campus-col">
                                <Image src="/images/washington.png" width={'487'} height={'690'} alt="image" />
                                <div className="layer">
                                    <h3>WASHINGTON</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="facilities">
                        <h1>Our Facilities</h1>
                        <p>Diam sanctus justo ea voluptua clita consetetur amet vero ea.</p>
                        <div className="row">
                            <div className="facilities-col">
                                <Image src="/images/library.png" width={'472'} height={'414'} alt="image" />
                                <h3>World className Library</h3>
                                <p>Est diam at sed vero gubergren lorem vero, diam gubergren lorem ut eos ipsum et est sit, erat rebum labore.</p>
                            </div>
                            <div className="facilities-col">
                                <Image src="/images/basketball.png" width={'472'} height={'414'} alt="image" />
                                <h3>Largest Play Ground</h3>
                                <p>Est diam at sed vero gubergren lorem vero, diam gubergren lorem ut eos ipsum et est sit, erat rebum labore.</p>
                            </div>
                            <div className="facilities-col">
                                <Image src="/images/cafeteria.png" width={'472'} height={'414'} alt="image" />
                                <h3>Tasty and Healthy Food</h3>
                                <p>Est diam at sed vero gubergren lorem vero, diam gubergren lorem ut eos ipsum et est sit, erat rebum labore.</p>
                            </div>
                        </div>
                    </section>
                    <section className="testimonials">
                        <h1>What Our Student Says</h1>
                        <p>Diam sanctus justo ea voluptua clita consetetur amet vero ea.</p>
                        <div className="row">
                            <div className="testimonial-col">
                                <div>
                                    <p>Erat lorem voluptua duo justo takimata takimata eirmod. Magna sed elitr sed rebum eos tempor sanctus elitr. Dolor ipsum justo.</p>
                                    <h3>Cristine Berkley</h3>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <FaStarHalf />
                                </div>
                            </div>
                            <div className="testimonial-col">
                                <div>
                                    <p>Erat lorem voluptua duo justo takimata takimata eirmod. Magna sed elitr sed rebum eos tempor sanctus elitr. Dolor ipsum justo.</p>
                                    <h3>David Byer</h3>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="cta">
                        <h1>Enroll for our various online <br />courses from The World</h1>
                        <Link href="/Contact"><a className="hero-btn">CONTACT US</a></Link>
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
            </div>
        </>
    )
}

export default HomePage;