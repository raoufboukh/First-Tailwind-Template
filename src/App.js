import Navbar from "./components/navbar";
import AOS from "aos";
import 'aos/dist/aos.css';
import Home from "./components/home";
import Service from "./components/service";
import About from "./components/about";
import Popular from "./components/popular";
import Review from "./components/review";
import Footer from "./components/footer";

AOS.init({
  duration: 1500,
  easing: "linear",
})
const sec = document.querySelectorAll('section');
for(let i=0;i<sec.length;i++){
  console.log(sec[i].offsetTop)
}
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Service/>
      <About/>
      <Popular/>
      <Review/>
      <Footer/>
    </>
  );
}

export default App;