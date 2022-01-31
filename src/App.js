import React from "react";
import GlobalStyle from "./globalStyle";
import {
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
