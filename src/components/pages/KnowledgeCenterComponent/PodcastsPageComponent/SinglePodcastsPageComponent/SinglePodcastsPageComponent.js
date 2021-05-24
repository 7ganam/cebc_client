import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';

import renderHTML from 'react-render-html';
import "./SinglePodcastsPageComponent.css"
import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';
import { Link } from 'react-router-dom';

import google_image from "./images/Google.png"
import apple_image from "./images/apple.png"


function SinglePodcastsPageComponent(props) {

    // console.log(props.match.params.Event_id)
    // console.log(`singeprops.podcasts`, props.podcasts)
    const podcast_id = props.match.params.podcast_id;

    const the_podcast = props.podcasts.filter((podcast) => podcast.id == podcast_id)[0] //leave this as two ==

    console.log(`the_podcast`, the_podcast)

    



    if (props.podcasts.length === 0) {
        return (
            <Container>
                <Row >
                    <div style={{ height: "100vh", margin: 'auto', marginTop: '200px' }}>
                        <ReactLoading type={"spin"} color={"#00D2F9"} width={"20vw"} />
                    </div>
                </Row>
            </Container>
        )
    }
    else {
    return (

        <>


         <div style={{ minHeight: "500px" }}>
             
            <div className="sound_cloud_plugin" dangerouslySetInnerHTML={{ __html: the_podcast.soundcloud_embed_string }}  />



            <div style={{ width: '70%', margin: 'auto', marginTop: '50px', display: 'flex' , justifyContent:'center' , flexWrap:'wrap' }}>

{ !! the_podcast.google_podcasts_link &&
                <a href={the_podcast.google_podcasts_link}>
                    <div className='pod_button' style={{
                        height: '60px', minWidth: '250px', width: '300px' , maxWidth:'90%', border: "1px solid #8080803d",
                        borderRadius: "20px",
                        boxShadow: "0px 3px 0 0 #0000002b",
                        display: 'flex',
                        justifyContent: 'left',
                        alignContent: 'center',
                        alignItems: 'center',
                        margin:'20px'

                    }}>
                        <img src={google_image} alt="google" style={{ height: '50px', width: 'auto', margin: '10px' }} />

                        <div className="pod_card_text">
                            google podcasts
                        </div>
                    </div>
                </a>
}


{!! the_podcast.apple_podcasts_link &&
                <a href={the_podcast.apple_podcasts_link}>
                    
                        <div  className="pod_button" style={{}}>
                            <img src={apple_image} alt="apple" style={{ height: '50px', width: 'auto', margin: '10px' }} />
                            <div className="pod_card_text">
                                apple podcasts
                        
                        </div>
                    </div>
                </a>

}

            </div>


            <div style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div style={{ margin: "50px", width: "70%",minWidth:'300px', margin: "auto" , height:"1000px", overflow:'scroll' }}><Editor value={the_podcast.subtitles} onChange={(input) => { }} /></div>
            </div>


        </div >
  
 
        </>
    )
}
}

export default SinglePodcastsPageComponent
