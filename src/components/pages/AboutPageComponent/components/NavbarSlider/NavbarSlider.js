import React from "react";
// JSX
import HeroSlider, { Slide, MenuNav, OverlayContainer } from "hero-slider";
import Navbar from "../UI/Navbar/Navbar";
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";
import kyoto from "../12.jpg"
import tenryuJiTemple from "../Clean-Air-Forum-Photo-22.jpg";
import hakone from "../Policy-Working-Group-Photo-62.jpg";
import byodoInTemple from "../DSCF5480-1024x6832.jpg";
// Images



// const kyoto = "https://i.imgur.com/xw5Abku.jpg";
// const tenryuJiTemple = "../Clean-Air-Forum-Photo-2.jpg";
// const hakone = "../Policy-Working-Group-Photo-6.jpg";
// const byodoInTemple = "../DSCF5480-1024x683.jpg";



const app = () => {
  return (
    <HeroSlider
      slidingAnimation="top_to_bottom"
      orientation="vertical"
      initialSlide={1}
      // onBeforeChange={(previousSlide, nextSlide) =>
      //   console.log("onBeforeChange", previousSlide, nextSlide)
      // }
      // onChange={nextSlide => console.log("onChange", nextSlide)}
      // onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "black"
      }}
      settings={{
        slidingDuration: 400,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 2000,
        height: "99.5vh"
      }}
    >
      <Navbar />
      <OverlayContainer>
        <Wrapper>
          <Title>Clean Energy Business Council</Title>
          <Subtitle>for sustinable future.</Subtitle>
        </Wrapper>
      </OverlayContainer>



      <Slide
        shouldRenderMask
        navDescription="Our working groups"
        background={{
          backgroundColor: "#c7a662",
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: tenryuJiTemple

        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Our groups"
        background={{
          backgroundColor: "#745b5f",
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: hakone
        }}
      />
      <Slide
        shouldRenderMask
        navDescription="What we do"
        background={{
          backgroundColor: "#8A8A8A",
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: kyoto
        }}
      />
      <Slide
        shouldRenderMask
        navDescription="Our vision"
        background={{
          backgroundColor: "#2D7791",
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: byodoInTemple
        }}

      >
        {/* <h1>test</h1> */}
      </Slide>
      <MenuNav />
    </HeroSlider>
  );
};

export default app;
