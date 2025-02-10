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
import akash from "../../assets/PresentSpeakers/AKASH GUPTA.jpeg";
import ankur from "../../assets/PresentSpeakers/ANKUR WARIKOO.jpeg";
import zoya from "../../assets/PresentSpeakers/CAPTAIN ZOYA AGARWAL.jpeg";
import anand from "../../assets/PresentSpeakers/DR. ANAND S.jpeg";
import awdhesh from "../../assets/PresentSpeakers/DR. AWDHESH SINGH.jpeg";
import vandana from "../../assets/PresentSpeakers/MAJOR VANDANA SHARMA.jpeg";
import puneet from "../../assets/PresentSpeakers/PUNEET RAO.jpeg";
import vicky from "../../assets/PresentSpeakers/VICKY ROY.jpeg";
import vikram from "../../assets/PresentSpeakers/VIKRAM RAI.jpeg";
import Typewriter from "typewriter-effect";
import ImageTextSection from "../../components/ImageSection/index";
const SpeakersPage = () => {

    const teamMembers = [
        { id: 1, name: "Akash Gupta, Founder ZYPP Electric", image: akash, member: "Senior member" },
        { id: 2, name: "Ankur Warikoo", image: ankur, member: "Senior member" },
        { id: 3, name: "Captain Zoya Agarwal, Pilot", image: zoya, member: "Senior member" },
        { id: 4, name: "S Anand", image: anand, member: "Senior member" },
        { id: 5, name: "Awdhesh Singh", image: awdhesh, member: "Senior member" },
        { id: 6, name: "Major Vandana", image: vandana, member: "Senior member" },
        { id: 7, name: "Puneet Rao, Fitness Influencer", image: puneet, member: "Senior member" },
        { id: 8, name: "Vicky Roy, International Photographer", image: vicky, member: "Senior member" },
        { id: 9, name: "Vikram Rai, MD GE South Asia", image: vikram, member: "Senior member" },
      ];
    return (
    <>
      <AnimatePresence>
        {/* <ScrollTopButton /> */}
        {/* {!videoEnded && isChrome && (
          <motion.video
            src={video}
            id="tedxVideo"
            autoPlay
            muted
           poster={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCO0HavOQon08LD4wiEUPOGazhlIs9Fj9RQ&s`} 
            onEnded={handleVideoEnd}
            className="fixed top-0 left-0 w-full h-full bg-black object-scale-down md:object-cover z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )} */}
      </AnimatePresence>
      {(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <NavbarComponent />
          {/* <div
            className="sticky flex items-center justify-center h-screen text-white"
            style={{ backgroundColor: "black" }}
          >
            <div className="z-20 text-center">
              {window.innerWidth > 400 ? (
                <Typewriter
                  options={{
                    className: "text-4xl",
                    strings: [
                      '<span style="color: red;font-size:64px">TEDx</span><span style="color: white;font-size:64px">MDIGurgaon</span>',
                      '<span style="color: white;font-size:48px">Event 5.0 Coming Soon</span>',
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                  }}
                />
              ) : (
                <Typewriter
                  options={{
                    className: "text-4xl",
                    strings: [
                      '<span style="color: red;font-size:36px">TEDx</span><span style="color: white;font-size:36px">MDIGurgaon</span>',
                      '<span style="color: white;font-size:24px">Embracing The Shift</span>',
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                  }}
                />
              )}
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-30 z-10"
              style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            ></div>
          </div> */}
          <motion.section
            className="bg-[black] text-white p-8 pt-[96px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="contact"
          >
            <h2 className="text-3xl font-bold mb-8 w-full text-center">
              Speaker Line-Up For Event 5.0
            </h2>
            <Carousel images={teamMembers} number={3} />
            {/* <div className="container mx-auto py-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-3xl font-bold mb-4"
                >
                  Welcome to TEDxMDIGurgaon
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-lg"
                >
                  TEDxMDIGurgaon brings together bright minds to give talks that
                  are idea-focused, and on a wide range of subjects, to foster
                  learning, inspiration, and wonder – and provoke conversations
                  that matter.
                </motion.p>
              </motion.div>
            </div> */}
          </motion.section>
          <motion.section
            className="min-h-screen bg-[black] text-white p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="contact"
          >
            <h2 className="text-3xl font-bold mb-8 w-full text-center">
              Speaker Line-Up For Event 4.0
            </h2>
            <Carousel images={teamMembers} number={3} />
            <div className="container mx-auto py-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-3xl font-bold mb-4"
                >
                  Welcome to TEDxMDIGurgaon
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-lg"
                >
                  TEDxMDIGurgaon brings together bright minds to give talks that
                  are idea-focused, and on a wide range of subjects, to foster
                  learning, inspiration, and wonder – and provoke conversations
                  that matter.
                </motion.p>
              </motion.div>
            </div>
          </motion.section>
          {/* <motion.section
            className="min-h-screen bg-black text-white p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="services"
          >
            <h2 className="text-3xl font-bold mb-4">TED & TEDx</h2>
            <ImageTextSection />
          </motion.section>
           */}
          <FooterComponent />
        </motion.div>
      )}
    </>
  );
};

export default SpeakersPage;