import { IoMdStar } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

const cards =[
    {
        id:1,
        title:"Boston Fern",
        image:'./images/cart-1.png',
        desc:"Nephrolepis exaltata"
    },
    {
        id:2,
        title:"Rubber Plant",
        image:'./images/cart-2.png',
        desc:"Ficus elastica"
    },
    {
        id:3,
        title:"Peace Lily",
        image:'./images/cart-3.png',
        desc:"Spathiphyllum wallisii"
    },
    {
        id:4,
        title:"Desert Rose",
        image:'./images/cart-4.png',
        desc:"Adenium obesum"
    },
]
function Popular(){
    return (
        <section id="popular" className="bg-green-900">
            <div className="container mx-auto py-10">
                <div className="text-center" data-aos="fade-down">
                    <h2 className="font-Lobster text-yellow-600 text-3xl">Your Choice Plant</h2>
                    <p>Follow instruction for more</p>
                </div>
                <div className="my-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
                    {
                        cards.map(card => {
                            return(
                                <div data-aos="fade-down" key={card.id} className="card relative z-[5] mt-16 xl:mt-8">
                                    <img src={card.image} className="-translate-y-24 w-4/5 mx-auto transition-all duration-300" alt="" />
                                    <div className="px-5 -mt-24">
                                        <p>{card.desc}</p>
                                        <h3 className="text-2xl xl:text-3xl">{card.title}</h3>
                                        <h5><IoMdStar className="star all"/><IoMdStar className="star all"/><FaStarHalfAlt className="star all small"/><CiStar className="all"/><CiStar className="all"/></h5>
                                        <div className="flex justify-between items-center mb-5">
                                            <h4>5$</h4>
                                            <h4 className="bg-yellow-600 p-2 cursor-pointer"><FaCartShopping/> </h4>
                                        </div>
                                    </div> 
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Popular;