import { RiTruckLine, RiPlantLine, RiMoneyDollarCircleLine , RiHeadphoneLine } from "react-icons/ri";
const services = [
    {
        id:1,
        icon: <RiTruckLine/>,
        title: "Fast Delivery",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestiae quam assumenda!"
    },
    {
        id:2,
        icon: <RiHeadphoneLine/>,
        title: "Great Customer Service",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestiae quam assumenda!"
    },
    {
        id:3,
        icon: <RiPlantLine/>,
        title: "Original Plants",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestiae quam assumenda!"
    },
    {
        id:4,
        icon: <RiMoneyDollarCircleLine/>,
        title: "Affordable Price",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestiae quam assumenda!"
    }
]
function Service(){
    return(
        <section id="service" className="bg-white py-14">
            <div className="container grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                {
                    services.map(service => {
                        return (
                            <div data-aos="fade-down" data-aos-delay={(service.id-1) * 200}  key={service.id} className="service text-green-900" >
                                <div className="flex justify-between items-center mb-1">
                                    <i className="text-3xl">{service.icon}</i>
                                    <h3 className="font-bold text-lg">{service.title}</h3>
                                </div>
                                <p className="font-Lobster">{service.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Service;