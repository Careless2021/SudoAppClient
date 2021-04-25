import { lazy } from "react";


import Footer from "../../components/Footer";
import Header from "../../components/Header";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

// import Plans from "../../components/plans"
// import Accounts from "../../components/Accounts"

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const Plans = lazy(() => import("../../components/plans"));
const Accounts = lazy(() => import("../../components/Accounts"));

const Home = () => {
  return (
    <Container>
    <Header />
      <ScrollToTop />
      <ContentBlock 
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <Plans />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />

      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Accounts id="signin" />
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
      <Footer />
    </Container>
  );
};

export default Home;

// {
//   "start": "node --max_old_space_size=2560 node_modules/.bin/react-scripts start",
//   "build": "node --max_old_space_size=2560 node_modules/.bin/react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// }
