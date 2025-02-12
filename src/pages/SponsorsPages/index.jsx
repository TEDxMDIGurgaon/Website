import React from "react";
import NavbarComponent from "../../components/Navbar";
import TeamSection from "../../components/TeamSection";
import FooterComponent from "../../components/Footer";


import FlakeImage from '../../assets/sponsors/flake.jpg'
import AzMasters from '../../assets/sponsors/azmasters.jpg'


import { motion, AnimatePresence } from "framer-motion";
import Carousel from "../../components/Carousel";
import ScrollFadeComponent from "../../components/ScrollFadeComponent";
import p1 from "../../assets/conv_event/1 (1).jpeg";
import p2 from "../../assets/conv_event/1 (2).jpeg";
import p3 from "../../assets/conv_event/1 (3).jpeg";
import p4 from "../../assets/conv_event/1 (4).jpeg";
import p5 from "../../assets/conv_event/1 (7).jpeg";

const SponsorsPages = () => {

    const pastEvents = [
        { id: 1, name: "Team", image: p1, member: "Senior member" },
        { id: 2, name: "Team", image: p2, member: "Senior member" },
        { id: 3, name: "Team", image: p3, member: "Senior member" },
        { id: 4, name: "Prahatlhan", image: p4, member: "Senior member" },
        { id: 5, name: "Terence", image: p5, member: "Senior member" },
    ];
    return (
        <div>
            <NavbarComponent />
            <div className="mx-auto pt-[96px] bg-[black]">
                <div className="flex flex flex-col justify-center items-center align-middle gap-16">
                    <div className="flex flex-col gap-4 justify-center items-center align-middle ">
                        <p className="text-white text-4xl font-bold">Our Beverage Sponsor</p>
                        <div className="w-[300px] h-[300px]">
                            <img src={FlakeImage} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center align-middle ">
                        <p className="text-white text-4xl font-bold">Our Salon Sponsor</p>
                        <div className="w-[300px] h-[300px]">
                            <img src={AzMasters} />
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default SponsorsPages;
