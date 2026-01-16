import React from "react";
import NavbarComponent from "../../components/Navbar";
import TeamSection from "../../components/TeamSection";
import FooterComponent from "../../components/Footer";
import AlumniSection from "../../components/AlumniSection";

import { motion, AnimatePresence } from "framer-motion";
import Carousel from "../../components/Carousel";
import ScrollFadeComponent from "../../components/ScrollFadeComponent";

const alumniData = [
    {
      year: "2023 – 2025",
      members: [
        "Utsukh Rawat",
        "Shrish Shukla",
        "Karthikeyan B",
        "Ayan Chatterjee",
        "Pankhuri Gupta",
        "Lakshya Arora",
        "Mohak Anand",
        "Mukul Manghani",
        "Sanchita Srivastava",
        "Shweta",
        "Siddhant Chahal",
        "SVS Sri Harsha",
        "Varun Gupta",
        "Yash Khandelwal",
      ],
    },
    {
      year: "2022 – 2024",
      members: [
        "O R N Karthik",
        "Anuj Kapoor",
        "Aashna Khanna",
        "Devika Sood",
        "Palak Tulsyan",
        "Pooja Pasari",
        "Rajat Mehra",
        "Sagnika Sarkar",
        "Shiri Agarwal",
        "Vanshika Chopra",
        "Varnika Agarwal",
      ],
    },
    {
    year: "2021 – 2023",
    members: [
        "Muskan",
        "Ilesh Agrawal",
        "Kriti Raheja",
        "KVS Phaneendra",
        "Madhulika Nath",
        "Mudit Makheja",
        "Neharika Jain",
        "Shruti Chaturvedi",
        "Yashovardhan Agarwal",
        "Chittrieta",
        "Vishesh Hasija",
        "Shivangi Agarwal",
        "Rishi Gupta",
    ],
    },
    {
    year: "2020 – 2022",
    members: [
        "Apoorva Chaudhary",
        "Avnika Goyal",
        "Debabrata Das",
        "Hitenkumar Meruliya",
        "Kshitij Mani Tripathi",
        "Memansha Gupta",
        "Pradyumn Mattu",
        "Pranshu Garg",
        "Shubham Garg",
        "Keshav Gupta",
        "Sulagna Moitra",
        "Vyshali R",
        "Yash Bajoria",
    ],
    }
  ];

const AlumsPage = () => {

    console.log("hi");
  return (
    <div>
      <NavbarComponent />
      <div className="mx-auto bg-black">
        <div className="px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-white mb-16">
          TEDxMDIGurgaon <span className="text-red-500">Alumni</span>
        </h1>

        {alumniData.map((batch, index) => (
          <AlumniSection
            key={index}
            year={batch.year}
            members={batch.members}
          />
        ))}
        </div>
      </div>
      <FooterComponent />
    </div>
    
  );
};

export default AlumsPage;
