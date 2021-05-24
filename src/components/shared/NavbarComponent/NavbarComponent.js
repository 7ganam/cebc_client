import React, { useState, useEffect } from 'react';
import { NavbarBrand, Collapse, Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { LoginContext } from "../../../contexts/LoginContext"
import { useContext } from "react";


import { Link } from "react-router-dom";
import "./NavbarComponent.css"


import logo_white from './logo_white.png'
import logo_black from './logo_black.png'
import ExtendedNavItemComponent, { ExtendedNavItemComponent2 } from "./ExtendedNavItemComponent/ExtendedNavItemComponent"
import { DoubleExtendedNavItemComponent2 } from './DoubleExtendedNavItemComponent/DoubleExtendedNavItemComponent'

import "./NavbarComponent.css"
import "hover.css";
const $ = require("jquery");


const NavbarComponent = (props) => {

    const { login, IsLoggedIn, Token, ToggleLoginModal, logout, IsSignUpModalShown, ToggleSignUpModal, User } = useContext(LoginContext);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let [Scrolled, setScrolled] = useState(false)

    useEffect(
        () => { //add scrolled class to elements that should behave diffrently when window is scrolled
            var $navitem = $(".nav-item"); // add the scrolled class with jquery to all the nave links when scrolled
            var $navlink = $(".nav_link"); // add the scrolled class with jquery to all the nave links when scrolled
            var $nav_link_dropper = $(".nav_link_dropper"); // add the scrolled class with jquery to all the nave links when scrolled
            $navlink.toggleClass('scrolled', $(document).scrollTop() > $navlink.height());
            $nav_link_dropper.toggleClass('scrolled', $(document).scrollTop() > $navlink.height());
            $navitem.toggleClass('not_scrolled', $(document).scrollTop() < $navlink.height());

            $(function () {
                $(document).scroll(function () {
                    var $nav = $("#my_nav"); // change the Scrolled state when we scroll more than the navbar height
                    if ($(this).scrollTop() > $nav.height()) {
                        if (!Scrolled) { setScrolled(true) }
                    }
                    else {
                        if (Scrolled) { setScrolled(false) }
                    }
                    $navlink.toggleClass('scrolled', $(this).scrollTop() > $navlink.height());
                    $nav_link_dropper.toggleClass('scrolled', $(this).scrollTop() > $navlink.height());
                    $navitem.toggleClass('not_scrolled', $(this).scrollTop() < $navlink.height());

                });
            });

            // Close Navbar when clicked outside
            $(window).on('click', function (event) {
                // element over which click was made

                var clickOver = $(event.target)
                // console.log(`clickOver`, $('.navbar .navbar-toggler').attr('aria-expanded'))
                if ($('.navbar-collapse').hasClass("show") && clickOver.closest('.navbar').length === 0) {
                    // Click on navbar toggler button
                    $('.navbar-toggler').click();
                }
            });
        })



    return (
        <React.Fragment>
            <div className="d-flex justify-content-end ml-0 mr-0" style={{ height: "26px" }}>
                <div id="top_bar" className="header_font" >
                    <Link id='members_only_link' className="pulsating-circle" to="/MEMBERSHIP/MEMBERSONLY">
                        <div style={{ paddingRight: "16px", color: "black" }} >
                            Members only content
                        </div>
                    </Link>


                    {!IsLoggedIn ?
                        <>
                            <div onClick={ToggleLoginModal} style={{ paddingRight: "16px", cursor: 'pointer' }}>
                                Login
                            </div>
                            <div onClick={ToggleSignUpModal} style={{ paddingRight: "6px", cursor: 'pointer' }}>
                                <>  Signup </>
                            </div>
                        </>
                        :
                        <div onClick={logout} style={{ paddingRight: "6px", cursor: 'pointer' }}>
                            < >  Logout </>
                        </div>

                    }
                </div>
            </div>
            <Container fluid id="nav_bar_container" >
                <div>
                    {/* // adding classes to navbar based on scrolled and path  */}
                    <Navbar
                        light
                        expand={`md`}
                        fixed="top"
                        style={{ alignItems: "stretch" }}
                        className={`
                         light  py-lg-0
                        ${Scrolled ? "scrolled" : ""} 
                        ${!Scrolled && !(props.location.pathname === "/") ? "dark_bg" : ""}
                        `}
                        id="my_nav"
                    >

                        <NavbarBrand id="nav_brand" href="/" className="p-0">
                            <img id="nav_img" style={{ height: "100%", width: "auto" }} src={!Scrolled && $(window).width() > 768 ? logo_white : logo_black} alt="oval" />
                        </NavbarBrand>

                        <NavbarToggler onClick={toggle} className="ml-auto" />

                        <Collapse isOpen={isOpen} navbar className="justify-content-end" >
                            <Nav className="ml-auto d-flex nav_list" navbar style={{}}>



                                <NavItem className={`${props.location.pathname !== "/" ? '' : 'nav-link-selected'} `}>
                                    <Link className="nav_link" to="/">
                                        Home
                                    </Link>
                                </NavItem>


                                <DoubleExtendedNavItemComponent2
                                    location={props.location} main_nav={{ base_path: "/ABOUTUS", path: "/ABOUTUS/WHATWEDO", text: "ABOUT" }}
                                    sub_navs={[
                                        {
                                            path: "/ABOUTUS/WHATWEDO", text: "about",
                                        },
                                        {
                                            path: "/ABOUTUS/STAFF/BOARD", text: "people",
                                            sub_subs: [
                                                { path: "/ABOUTUS/STAFF/BOARD", text: "Board of Directors" },
                                                { path: "/ABOUTUS/STAFF/ADVISORY", text: "Adivsory Board" },
                                                { path: "/ABOUTUS/STAFF/TEAM", text: "Team" },
                                            ]
                                        },
                                        {
                                            path: "/ABOUTUS/working_groups", text: "working groups",
                                            sub_subs: [
                                                { path: "/ABOUTUS/working_groups/7", text: "Future Mobility Club" },
                                                { path: "/ABOUTUS/working_groups/12", text: "Climate Finance" },
                                                { path: "/ABOUTUS/working_groups/13", text: "Energy Efficiency " },
                                                { path: "/ABOUTUS/working_groups/10", text: "Hydrogen and Energy Storage" },
                                                { path: "/ABOUTUS/working_groups/11", text: "Women in Clean Energy" },
                                            ]
                                        }, {
                                            path: "/ABOUTUS/programms", text: "programmes",
                                            sub_subs: [
                                                { path: "/ABOUTUS/working_groups/1", text: "CEBC Schools" },
                                            ]
                                        },
                                        { path: "/ABOUTUS/JOBS", text: "careers" },
                                    ]}
                                />

                                <ExtendedNavItemComponent2
                                    location={props.location} main_nav={{ base_path: "/MEMBERSHIP", path: "/MEMBERSHIP/BENIFITS", text: "MEMBERSHIP" }}
                                    sub_navs={[
                                        { path: "/MEMBERSHIP/BENIFITS", text: "benefits & levels" },
                                        // { path: "/MEMBERSHIP/LEVELS", text: "levels" },
                                        { path: "/MEMBERSHIP/MEMBERS", text: "members" },
                                        { path: "/MEMBERSHIP/PARTNERS", text: "partners" },
                                        { path: "/MEMBERSHIP/JOIN", text: "join the cebc" },
                                        { path: "/MEMBERSHIP/MEMBERSONLY", text: "Members only content" },
                                    ]}
                                />

                                <ExtendedNavItemComponent2
                                    location={props.location} main_nav={{ base_path: "/ACTIVITIES", path: "/ACTIVITIES", text: "Activities" }}
                                    sub_navs={[
                                        { path: "/ACTIVITIES/EVENTS/All", text: "EVENTS" },
                                        { path: "/ACTIVITIES/ACADEMY", text: "ACADEMY" },
                                        { path: "/ACTIVITIES/CONSULTANCY", text: "CONSULTANCY" },
                                        { path: "/ACTIVITIES/PODCASTS", text: "PODCAST" },

                                    ]}
                                />

                                <ExtendedNavItemComponent2
                                    location={props.location} main_nav={{ base_path: "/EVENTS_NEWS", path: "/EVENTS_NEWS", text: "NEWS & MEDIA" }}
                                    sub_navs={[
                                        { path: "/EVENTS_NEWS/News/", text: "NEWS" },
                                        { path: "/EVENTS_NEWS/MEDIA/", text: "MEDIA" },


                                    ]}
                                />






                                <ExtendedNavItemComponent
                                    location={props.location} main_nav={{ path: "/KNOWLEDGECENTER", text: "KNOWLEDGE CENTER" }}
                                    sub_navs={[
                                        { path: "/REPORTS", text: "publications" },
                                        { path: "/WEBINARS", text: "webinars" },
                                        // { path: "/PODCASTS", text: "podcast" },
                                        { path: "/PRESENTATIONS", text: "presentations" },
                                        { path: "/PROJECTS", text: "projects" },
                                        { path: "/CASE_STUDIES", text: "case studies" },
                                        // { path: "/BLOGS", text: "blogs" },
                                        // { path: "/PAPERS", text: "NEWSLETTER" },
                                        { path: "/NEWSLETTER", text: "NEWSLETTER" },
                                        // { path: "/LINKS", text: "useful links" }
                                    ]}
                                />


                                {IsLoggedIn &&
                                    <>

                                        <NavItem >
                                            <div style={{
                                                width: "70px", height: "100%", borderRadius: "100%",
                                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                                            }} >
                                                <img style={{ width: "50px", height: "50px", borderRadius: "100%", }}
                                                    src={User.image.url || '/user.png'} alt="profile"
                                                />
                                            </div>
                                        </NavItem>



                                    </>
                                }
                            </Nav>

                        </Collapse>

                    </Navbar>




                </div>

            </Container>


        </React.Fragment >

    );
}

export default withRouter(NavbarComponent);