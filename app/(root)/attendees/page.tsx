'use client'
import MainMenusEx from '@/components/MainMenusEx/MainMenusEx'
import { Silder_icon } from '@/components/SubMenus/SubMenus'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaRegCalendarAlt, FaChevronDown, FaCheck, FaSearch } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa6'
import { IoSpeedometerOutline } from 'react-icons/io5'

const Attendees = () => {
    const [isMainOpen, setIsMainOpen] = useState(false);
  const [isEventOpen, setIsEventOpen] = useState(false);

  const toggleMain = () => {
      setIsMainOpen(!isMainOpen);
  };

  const toggleEvent = () => {
      setIsEventOpen(!isEventOpen);
  };
    return (
        <div className='main_container'>
            <div className="dashboard_main">
                <div className="dashboard_section">
                    <div className="sidebar ">
                        <ul className="nav-links">
                            <Silder_icon />
                            <li>
                                <Link href="/Dashboard">

                                    <IoSpeedometerOutline className=" menu_dash_i" />
                                    <span className="link_name ">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <Link href="/NewEvent">
                                        <CiCirclePlus className=" menu_dash_i" />

                                        <span className="link_name ">CREATE AN EVENT</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <div className="inner_nav_links " id="">
                                        <div className="flex_option_row accordion">

                                            <FaRegCalendarAlt className="menu_dash_i yellow_m" />
                                            <div className="Event_Title  ">
                                                <div className=" inner_flex">
                                                    <Link href="/Event" className='yellow_m'>

                                                        EVENTS
                                                    </Link>
                                                </div>
                                                {/* <i className='bx bxs-chevron-down' id="myElement" onClick={toggleAccordion}></i> */}
                                                <FaChevronDown className="icon_sub_menu" onClick={toggleMain} />

                                            </div>
                                        </div>
                                        {isMainOpen && (
                                            <ul className="upper_nav_i panel inner_nav_items2">
                                                <Link href="/archived" className="inner_link_i ">Archived</Link>
                                                <Link href="/Draft" className='inner_link_i'>Draft</Link>
                                                <div className='Exinner_flex '>

                                                    <Link href="/eventdash" className='inner_link_i'>
                                                        <li className=" inner_flex Exinner_flex yellow_m">
                                                            Event Title
                                                        </li>

                                                    </Link>
                                                    <FaChevronDown className="low_event" onClick={toggleEvent} />
                                                </div>
                                                {isEventOpen && (

                                                    <ul className="inner_nav_items panel2">
                                                        <li className="inner_nav_item "><a href="/sellTickets" >Sell Tickets</a></li>
                                                        <li className="inner_nav_item"><a href="/managetwo">Hold Seats</a></li>
                                                        <li className="inner_nav_item"><a href="/scanTickets" >Scan Tickets</a></li>
                                                        <li className="inner_nav_item"><a href="/attendees" className='yellow_m'>Attendees</a></li>
                                                        <li className="inner_nav_item"><a href="/ManageOrder">Manage Orders</a></li>
                                                        <li className="inner_nav_item"><a href="/eventdetails" >Event Details</a></li>
                                                        <li className="inner_nav_item"><a href="/ticketprices">Ticket Prices</a></li>
                                                        <li className="inner_nav_item"><a href="/settingChart">Seating Chart</a></li>
                                                    </ul>
                                                )}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <MainMenusEx />

                        </ul>
                    </div>
                    <section className="home-section">
                        <div className="home-content">
                        <div className="manage_order_area">
                        <Link className="arc_btn" href="/archived">
                                    {/* <i className='bx bx-chevron-left'></i> */}
                                    <FaChevronLeft style={{ color: "#FFE100", marginRight: "10px" }} />

                                    <p>Back</p>
                                </Link>

                            <div className="manage_order_section">
                                <h1>Archived: Event Title: Attendees</h1>
                                <form action="" className="manage_order_form">

                                    <div className="manage_filter_row">
                                        <div className="manage_filter_in">
                                            <input type="search" placeholder="Search by name, order #, or amount..."/>
                                            <FaSearch style={{color: '#000'}} />
                                        </div>
                                    </div>
                                    <button className="manage_filter_btn">Export CSV</button>

                                </form>

                            </div>
                            <div className="manage_filter_table">
                                <table className="manage_filter_tables">
                                    <thead>
                                        <tr>
                                            <th>Mark Admitted</th>
                                            <th>Name</th>
                                            <th>Section</th>
                                            <th>Seat ID</th>
                                            <th>Table ID</th>
                                            <th>Order #</th>
                                            <th>Order Note</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><FaCheck style={{color: "green"}} /></td>
                                            <td>Johnny Cash</td>
                                            <td>A</td>
                                            <td>39</td>
                                            <td>6</td>
                                            <td>A-00011123323</td>
                                            <td></td>


                                        </tr>
                                        <tr>
                                            <td><FaCheck style={{color: "green"}} /></td>
                                            <td>Johnny Cash</td>
                                            <td>A</td>
                                            <td>39</td>
                                            <td>6</td>
                                            <td>A-00011123323</td>
                                            <td></td>


                                        </tr>
                                        <tr>
                                            <td><FaCheck style={{color: "green"}} /></td>
                                            <td>Johnny Cash</td>
                                            <td>A</td>
                                            <td>39</td>
                                            <td>6</td>
                                            <td>A-00011123323</td>
                                            <td></td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>



                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Attendees