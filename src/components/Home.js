
import React from 'react'
import Menu from './Menu'
import fire from '../assets/fire.png'
import on from '../assets/on.png'
import mobile from '../assets/mobile.png'
import token from '../assets/token.png'
import wal_1 from '../assets/wal_1.png'
import wal_2 from '../assets/wal_2.png'
import wal_3 from '../assets/wal_3.png'
import wal_4 from '../assets/wal_4.png'
import left_1 from '../assets/left_1.png'
import right from '../assets/right.png'
import side from '../assets/side.png'



import Footer from './Footer'
import CountdownTimer from './CountDownTimer'

const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;


function Home() {
    return (
        <div className='bg-blue-100'>

            <div className='bg-gradient font-outfit overflow-hidden text-white-100'>

                <div id='home' className="lg:px-20 px-5">
                    <div className='container mx-auto'>
                        <Menu />

                        <div className='absolute left-0 mt-8 lg:block hidden'>
                            <img src={left_1} alt="" className='' />
                        </div>

                        <div className='flex flex-col gap-y-6 text-center items-center justify-center lg:py-52 py-44 bg-top'>

                            <div>
                                <img src={fire} alt="fire" className='' />
                            </div>

                            <h2 className='lg:text-6xl text-3xl font-semibold font-poppins'>
                                Join Future of Arbitrum
                            </h2>

                            <div className='absolute right-0 mt-12 lg:block hidden'>
                                <img src={right} alt="" className='' />
                            </div>

                            <p className='lg:w-8/12 text-lg'>Optimus Arb is an Arbitrum Based project. The utility behind Optimus Arb is Optimum, which will be the first ever <span className='text-blue-50'>Arbitrum Virtual Machine (AVM)</span> compatible multi-chain wallet with our Optimum technology (in development), allowing for anonymous transactions on the blockchain.</p>

                        </div>

                        <div className='absolute lg:block hidden'>
                            <img src={on} alt="on" className='ml-44' />
                        </div>
                    </div>
                </div>

                {/* About section */}

                <div id='about' className="lg:px-20 lg:py-16 py-5 px-5">
                    <div className='container mx-auto'>
                        <div className="lg:flex block justify-center items-center gap-x-12 py-12">

                            <div className='lg:w-1/3 w-full'>

                            </div>

                            <div className='lg:w-1/2 w-full flex flex-col gap-6'>
                                <h4 className='font-semibold flex items-center gap-2'>
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5" cy="5" r="5" fill="#00C4F4" />
                                        </svg>
                                    </span>
                                    Who we are
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5" cy="5" r="5" fill="#00C4F4" />
                                        </svg>
                                    </span>
                                </h4>
                                <h2 className='lg:text-4xl text-3xl'>
                                    The World’s <span className='text-blue-50'>1st Arbitrum Virtual Machine</span> allowing for anonymous transactions
                                </h2>
                                <p className='text-black-50 uppercase'>
                                    Optimus Arb is an Arbitrum Based project. The utility behind Optimus Arb is Optimum, which will be the first ever Arbitrum Virtual Machine (AVM) compatible multi-chain wallet with our Optimum technology (in development), allowing for anonymous transactions on the blockchain.
                                </p>

                                <a href="https://t.me/MetaGenesisPortal">
                                    <button className="text-white-100 border-2 border-custom rounded-full py-2 lg:px-8 px-4 mt-5 uppercase">
                                        Whitepaper
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div className='absolute lg:block hidden'>
                            <img src={on} alt="on" className='ml-44' />
                        </div>

                    </div>
                </div>

                {/* Contract & Token Supply */}

                <div id='contract' className="lg:px-20 lg:py-12 py-5 px-5 side">
                    <div className='container mx-auto'>

                        <div className='absolute left-0 lg:block hidden'>
                            <img src={left_1} alt="" className='' />
                        </div>

                        <h2 className='lg:text-4xl text-3xl text-center font-poppins font-semibold mb-16'>
                            Contract & Token Supply
                        </h2>

                        <div className="lg:flex block justify-center items-center gap-x-12">

                            <div className='lg:w-1/3 w-full flex flex-col gap-6'>
                                <h4 className='font-semibold text-xl uppercase'>
                                    Details
                                </h4>
                                <h2 className='lg:text-4xl text-3xl'>
                                    Supply =
                                    1,000,000,000,000
                                </h2>

                                <div>
                                    <p className='font-semibold'>
                                        <span className='text-blue-50'>Contract Name: </span>
                                        OPTIMUS ARB
                                    </p>
                                    <p className='font-semibold'>
                                        <span className='text-blue-50'>Contract Address: </span>
                                        TBA
                                    </p>
                                    <p className='font-semibold'>
                                        <span className='text-blue-50'>Smart Contract Platform: </span>
                                        ARB
                                    </p>
                                </div>

                                <div>
                                    <p className='font-semibold text-blue-50'>
                                        Live Launch date
                                    </p>

                                    <CountdownTimer targetDate={dateTimeAfterSevenDays} />

                                </div>

                                <a href="https://t.me/MetaGenesisPortal">
                                    <button className="text-white-100 bg-blue-50 border-2 border-blue-50 font-semibold hover:text-blue-50 hover:border-2 hpver:border-blue-50 hover:bg-blue-100 rounded-full py-3 lg:px-10 px-4 mt-5 uppercase">
                                        Learn more
                                    </button>
                                </a>
                            </div>

                            <div className='lg:w-1/3 w-full'>
                                <div className='bg-blue-200 p-8 rounded-md lg:mt-0 mt-6'>
                                    <h4 className='font-semibold text-center text-xl pb-1.5'>
                                        Tax: 5/5
                                    </h4>
                                    <img src={token} alt="token" className='flex mx-auto' />

                                    <div className='flex gap-2 items-center justify-center mt-16'>
                                        <span>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.109314" y="0.890747" width="20" height="20" rx="10" fill="#005F73" />
                                            </svg>
                                        </span>
                                        <p>
                                            2.5% Project<br></br> Developement
                                        </p>

                                    </div>

                                    <div className='flex gap-2 items-center justify-center '>
                                        <span>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.109314" y="0.890747" width="20" height="20" rx="10" fill="#5DD400" />
                                            </svg>
                                        </span>
                                        <p>
                                            2.5% Marketing
                                        </p>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

                {/* utility */}

                <div id='utility' className="lg:px-20 lg:py-12 py-5 px-5">
                    <div className='container mx-auto'>

                        <div className='flex flex-col gap-8 items-center justify-center'>

                            <h4 className='font-semibold flex items-center mx-auto gap-12 text-center uppercase'>
                                <span>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="5" cy="5" r="5" fill="#00C4F4" />
                                    </svg>
                                </span>
                                Utility
                                <span>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="5" cy="5" r="5" fill="#00C4F4" />
                                    </svg>
                                </span>
                            </h4>

                            <div className='bg-white-100 rounded-xl p-5 text-blue-100 text-center lg:w-9/12'>
                                <h2 className='lg:text-4xl text-2xl text-center font-poppins font-semibold'>
                                    Our Utility Optimum
                                </h2>

                                <p className='lg:text-xl text-md font-semibold pt-2'>
                                    Holding OptimusArb tokens gives holders special access to our " Optimum ".
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


                {/* AVM Compatible Multi-Chain Wallet */}

                <div id='contract' className="lg:px-20 lg:py-12 py-5 px-5">
                    <div className='container mx-auto'>

                        <h2 className='lg:text-4xl text-3xl text-center font-poppins font-semibold mb-16'>
                            AVM Compatible Multi-Chain Wallet
                        </h2>

                        <p className='text-xl lg:w-10/12 flex mx-auto text-center'>
                            OptimusArb will be developed on AVM (Arbitrum Virtual Machine), the software platform used to develop decentralized applications (DApps) on Arbitrum. OptimusArb will also be a multi-chain wallet combined with NFT storage, which will allow investors to track cross-chain investments all in one platform.
                        </p>

                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 my-20'>

                            <div className='border-2 border-blue-50 p-8 rounded-lg flex flex-col gap-y-6'>
                                <div className='bg-circle p-5 w-20'>
                                    <img src={wal_1} alt="wallet" className='flex mx-auto' />
                                </div>

                                <h4 className='text-xl font-semibold'>
                                    The Optimum Wallet
                                </h4>

                                <p className='text-black-50'>
                                    OptimusArb will utilize our "Optimum technology" system which is our privacy-enhancing smart contract technology to allow for anonymous transactions. Invest privately and leave no trace like a ghost!
                                </p>
                            </div>

                            <div className='border-2 border-blue-50 p-8 rounded-lg flex flex-col gap-y-6 lg:translate-y-32'>
                                <div className='bg-circle p-5 w-20'>
                                    <img src={wal_2} alt="wallet" className='flex mx-auto' />
                                </div>

                                <h4 className='text-xl font-semibold'>
                                    Mobile + Web3 Compatible
                                </h4>

                                <p className='text-black-50'>
                                    OptimusArb will be both Web3 + Mobile compatible. Our mission with OptimusArb is for the wallet to be a one stop shop for all your cross chain investment needs.
                                </p>
                            </div>

                            <div className='border-2 border-blue-50 p-8 rounded-lg flex flex-col gap-y-6'>
                                <div className='bg-circle p-5 w-20'>
                                    <img src={wal_3} alt="wallet" className='flex mx-auto' />
                                </div>

                                <h4 className='text-xl font-semibold'>
                                    Optimum TECHNOLOGY
                                </h4>

                                <p className='text-black-50'>
                                    Optimum Technology is Based on zk-SNARK
                                    OptimusArb Optimum Technology will utilize zk-SNARK technology which stands for “Zero-Knowledge Succinct Non-Interactive Argument of Knowledge.”
                                </p>
                            </div>

                            <div className='border-2 border-blue-50 p-8 rounded-lg flex flex-col gap-y-6 lg:translate-y-32'>
                                <div className='bg-circle p-5 w-20'>
                                    <img src={wal_4} alt="wallet" className='flex mx-auto' />
                                </div>

                                <h4 className='text-xl font-semibold'>
                                    Zk-SNARK is a zero-knowledge proof encryption protocol.
                                </h4>

                                <p className='text-black-50'>
                                    The encryption protocol utilizes a secret key generation system.
                                    Only the user gets the secret to a given deposit, which allows the user to withdraw the correlating funds from OptimusArb under a new address.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

                {/* <div className='absolute right-0 side -mt-12 -z-10 lg:block hidden'>
                    <img src={side} alt="" className='' />
                </div> */}

                <hr className='mt-12 w-9/12 flex mx-auto line'></hr>

                {/* zk-snark */}

                <div id='utility' className="lg:px-20 lg:py-16 py-5 px-5">
                    <div className='container mx-auto'>

                        <div className='flex flex-col gap-8 items-center justify-center'>

                            <h4 className='font-semibold flex items-center mx-auto gap-12 text-center uppercase'>
                                <span>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="5" cy="5" r="5" fill="#00C4F4" />
                                    </svg>
                                </span>
                                Zk-SNARK
                                <span>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="5" cy="5" r="5" fill="#00C4F4" />
                                    </svg>
                                </span>
                            </h4>

                            <div className='bg-white-100 rounded-xl p-5 text-blue-100 text-center w-9/12'>
                                <h2 className='lg:text-4xl text-3xl text-center font-poppins font-semibold'>
                                    Zk-SNARK
                                </h2>

                                <p className='text-lg pt-3 uppercase'>
                                    Zk-SNARK is a zero-knowledge proof encryption protocol.<br></br>
                                    The encryption protocol utilizes a secret key generation system.
                                </p>
                            </div>
                        </div>

                        <p className='lg:w-10/12 flex mx-auto text-center lg:mt-12 mt-5 font-poppins'>
                            Only the user gets the secret to a given deposit, which allows the user to withdraw the correlating funds from OptimusArb under a new address.
                            This technology was created by the Zcash cryptocurrency. They developed it to be a more anonymous cryptocurrency than Bitcoin.
                            However, the above technology has never been integrated into a multi-chain wallet system. We are going to utilize privacy enhancing smart contract layers and integrate the zk-SNARK encryption protocol into the OptimusArb multi-chain system.
                        </p>

                    </div>
                </div>

                <div className='absolute left-0 lg:block hidden'>
                    <img src={left_1} alt="" className='' />
                </div>

                {/* A special feature */}

                <div id='contract' className="lg:px-20 lg:py-12 py-5 px-5">
                    <div className='container mx-auto'>

                        <div className="lg:flex block justify-center items-center gap-x-12">

                            <div className='lg:w-1/3 w-full flex flex-col gap-6'>
                                <h4 className='font-semibold text-xl uppercase tracking-widest text-blue-50'>
                                    A special feature
                                </h4>
                                <h2 className='lg:text-4xl text-3xl font-bold'>
                                    ON/OFF
                                </h2>

                                <div>
                                    <p className='text-black-50'>
                                        The Optimum WALLET is a feature that will be able to be turned ON/OFF giving you the choice to invest anonymously or not. There may be some transactions you want to keep private, and others you don’t.
                                        As cryptocurrency gains widespread adoption, our privacy will become more important to us. So why not have that option to invest anonymously available.
                                    </p>
                                </div>

                                <div>
                                    <img src={on} alt="on" className='-ml-5' />
                                </div>

                                <div className='absolute right-0 mt-8 lg:block hidden'>
                                    <img src={right} alt="" className='' />
                                </div>

                            </div>


                            <div className='lg:w-1/3 w-full'>

                                <img src={mobile} alt="mobile" className='' />

                            </div>



                        </div>
                    </div>

                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default Home