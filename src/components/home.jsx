import { RiLeafLine, RiFacebookFill, RiFlowerLine, RiPlantLine, RiTwitterXFill, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";
import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

function Home(){
    const [scr,setScr] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScr(window.scrollY);
        }
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[scr])
    useEffect(() => {
        const home = document.querySelector('.home');
        if(scr >= home.offsetTop && scr < home.offsetTop + home.offsetHeight + 100){
            AOS.refresh();
        }
    },[scr])
    return (
        <section id="home" className="home">
            <div onClick={() => window.scroll({top:0,behavior:"smooth"})} className={scr > 230 ? 'fixed text-white text-3xl p-2 z-10 bg-yellow-400 cursor-pointer bottom-3 rounded-md right-2' : 'hidden'}><FaAngleUp/></div>
                <div className="blr"></div>
                <div className="blr"></div>
            <div className="container mx-auto">
                <div data-aos="fade-right">
                    <h2><span>Plants</span> make a positive <span>impact</span> on your environment</h2>
                    <p className="font-Lobster pt-3 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi unde doloremque aspernatur suscipit quibusdam saepe voluptas ad eum praesentium autem.</p>
                    <button className="btn">Shop Now <RiLeafLine className="inline"/></button>
                    <button className="btn btn-trans hover:bg-yellow-500 transition-all duration-300">Know more <RiLeafLine className="inline"/></button>
                    <p className="font-Lobster text-xs p-2">You will get 30 days free trial</p>
                    <div>
                        <RiFacebookFill className="social"/>
                        <RiTwitterXFill className="social"/>
                        <RiInstagramLine className="social"/>
                        <RiLinkedinFill className="social"/>
                    </div>
                </div>
                <div>
                    <RiLeafLine className="icon feath"/>
                    <RiFlowerLine className="icon flower"/>
                    <RiPlantLine className="icon plant"/>
                    <img data-aos="zoom-in" src="./images/home.png" className="mx-auto" alt="" />
                </div>
            </div>
        </section>
    );
}

export default Home;