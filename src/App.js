import React from "react";
import GlobalStyle from "./globalStyle";
import {
  Header,
  Hero,
  WhyUs,
  BestSelling,
  Experience,
  Material,
  Testimonials,
  Footer,
} from "./layouts";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Hero />
      <WhyUs />
      <BestSelling />
      <Experience />
      <Material />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
