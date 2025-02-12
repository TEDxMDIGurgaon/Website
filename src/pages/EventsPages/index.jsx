import React from "react";
import NavbarComponent from "../../components/Navbar";
import TeamSection from "../../components/TeamSection";
import FooterComponent from "../../components/Footer";


import { motion, AnimatePresence } from "framer-motion";
import Carousel from "../../components/Carousel";
import ScrollFadeComponent from "../../components/ScrollFadeComponent";
import p1 from "../../assets/conv_event/1 (1).jpeg";
import p2 from "../../assets/conv_event/1 (2).jpeg";
import p3 from "../../assets/conv_event/1 (3).jpeg";
import p4 from "../../assets/conv_event/1 (4).jpeg";
import p5 from "../../assets/conv_event/1 (7).jpeg";

const EventsPage = () => {

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
            <div className="mx-auto pt-[64px]">
                <motion.section
                    className="min-h-screen bg-[black] text-white p-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    id="about"
                >
                    <h2 className="text-3xl font-bold mb-8 w-full text-center">
                        Past Events
                    </h2>
                    <Carousel images={pastEvents} />
                    <div className="container mx-auto px-4">
                        <div className="sticky">
                            <ScrollFadeComponent />
                        </div>
                    </div>
                </motion.section>
            </div>
            <FooterComponent />
        </div>
    );
};

export default EventsPage;
