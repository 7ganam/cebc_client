import React from 'react'
import "./MemebersCarouselComponent.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import rcbrand_overload from "./responsive-brand-logo-carousel/js/jquery.rcbrand"
import $ from "jquery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from 'reactstrap';



rcbrand_overload($)

function MemebersCarouselComponent(props) {

    const settings = {
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]

    };



    function generate_carousel_elements_view() {

        const filtersed_elements_view = props.members


        const elements_view = filtersed_elements_view.map((member, index) => {

            return (
                <>


                    <Link key={member.id} className="" to={`/MEMBERSHIP/MEMBERS/${member.id}`}>
                        <div class="mem_carousel_elem">
                            <div class="mem_carousel_sub_elem">
                                <img class="mem_carousel_img" src={member.entity_image && member.entity_image.url} alt="member" />
                            </div>
                        </div>
                    </Link>
                </>
            )



        })

        // console.log(`elements_view`, elements_view)
        return (elements_view)
    }



    return (
        <div id="Carousel_section">
            <Row className=" justify-content-center">
                <Col style={{ paddingTop: "0px" }}>
                    <div class="section_header">
                        <span class="section_header_inner">
                            Members & partners
                            </span>
                        <div className="section_header_under"></div>
                    </div>
                </Col>
            </Row>
            <div style={{ width: "80%", maxWidth: "1200px", margin: 'auto' }}>
                {/* <h2> CEBC members</h2> */}
                <div>
                    <Slider className="main_slider" {...settings}>
                        {generate_carousel_elements_view()}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MemebersCarouselComponent
