import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeBanner from "./pages/HomeBanner";
import OurCourses from "./pages/OurCourses";
import OurServices from "./pages/OurServices";
import OurInstructors from "./pages/OurInstructors";
import LevelUp from "./pages/LevelUp";
import Reviews from "./pages/Reviews";
import OurStory from "./pages/OurStory";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeBanner />
              <OurCourses />
              <OurServices />
              <OurInstructors />
              <Reviews />
              <OurStory />
              <LevelUp />
            </>
          }
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
