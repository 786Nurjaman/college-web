import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

const About = () => {
    const [state, setState] = useState(false);

    function showMenu() {
        setState(true)
    }
    function hideMenu() {
        setState(false)
    }
    return (
        <div>
            <section className="sub-header">
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
                <h1>About Us</h1>
            </section>
            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <h1>We are the world's largest university</h1>
                        <p>At clita consetetur dolores erat labore aliquyam takimata sadipscing, diam dolor magna eos eirmod dolore takimata. Nonumy sed erat amet lorem labore. Voluptua ea tempor et rebum. Dolore rebum voluptua stet tempor elitr sanctus consetetur eos. Est ea diam magna.</p>
                        <a href="" className="hero-btn red-btn">EXPLORE NOW</a>
                    </div>
                    <div className="about-col">
                        <Image src="/images/about.jpg" width={'722'} height={'481'} alt="image" />
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
    )
}

export default About