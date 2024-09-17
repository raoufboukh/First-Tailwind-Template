
function About(){
    return(
        <section id="about" className="overflow-hidden relative">
            <img src="./images/leaf-3.png" className="absolute w-20 -right-5 -top-3" alt="" />
            <div className="container py-10 mx-auto">
                <div className="text-center" data-aos="fade-down">
                    <h2 className="font-Lobster text-yellow-600 text-3xl">About Us</h2>
                    <p>Follow instruction for more</p>
                </div>
                <div className="plants mt-16 flex-wrap">
                    <div data-aos="fade-right">
                        <img className="w-4/5 mx-auto" src="./images/plant-1.png" alt="" />
                    </div>
                    <div data-aos="fade-left">
                        <h3>Make your <span className="text-yellow-600">organic</span> garden</h3>
                        <p className="font-Lobster">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus temporibus odio voluptatem fuga nesciunt sequi distinctio asperiores natus officiis molestias, dolores obcaecati at amet magnam doloribus, iure blanditiis perspiciatis maxime!</p>
                    </div>
                </div>
                <div className="plants mt-2 flex-wrap">
                    <div data-aos="fade-right" className="order-3 lg:-order-1">
                        <h3>Come with us <span className="text-yellow-600">grow up</span> your plant</h3>
                        <p className="font-Lobster">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus temporibus odio voluptatem fuga nesciunt sequi distinctio asperiores natus officiis molestias, dolores obcaecati at amet magnam doloribus, iure blanditiis perspiciatis maxime!</p>
                    </div>
                    <div data-aos="fade-left">
                        <img className="w-4/5 mx-auto -order-2 lg:order-2" src="./images/plant-2.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;