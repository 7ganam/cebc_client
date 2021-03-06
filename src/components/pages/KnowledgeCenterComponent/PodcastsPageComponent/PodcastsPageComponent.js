import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./PodcastsPageComponent.css";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import ReactLoading from "react-loading";
import PodcastsComponent from "./PodcastsComponent/PodcastsComponent";

function PodcastsPageComponent(props) {
  function order_podcasts(podcasts) {
    console.log(`podcasts`, podcasts);

    // collect in array of season_objects seasons_array with the form [ {season:x , episodes:[obj , obj2 , ...]} , {season:y , episods:[obj , obj2 , ...]} ]
    let seasons_array = [];
    for (let pod of podcasts) {
      //check if the season of the podcast has entry in seasons_array if not add an entry
      if (seasons_array.length == 0) {
        seasons_array.push({ season: pod.season, episodes: [pod] });
      } else {
        let season_already_exist = false;
        for (let season_object of seasons_array) {
          if (season_object.season == pod.season) {
            season_already_exist = true;
            season_object.episodes.push(pod);
          }
        }
        if (!season_already_exist) {
          seasons_array.push({ season: pod.season, episodes: [pod] });
        }
      }
    }

    // order the seasons objects in the array
    seasons_array.sort((a, b) => (a.season > b.season ? 1 : -1));

    // order the episodes in each season_object
    for (let season_object of seasons_array) {
      season_object.episodes.sort((a, b) => (a.episode > b.episode ? 1 : -1));
    }
    return seasons_array;
  }

  function generate_seasons_view() {
    let seasons_array = order_podcasts(props.podcasts);
    let seasons_array_view = seasons_array.map((season_object) => (
      <PodcastsComponent
        season={season_object.season}
        podcasts={season_object["episodes"]}
      />
    ));
    return seasons_array_view;
  }

  return (
    <div style={{ marginTop: "", marginBottom: "" }}>
      <div className="background_image_div">
        <img
          src="/assets/images/hero.png"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <Container className="sub_page_title_container">
        <Row className=" justify-content-center">
          <Col>
            <div class="sub_page_header">
              <span class="sub_page_header_inner">podcast</span>
              <div className="sub_page_header_under"></div>
            </div>
          </Col>
        </Row>
      </Container>

      {props.podcasts && props.podcasts.length > 0 ? (
        <div>{generate_seasons_view()}</div>
      ) : (
        // <Container style={{ marginTop: "100px ", marginBottom: "100px " }} >

        //     <Row style={{ display: "flex", justifyContent: "center" }} >

        //         {generate_podcasts_cards()}
        //     </Row>
        // </Container>
        <div
          style={{
            width: "80%",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <ReactLoading type={"spin"} color={"#00D2F9"} width={"10vw"} />
        </div>
      )}
    </div>
  );
}

export default PodcastsPageComponent;
