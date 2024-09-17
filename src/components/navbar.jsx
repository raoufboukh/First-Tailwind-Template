import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
import { useEffect } from "react";
function Navbar(){
    const [scro,setScro] = useState(0);
    const [menu,setMenu] = useState(false);
    const [sections,setSections] = useState([]);
    const [activate,setActivate] = useState('home');
    useEffect(() => {
        setSections(Array.from(document.querySelectorAll('section')));
        const handleScroll = () => {
            setScro(window.scrollY);
            sections.forEach(section => {
                const sectionTop = section.offsetTop-60;
                const sectionHeight = section.offsetHeight;
                if(scro > sectionTop && scro < (sectionTop + sectionHeight)-60){
                    setActivate(section.getAttribute('id'));
                }
            })
        }
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[scro])
    const scrollToSection = (index) =>{
        if(sections[index]){
            window.scroll({
                top:sections[index].offsetTop-48,
                behavior:'smooth'
            })
            setMenu(false);
        }
    }
    return(
        <header className={scro > 0 ? `border-b border-b-yellow-400 py-3 bg-green-950 fixed w-full z-10` : `py-3 bg-green-950 fixed w-full z-10`} >
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="font-Lobster text-2xl">IndorePlants</h1>
                <RiMenu4Line className="cursor-pointer lg:hidden" onClick={() => setMenu(true)}/>
                <div className={menu ? `show showed` : `showed`}>
                    <img src="./images/leaf-1.png" alt="" className='leaf-1'/>
                    <img src="./images/leaf-2.png" alt="" className='leaf-2'/>
                    <div className="container">
                        <IoMdClose className='close' onClick={() => setMenu(false)}/>
                    </div>
                    <ul className='ul'>
                        <li className={(activate === 'home' || activate === 'service') ? 'text-yellow-600 li' : 'li'} onClick={() => scrollToSection(0)}>Home</li>
                        <li className={activate === 'about' ? 'text-yellow-600 li' : 'li'} onClick={() => scrollToSection(2)}>About</li>
                        <li className={activate === 'popular' ? 'text-yellow-600 li' : 'li'} onClick={() => scrollToSection(3)}>Popular</li>
                        <li className={activate === 'review' ? 'text-yellow-600 li' : 'li'} onClick={() => scrollToSection(4)}>Review</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;