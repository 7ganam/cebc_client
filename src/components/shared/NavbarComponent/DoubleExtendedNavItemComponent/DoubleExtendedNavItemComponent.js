import React from 'react';
import { NavItem } from 'reactstrap';
import { Link } from "react-router-dom";

import "./DoubleExtendedNavItemComponent.css"
const $ = require("jquery");

function DoubleExtendedNavItemComponent2(props) {

    const main_nav = props.main_nav;
    const sub_navs = props.sub_navs;



    const render_sub_items = () => {



        const render_sub_sub_items = (sub_item) => {



            const sub_subs = sub_item.sub_subs.map((sub_sub_item, index) => {

                return (

                    <li>
                        <Link onClick={close_nav_bar} to={sub_sub_item.path}>
                            <div className={'sub_subs_entry ' + (props.location.pathname === sub_sub_item.path ? 'sub_subs_entry_selected' : '')}>
                                <i class="fas fa-angle-double-right mr-2"></i>
                                <div>{sub_sub_item.text}</div>
                            </div>
                        </Link>
                    </li>

                )
            }
            )
            return sub_subs;
        }




        const sub_items = sub_navs.map((sub_item, index) => {



            let paths = [sub_item.path]
            if (sub_item.sub_subs) {

                for (let sub_sub of sub_item.sub_subs) {
                    paths.push(sub_sub.path)
                }
            }


            return (
                <div className={!paths.includes(props.location.pathname) ? 'sub-nav-item' : 'sub-nav-item-selected'}
                    style={{ height: "auto", display: 'flex', flexDirection: 'column', textAlign: "left", justifyContent: 'start', alignItems: "start", marginLeft: "0", }}
                >
                    <Link onClick={close_nav_bar} className={!paths.includes(props.location.pathname) ? 'sub_nav_link' : 'sub-nav-link-selected'} to={`${sub_item.path}`}
                        style={{ textAlign: "left", justifyContent: 'start', alignItems: "start", marginLeft: "0", paddingLeft: '0' }}>
                        {sub_item.text}
                    </Link>
                    <ul className='sub_subs'
                        style={{ height: "", width: "190px", backgroundColor: "", display: 'flex', flexDirection: 'column', marginLeft: "0px" }}>
                        {sub_item && sub_item.sub_subs &&
                            render_sub_sub_items(sub_item)
                        }
                    </ul>

                </div>
            )
        }
        )
        return sub_items;
    }


    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight || docElem.clientHeight || body.clientHeight;

    const sub_nav_ref = React.createRef();

    function close_nav_bar(event) {
        if (x < 768) {

            var clickOver = $(event.target)


            // console.log(`clickOver`, $('.navbar .navbar-toggler').attr('aria-expanded'))
            if ($('.navbar-collapse').hasClass("show")) {
                console.log(`clickOver`, clickOver)
                // Click on navbar toggler button
                $('.navbar-toggler').click();
            }
        }
    }
    const show_sub_nav = () => {
        if (x < 768) {
            sub_nav_ref.current.classList.toggle("drop")
        }
    }


    return (

        <NavItem NavItem className={props.location.pathname.startsWith(main_nav.base_path) ? 'nav-link-selected' : ''}
            style={{ display: 'relative' }}
        >
            <Link onClick={show_sub_nav} className="nav_link" to={main_nav.path}>
                {main_nav.text}
                <i class="fas ml-2 fa-chevron-circle-down"></i>
            </Link>
            <div
                style={{
                    alignItems: 'start',
                    transform: props.location.pathname.startsWith(main_nav.base_path) && x >= 768 ? 'scaleY(1)' : '',
                }}
                light
                expand={`md`}
                fixed="top"
                className="my-sub-nav my-sub-nav_d "
                ref={sub_nav_ref}
            >


                {!!sub_navs &&
                    render_sub_items()
                }

            </div>
            {/* <span class="nav__sub-toggle js-sub-toggle">test</span> */}
        </NavItem >
    )
}
export { DoubleExtendedNavItemComponent2 }

