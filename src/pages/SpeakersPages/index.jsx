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
import akash from "../../assets/PresentSpeakers/AKASH GUPTA.jpeg";
import ankur from "../../assets/PresentSpeakers/ANKUR WARIKOO.jpeg";
import zoya from "../../assets/PresentSpeakers/CAPTAIN ZOYA AGARWAL.jpeg";
import anand from "../../assets/PresentSpeakers/DR. ANAND S.jpeg";
import awdhesh from "../../assets/PresentSpeakers/DR. AWDHESH SINGH.jpeg";
import vandana from "../../assets/PresentSpeakers/MAJOR VANDANA SHARMA.jpeg";
import puneet from "../../assets/PresentSpeakers/PUNEET RAO.jpeg";
import vicky from "../../assets/PresentSpeakers/VICKY ROY.jpeg";
import vikram from "../../assets/PresentSpeakers/VIKRAM RAI.jpeg";
import amit from "../../assets/PresentSpeakers/AMIT BONI.jpeg";
import anurag from "../../assets/PresentSpeakers/ANURAG BATRA.jpeg";
import girish from "../../assets/PresentSpeakers/GIRISH AIVALLI.jpeg";
import mohit from "../../assets/PresentSpeakers/MOHIT GANG.jpeg";
import nitin from "../../assets/PresentSpeakers/NITIN ARORA.jpeg";
import ritwik from "../../assets/PresentSpeakers/RITWIK BHOWMIK.jpeg";
import shobhit from "../../assets/PresentSpeakers/SHOBHIT SARASWAT.jpeg";
import sangeeta from "../../assets/PresentSpeakers/SANGEETA SIDHI BAHL.jpeg";
import rinima from "../../assets/PresentSpeakers/RINIMA BORAH.jpg";
import singh from "../../assets/PresentSpeakers/MAJOR DP SINGH.jpg";
import vivek from "../../assets/PresentSpeakers/VIVEK SETHIA.jpeg";
import dheeraj from "../../assets/PresentSpeakers/DHEERAJ DOGRA.jpg";
import lakshmi from "../../assets/PresentSpeakers/LAXMI RANA.jpg";

import Typewriter from "typewriter-effect";
import ImageTextSection from "../../components/ImageSection/index";
const SpeakersPage = () => {

    const teamMembers1 = [
        { id: 1, name: "Sangeeta Sindhi Bahl, Alpinist", image: sangeeta, member: "Senior member" },
        { id: 2, name: "Rinima Borah, Mrs India World", image: rinima, member: "Senior member" },
        { id: 3, name: "Major DP Singh, Major", image: singh, member: "Senior member" },
        { id: 4, name: "Vivek Sethia, Founder, India on Track", image: vivek, member: "Senior member" },
        { id: 5, name: "Dr.Dheeraj Dogra, Senior Consultant", image: dheeraj, member: "Senior member" },
        { id: 6, name: "Lakshmi Rana, ", image: lakshmi, member: "Senior member" },
        ];
      const teamMembers2 = [
        { id: 10, name: "Amit Boni, Founder & CEO, Ensuredit", image: amit, member: "Senior member" },
        { id: 11, name: "Anurag Batra, Chairman, BusinessWorld", image: anurag, member: "Senior member" },
        { id: 12, name: "Girish Aivalli, CEO, IIC", image: girish, member: "Senior member" },
        { id: 13, name: "Mohit Gang, CEO, Money Front", image: mohit, member: "Senior member" },
        { id: 14, name: "Nitin Arora, Corporate Banker", image: nitin, member: "Senior member" },
        { id: 15, name: "Ritwik Bhowmik, Actor", image: ritwik, member: "Senior member" },
        { id: 16, name: "Shobhit Saraswat, Rupee Funding", image: shobhit, member: "Senior member" },
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
            className="min-h-screen bg-[black] text-white p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="contact"
          >
            <h2 className="text-3xl font-bold mb-8 w-full text-center">
              Speaker Line-Up For <span className="text-red-500">TEDx 6.0</span>
            </h2>
            <Carousel images={teamMembers1} number={3} />
          </motion.section>
          <motion.section
            className="bg-[black] text-white p-8 pt-[96px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="contact"
          >
            <h2 className="text-3xl font-bold mb-8 w-full text-center">
              Speaker Line-Up For <span className="text-red-500">TEDx 5.0</span>
            </h2>
            <Carousel images={teamMembers2} number={3} />
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