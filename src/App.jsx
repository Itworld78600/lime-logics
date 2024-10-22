import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeBanner from "./pages/HomeBanner";
import OurCourses from "./pages/OurCourses";
import OurServices from "./pages/OurServices";
import OurInstructors from "./pages/OurInstructors";
import LevelUp from "./pages/LevelUp";

function App() {
  return (
    <>
      <Header />
      <HomeBanner />
      <OurCourses />
      <OurServices />
      <OurInstructors />
      <LevelUp />
      <Footer />
    </>
  );
}

export default App;
