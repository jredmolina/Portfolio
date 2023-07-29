import { useState, useRef, useEffect } from "react";
import "./index.css";
import "./App.css";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import styled from "styled-components";
import Navbar from "./components/NavBar";
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
  background-size: cover;
  background-position: center center;
  z-index: -1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

function App() {
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Container>
      <Navbar
        heroRef={heroRef}
        whoRef={whoRef}
        worksRef={worksRef}
        contactRef={contactRef}
      ></Navbar>
      <Hero ref={heroRef} nextRef={whoRef} />
      <Who ref={whoRef} />
      <Works ref={worksRef} />
      <Contact ref={contactRef} />
    </Container>
  );
}

export default App;
