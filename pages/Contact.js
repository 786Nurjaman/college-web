import React from 'react';
import {useState} from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { BiEnvelope } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

const Contact = () => {
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
                <h1>Contact Us</h1>
            </section>
            <section className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396352.74972541997!2d88.15684140984969!3d22.639362800252123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1629134042554!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>

            </section>
            <section className="contact-us">
                <div className="row">
                    <div className="contact-col">
                        <div>
                        <AiOutlineHome size={50} style={{marginRight:'10px'}} />
                            <span>
                                <h5>XYZ Road, ABC Building</h5>
                                <p>Kolkata, West Bengal, IN</p>
                            </span>
                        </div>
                        <div>
                        <BiPhoneCall size={50} style={{marginRight:'10px'}}/>
                            <span>
                                <h5>+91 0123456789 </h5>
                                <p>Monday to Saturday, 10AM to 6PM</p>
                            </span>
                        </div>
                        <div>
                        <BiEnvelope size={50} style={{marginRight:'10px'}}/>
                            <span>
                                <h5>info@university.com</h5>
                                <p>Email us your query</p>
                            </span>
                        </div>
                    </div>
                    <div className="contact-col">
                        <form action="">
                            <input type="text" placeholder="Enter Your Name" required />
                            <input type="email" placeholder="Enter Email Address" required />
                            <input type="text" placeholder="Enter Your Subject" required />
                            <textarea rows="8" placeholder="Message" required></textarea>
                            <button type="submit" className="hero-btn red-btn">Send Message</button>
                        </form>
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

export default Contact