import React from "react";
import NavbarComponent from "../../components/Navbar";
import TeamSection from "../../components/TeamSection";
import FooterComponent from "../../components/Footer";

import utsukh from "../../assets/team/utsukh.png";
import shrish from "../../assets/team/shrish.png";
import ayan from "../../assets/team/ayan.jpeg";
import karthikeyan from "../../assets/team/karthik.jpeg";
import mohak from "../../assets/team/mohak.png";
import mukul from "../../assets/team/mukul.jpeg";
import pankhuri from "../../assets/team/Pankhuri.jpeg";
import sanchita from "../../assets/team/sanchita.jpg";
import shweta from "../../assets/team/shweta.jpeg";
import siddhant from "../../assets/team/siddhant.png";
import harsha from "../../assets/team/SVS Sri Harsha.png";
import lakshya from "../../assets/team/lakshya.png";
import varun from "../../assets/team/varun.png";
import yash from "../../assets/team/Yash.jpeg";
import FlakeImage from '../../assets/sponsors/flake.jpg'
import AzMasters from '../../assets/sponsors/azmasters.jpg'

import Abhiraj from "../../assets/junior_team/Abhiraj.jpeg";
import Anurupa from "../../assets/junior_team/Anurupa.jpeg";
import Jahnavi from "../../assets/junior_team/Jahnavi.jpeg";
import Sanskar from "../../assets/junior_team/Sanskar.jpeg";
import Divya from "../../assets/junior_team/Divya.jpeg";
import Jai from "../../assets/junior_team/Jai.jpeg";
import Mollshree from "../../assets/junior_team/Mollshree.jpeg";
import Kashavi from "../../assets/junior_team/Kashavi.jpeg";
import Deepanshu from "../../assets/junior_team/Deepanshu.jpeg";
import Anirudha from "../../assets/junior_team/Anirudha.png";
import Ispita from "../../assets/junior_team/Ispita.jpeg";
import Nandini from "../../assets/junior_team/Nandini.jpeg";
import Sanchita_B from "../../assets/junior_team/Sanchita_B.jpeg";
import Dhriti from "../../assets/junior_team/Dhriti.jpeg";
import Mukul from "../../assets/junior_team/Mukul.jpeg";
import Subholaxmi from "../../assets/junior_team/Subholaxmi.jpeg";
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
