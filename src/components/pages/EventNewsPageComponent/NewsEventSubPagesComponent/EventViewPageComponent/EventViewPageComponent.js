import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';
import { useHttpClient } from "../../../../../hooks/http-hook"

import "./EventViewPageComponent.css"
import Editor from './Editor/Editor'

import moment from 'moment';
import { Carousel } from 'react-responsive-carousel';



function s3_map(str) {
    str = str.replace('cebc2', 'cebc3');
    str = str.replace('cebc.s3.eu-central', 'cebc3.s3.eu-central');
    return str
}

function EventViewPageComponent(props) {



    function generate_downloads_views(downloads) {

        const members_views = downloads.map((file, index) => {
            return (

                <a className="presentation_link" target="_blank" href={file.file && file.file.url} rel="noreferrer">
                    <div className='downloads_container'       >
                        <i class="fas fa-external-link-alt mr-2 ml-1"></i>
                        {` ${file.title}`}

                    </div>

                </a>
            )

        })
        return members_views

    }

    // console.log(props.match.params.Event_id)

    const Event_slug = props.match.params.Event_slug;

    const { isLoading: EventIsLoading, error: EventError, sendRequest: sendEventRequest, clearError } = useHttpClient();
    const [LoadedEvent, setLoadedEvent] = useState(null);
    const fetchEvent = useCallback(
        async () => {

            try {
                const responseData = await sendEventRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/events?slug=${Event_slug}`
                );



                const event_post = responseData[0].Event_post;

                const modified_event_post = event_post.replace('/uploads', `${process.env.REACT_APP_BACKEND_URL}/uploads`);
                let modified_event = { ...responseData[0], event_post: modified_event_post }

                setLoadedEvent(modified_event);
                console.log({ modified_event })


            } catch (err) {
                console.log({ err })
            }


        },
        [sendEventRequest, Event_slug],
    );

    useEffect(() => {
        fetchEvent()
    }, [Event_slug])


    function generate_carousel_images(gallery) {
        let images = gallery.map((image, index) =>
        (
            <div>
                <img style={{ height: "300px", width: "auto" }} src={s3_map(image.url)} alt="wice" className="yours-custom-class" />
                <p className="legend">Legend 2</p>
            </div>
        )
        )
        return images;
    }


    return (

        <div id="event_background">
            <div id="event_box">



                {!!LoadedEvent ?
                    <>
                        <div>
                            <div id="event_header" >
                                <div id="header_img" style={{ backgroundColor: "", padding: "0px", height: "210px", width: "300px", maxWidth: '100%' }}>
                                    {LoadedEvent.Event_thumbnail_image ?
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", overflow: "hidden" }}>
                                            <img src={s3_map(`${LoadedEvent.Event_thumbnail_image.url}`)}
                                                style={{ width: "300px", height: "auto", }} alt="" />
                                        </div>
                                        :
                                        <img src={s3_map(`/assets/images/logo_black.png`)}
                                            style={{ width: "300px", height: "auto", position: "relative", top: "50px" }} alt="" />
                                    }
                                </div>

                                <div id="header_text"
                                    style={{ backgroundColor: "", flexGrow: "1", marginLeft: "20px", display: "flex", flexDirection: "column", minHeight: "210", justifyContent: "center" }}>
                                    <div id="event_box_title" style={{ textAlign: "start", fontSize: '20px' }}>
                                        <h1> {LoadedEvent.Title}</h1>
                                    </div>

                                </div>


                            </div>
                            <div id="event_header_2">

                                <div id="event_box_date" style={{ textAlign: "center", fontSize: '20px', color: "#56c7ec" }}>
                                    <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                    <span>{moment(LoadedEvent.Event_date).format('DD-MMMM-YYYY')}</span>

                                </div>

                            </div>
                            <div id="event_body">

                                {LoadedEvent.Event_gallery && LoadedEvent.Event_gallery.length > 0 &&
                                    <div className="carousel_wrapper">
                                        <Carousel autoPlay infiniteLoop >

                                            {generate_carousel_images(LoadedEvent.Event_gallery)}

                                        </Carousel>
                                    </div>
                                }


                                <div style={{ maxWidth: '100%' }}>
                                    <div style={{ width: '100%', margin: "auto" }} >
                                        <Editor value={LoadedEvent.event_post} onChange={(input) => { }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {LoadedEvent.downloads.length > 0 &&
                            <>
                                <div className="downloads_header " >
                                    <span className="downloads_header_inner"     >
                                        Downloads
                                    </span>
                                </div>

                                <div className=" justify-content-center" style={{ maxWidth: '900px', margin: 'auto' }}>
                                    <div style={{ padding: '0', margin: '20px auto 40px auto', maxWidth: '85vw', width: '100%', display: "flex", flexWrap: "wrap", justifyContent: "start", flexDirection: 'column' }}>
                                        {generate_downloads_views(LoadedEvent.downloads)}
                                    </div>
                                </div>
                            </>
                        }

                    </>
                    :
                    <div id="loading_spinner" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "150px" }} >
                        <div style={{ marginTop: "100px" }}>
                            <ReactLoading type={"spin"} color={"#00D2F9"} width={"20vw"} />
                        </div>
                    </div>

                }





            </div>
        </div>
    )
}

export default EventViewPageComponent
