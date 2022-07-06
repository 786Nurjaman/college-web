import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

const Course = () => {
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
                    <h1>Our Courses</h1>
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

export default Course