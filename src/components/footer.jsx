import { RiFacebookFill, RiInstagramLine, RiLeafFill, RiLinkedinFill, RiTwitterXFill, RiSendPlane2Fill } from "react-icons/ri";

function Footer(){
    return(
        <footer className="bg-yellow-200 relative">
            <form className="absolute -top-7 lg:-top-0 -translate-y-16 left-1/2 -translate-x-1/2 bg-green-900 px-7 pt-5 pb-7 rounded-md lg:w-9/12 z-[5]" onClick={e => e.preventDefault()}>
                <h3 className="text-xl lg:text-2xl pb-2"><span className="text-yellow-600">Subscribe</span> to our newsletter</h3>
                <div className="flex gap-2 lg:justify-between flex-wrap">
                    <input type="email" placeholder="Your Email Address" className="p-2 rounded-md basis-full lg:basis-[85%] text-gray-950 border-none outline-none"/>
                    <button className="p-2 basis-full lg:p-0 lg:basis-[13%] bg-green-950 rounded-md" type="submit">Subscribe <RiSendPlane2Fill className="inline" /></button>
                </div>
            </form>
            <img src="./images/floral-1.png" className="absolute bottom-0 left-0 opacity-40 w-[400px]" alt="" />
            <div className="container relative py-6 pt-40">
                <div className=" relative flex flex-wrap gap-4 justify-between py-8 border-t-2 border-t-green-500">
                    <div className="text-green-950 bg-yellow-200 absolute top-0 -translate-y-4 px-2 left-1/2 z-[5] -translate-x-1/2">
                        <RiFacebookFill className="inline hover:text-green-500 transition-all duration-300 cursor-pointer"/>
                        <RiTwitterXFill className="inline ml-2 hover:text-green-500 transition-all duration-300 cursor-pointer"/>
                        <RiInstagramLine className="inline ml-2 hover:text-green-500 transition-all duration-300 cursor-pointer"/>
                        <RiLinkedinFill className="inline ml-2 hover:text-green-500 transition-all duration-300 cursor-pointer"/>
                    </div>
                    <div className="text-center basis-full md:basis-[45%] lg:basis-[23%] mx-auto">
                        <RiLeafFill className="text-green-800 text-6xl mx-auto"/>
                        <h1 className="font-Lobster text-2xl text-green-800">IndorePlants.</h1>
                    </div>
                    <div className="text-center lg:text-left  basis-full md:basis-[45%] lg:basis-[23%] mx-auto">
                        <ul>
                            <h4 className="h4">Quick Link</h4>
                            <li>Plants</li>
                            <li>Flowers</li>
                            <li>Gerdening</li>
                            <li>Seeds</li>
                            <li>Shipping</li>
                        </ul>
                    </div>
                    <div className="text-center lg:text-left  basis-full md:basis-[45%] lg:basis-[23%] mx-auto">
                        <ul>
                            <h4 className="h4">Popular Services</h4>
                            <li>Tree Planting</li>
                            <li>Grass Cutting</li>
                            <li>Weeds Control</li>
                            <li>Project</li>
                        </ul>
                    </div>
                    <div className="text-center lg:text-left  basis-full md:basis-[45%] lg:basis-[23%] mx-auto">
                        <h4 className="h4">Contact Us</h4>
                        <p className="text-green-900">+88 333 78 901</p>
                        <p className="text-green-900 mb-4">lightcodecamp@gmail.com</p>
                        <div>
                            <p className="text-green-900">1234 Tailwind Ave, Css City, Webland 56789, USA</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-green-900 text-center">Copyright &copy; 2024 LightCode. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;