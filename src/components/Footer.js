import React from 'react'
import arrow from '../assets/arrow.png'
import telegram from '../assets/telegram.png'
import twitter from '../assets/twitter.png'
import work from '../assets/work.png'



function Footer() {
    return (
        <div className='text-white-100'>
            <footer>

                <div id='about' className="lg:px-28 lg:py-12 py-6 px-5 font-outfit">
                    <div className='container mx-auto'>
                        <div className='lg:flex items-center justify-between'>

                            <nav>
                                <ul className="flex flex-wrap justify-center gap-6 tracking-widest items-center uppercase">
                                    <li><a href="/" className="hover:border-b-4 border-blue-50 pb-1.5">Home</a></li>
                                    <li><a href="#contract" className="hover:border-b-4 border-blue-50 pb-1.5">contract</a></li>
                                    <li><a href="#about" className="hover:border-b-4 border-blue-50 pb-1.5">about us</a></li>
                                    <li><a href="#utility" className="hover:border-b-4 border-blue-50 pb-1.5">utility</a></li>
                                </ul>
                            </nav>

                            <a href='#home' className='flex flex-col gap-8 items-center justify-start lg:mt-0 mt-6'>
                                <img src={arrow} alt="arrow" className='' />

                                <p className='text-center'>
                                    Scroll to the Top
                                </p>
                            </a>

                            <div className='flex justify-center gap-5 items-center lg:mt-0 mt-6'>

                                <a href='https://t.me/optimusarb'>
                                    <img src={telegram} alt="Telegram" className='' />
                                </a>
                                <a href='https://twitter.com/optimusarb'>
                                    <img src={twitter} alt="Twitter" className='' />
                                </a>
                                <a href='/'>
                                    <img src={work} alt="work" className='' />
                                </a>

                            </div>

                        </div>

                        <div className='lg:flex items-center justify-between pt-12'>
                            <p>
                                © Copyright, {new Date().getFullYear()} Optimus ARB. All Right Reserved.
                            </p>

                            <ul className="flex gap-6 items-center lg:mt-0 mt-6">
                                <li><a href="/" className="text-blue-50">Terms of Service</a></li>
                                <li><a href="/" className="text-blue-50">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer