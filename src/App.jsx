import { useState, useRef } from "react";
import Slider from "react-slick";
import "./index.css";
import "./App.css";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import styled from "styled-components";
import Navbar from "./components/NavBar";
import { SideNav } from "./components/SideNav";
import { useTypeWriter, Cursor } from "react-simple-typewriter";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background: url("./img/GrainyBg.png");
  z-index: -1;
  display: flex;
  flex-direction: column;
`;

function App() {
  const targetRefs = {
    Hero: useRef(null),
    Who: useRef(null),
    Works: useRef(null),
    Contact: useRef(null),
  };

  const scrollToComponent = (component) => {
    if (targetRefs[component].current) {
      targetRefs[component].current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container>
      <SideNav scrollToComponent={scrollToComponent} />
      <div ref={targetRefs.Hero} id="Hero">
        <Hero />
      </div>
      <div ref={targetRefs.Who} id="Who">
        <Who />
      </div>
      <div ref={targetRefs.Works} id="Works">
        <Works id="Works" />
      </div>
      <div ref={targetRefs.Contact} id="Contact">
        <Contact id="Contact" />
      </div>
    </Container>
  );
}

export default App;
