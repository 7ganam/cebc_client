import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import "./PodcastsComponent.css"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
import ReactLoading from 'react-loading';
import Slider from "react-slick";
const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]

};

function PodcastsComponent(props) {

    // console.log(`props.podcasts`, props.podcasts)
    function generate_podcasts_cards() {
        const podcasts = props.podcasts.map((podcast, index) => {
            return (
                <div md={4} style={{ maxWidth: "200px", marginTop: "20px", marginRight: "20px" }} >
                    <Card style={{ maxWidth: "280px", boxShadow: "rgb(0 0 0 / 10%) 0px 0px 9px 5px", padding: "8px", margin: 'auto' }} >
                        <CardImg top width="100%" src={!!podcast.image && podcast.image.url} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" style={{ marginTop: '5px' }}>{podcast.season_episode}:</CardTitle>
                            <CardSubtitle className='card_title_'>
                                {podcast.title}
                            </CardSubtitle>
                            <Link className="nav_link" to={`/KNOWLEDGECENTER/PODCASTS/${podcast.id}`}>
                                <button type="button" class="mt-2 btn btn-warning">
                                    Visit podcast
                            <i class="ml-2 fas fa-headphones"></i>
                                </button>
                            </Link>
                        </CardBody>
                    </Card>
                </div>



            )

        })
        return podcasts;
    }



    return (
        <div style={{ marginTop: '', marginBottom: '' }}>
            <div id="title_header" style={{ marginTop: "50px ", marginBottom: "0px " }} >
                <div class="section_header" style={{ marginTop: "50px" }}>
                    <span class="section_header_inner"> podcast </span>
                    <div className="section_header_under"></div>
                </div>


            </div>
            { props.podcasts && props.podcasts.length > 0 ?
                <Container style={{ marginTop: "50px ", marginBottom: "150px " }} >
                    {/* <Row style={{ display: "flex", justifyContent: "center" }} > */}

                    {/* {generate_podcasts_cards()} */}
                    <div id="Carousel_section" style={{ width: "90%", margin: 'auto' }}>
                        <div style={{ width: "100%", maxWidth: "1200px", margin: 'auto' }}>
                            {/* <h2> CEBC members</h2> */}
                            <div>
                                <Slider className="main_slider" {...settings}>
                                    {generate_podcasts_cards()}
                                </Slider>
                            </div>
                        </div>
                    </div>
                    {/* </Row> */}
                </Container>
                :
                <div style={{ width: '80%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
                    <ReactLoading type={"spin"} color={"#00D2F9"} width={"10vw"} />
                </div>
            }
        </div>
    )
}

export default PodcastsComponent
