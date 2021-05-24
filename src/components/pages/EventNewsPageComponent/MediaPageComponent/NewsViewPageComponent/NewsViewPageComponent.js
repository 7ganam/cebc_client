import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; import ReactLoading from 'react-loading';
import { useHttpClient } from "../../../../../hooks/http-hook"

import renderHTML from 'react-render-html';
import "./NewsViewPageComponent.css"
import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';

function NewsViewPageComponent(props) {

    // console.log(props.match.params.News_id)

    const News_id = props.match.params.News_id;

    const { isLoading: NewsIsLoading, error: NewsError, sendRequest: sendNewsRequest, clearError } = useHttpClient();
    const [LoadedNews, setLoadedNews] = useState(null);
    const fetchNews = useCallback(
        async () => {

            try {
                const responseData = await sendNewsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/news/${News_id}`
                );



                const news_post = responseData.page;
                const modified_news_post = news_post.replace('/uploads', `${process.env.REACT_APP_BACKEND_URL}/uploads`);
                let modified_news = { ...responseData, news_post: modified_news_post }

                setLoadedNews(modified_news);


            } catch (err) {
                console.log({ err })
            }


        },
        [sendNewsRequest, News_id],
    );

    useEffect(() => {
        fetchNews()
    }, [News_id])


    return (

        <div id="news_background">
            <div id="news_box">



                {!!LoadedNews ?
                    <div>
                        <div id="news_header" >



                            <div id="header_img" style={{ backgroundColor: "", padding: "0px", height: "210px", width: "300px", maxWidth: '100%' }}>
                                {LoadedNews.thumbnail_image ?
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", overflow: "hidden" }}>
                                        <img src={`${LoadedNews.thumbnail_image.url}`}
                                            style={{ width: "300px", height: "auto", }} alt="" />
                                    </div>
                                    :
                                    <img src={`/logo_black.png`}
                                        style={{ width: "300px", height: "auto", position: "relative", top: "50px" }} alt="" />
                                }
                            </div>

                            <div id="header_text"
                                style={{ backgroundColor: "", flexGrow: "1", marginLeft: "20px", display: "flex", flexDirection: "column", minHeight: "210px", justifyContent: "center" }}>
                                <div id="news_box_title" style={{ textAlign: "start", fontSize: '50px' }}>
                                    <h1> {LoadedNews.title}</h1>
                                </div>
                                <div id="news_box_date" style={{ textAlign: "start", fontSize: '30px', color: "#56c7ec" }}>
                                    <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                    <span>{moment(LoadedNews.date).format('DD-MMMM-YYYY')}</span>


                                </div>
                            </div>


                        </div>
                        <div id="news_header_2">

                        </div>
                        <div id="news_body">
                            <div style={{}}>
                                <div style={{ width: '100%', margin: "auto" }}><Editor value={LoadedNews.page} onChange={(input) => { }} /></div>
                            </div>
                        </div>
                    </div>

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

export default NewsViewPageComponent
