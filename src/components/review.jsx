import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiComma } from "react-icons/si";
import { useEffect, useRef, useState } from "react";

const reviwers = [
    {
        id:1,
        name:"John Doe",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga accusantium corporis saepe aut, dignissimos dicta quia!",
        image:"./images/review-1.jpg"
    },
    {
        id:2,
        name:"John Doe",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga accusantium corporis saepe aut, dignissimos dicta quia!",
        image:"./images/review-2.jpg"
    },
    {
        id:3,
        name:"John Doe",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga accusantium corporis saepe aut, dignissimos dicta quia!",
        image:"./images/review-3.jpg"
    },
    {
        id:4,
        name:"John Doe",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga accusantium corporis saepe aut, dignissimos dicta quia!",
        image:"./images/review-4.jpg"
    },
]
function Review(){
    const [change,setChange] = useState(0);
    const slideRef = useRef(null);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },

        ]
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setChange(prevChange => (prevChange + 1) % reviwers.length);
            if(slideRef.current){
                slideRef.current.slickGoTo(change);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [change]);

    return(
        <section id="review" className="relative">
            <img src="./images/leaf-4.png" className="absolute left-0 top-0 w-20" alt="" />
            <div className="container mx-auto py-10 mb-20 lg:mb-12">
                <div className="text-center" data-aos="fade-down">
                    <h2 className="font-Lobster text-yellow-600 text-3xl">Customer Review</h2>
                    <p>Follow instruction for more</p>
                </div>
                <div data-aos="fade-down" className="my-16">
                    <Slider ref={slideRef} {...settings}>
                        {
                            reviwers.map((review) => {
                                return(
                                    <div key={review.id} className="rev bg-green-900 py-3 px-4">
                                        <p className="font-Lobster my-2">{review.desc}</p>
                                        <div className="flex justify-between">
                                            <div className="flex gap-2">
                                                <img src={review.image} className="w-8 h-8 rounded-full" alt="" />
                                                <div>
                                                    <h4 className="text-yellow-600">{review.name}</h4>
                                                    <p>Designer</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-4xl"><SiComma className="inline"/><SiComma className="inline"/></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Review;