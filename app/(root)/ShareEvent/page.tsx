'use client'
import SubMenus, { Silder_icon } from '@/components/SubMenus/SubMenus'
import { Ellis_3, Publish_img } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaFacebookF, FaLinkedin, FaRegUser, FaTwitter } from 'react-icons/fa'
import { FaGear, FaRegMessage } from 'react-icons/fa6'
import { IoCopyOutline, IoSpeedometerOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import { MdExitToApp } from "react-icons/md";

import "./index.css"

const ShareEvent = () => {
  return (
    <div className='main_container'>
            <div className="dashboard_main">
                <div className="dashboard_section">
                    <div className="sidebar ">
                        <div className="logo-details">
                        </div>
                        <ul className="nav-links">
                            <Silder_icon />
                            <li>
                                <a href="./newevent.html">
                                    <IoSpeedometerOutline className=" menu_dash_i" />

                                    <span className="link_name">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <a href="./newevent.html">
                                        <CiCirclePlus className="yellow_m menu_dash_i" />

                                        <span className="link_name yellow_m">CREATE AN EVENT</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <SubMenus />
                            </li>
                            <li>
                                <a href="./venues.html">
                                    <SlLocationPin className=" menu_dash_i" />
                                    <span className="link_name">VENUES</span>
                                </a>
                            </li>
                            <li>
                                <a href="./reports.html">
                                    <RiMoneyDollarCircleLine className=" menu_dash_i" />
                                    <span className="link_name">REPORTS</span>
                                </a>
                            </li>
                            <li>
                                <a href="./settingdash.html">
                                    <FaGear className=" menu_dash_i" />
                                    <span className="link_name">SETTINGS</span>
                                </a>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <a href="#">
                                        <FaRegMessage className=" menu_dash_i" />
                                        <span className="link_name">SMS CAMPAIGNS</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <a href="./myaccount.html">
                                        <FaRegUser className=" menu_dash_i" />
                                        <span className="link_name">MY ACCOUNT</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <section className="home-section">
                        <div className="home-content">




                            <div className="tabs_container">
                                <div className="w3-bar w3-black tabs_section">
                                    <Link className="   w3-red tab_btn  team-member" href="/NewEvent">1. Enter Event Details</Link>
                                    <Link className="   tab_btn  team-member"
                                        href='/DefineTicket'>2. Define Ticket Prices
                                    </Link>
                                    <Link className="   tab_btn  team-member team-member-small"
                                        href="/PublishEvent">3. Publish Event

                                    </Link>
                                    <Link className="   tab_btn  team-member team-member-small"
                                        href="/ShareEvent">4. share Event
                                        <Image src={Ellis_3} alt=''className="team-member-info one_active"  />
                                    </Link>
                                </div>
                                <div id="share" className="w3-container w3-border city" >
                                <div className="share_event">
                                    <p className="share_event_title">Your event has been published successfully</p>
                                    <div className="share_portion">


                                        <div className="exit_event">
                                            <p>You can view your event here</p>
                                            {/* <img src="../imgs/enter 1.png" alt=""/> */}
                                            <MdExitToApp  className="share_link_i"/>

                                        </div>
                                        <h3>Share Options</h3>
                                        <div className="share_link">
                                            <p>Shareable Link:</p>
                                            <input type="text" disabled/>
                                            {/* <img src="../imgs/copy 1.png" alt=""/>/ */}
                                            <IoCopyOutline  className="share_link_i"/>

                                        </div>
                                        <div className="directly">
                                            <p>Share Directly:</p>
                                            <div className="share_icon">
                                                <FaFacebookF  className="share_icon_i"/>
                                                <FaLinkedin className="share_icon_i"/>
                                                <FaTwitter className="share_icon_i"/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="share_btns">
                                    <a className="w3-bar-item w3-button tablink w3-red tab_btn new_envet_btn" href="../newevent.html">Create a New Event</a>
                                    <a href="../event.html" className="publish_btn">Done</a>

                                </div>
                            </div>





                            </div>


                        </div>
                    </section>
                </div>
            </div>
        </div>
  )
}

export default ShareEvent