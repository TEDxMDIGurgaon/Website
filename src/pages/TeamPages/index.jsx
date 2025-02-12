import React from "react";
import NavbarComponent from "../../components/Navbar";
import TeamSection from "../../components/TeamSection";
import FooterComponent from "../../components/Footer";

import utsukh from "../../assets/team/utsukh.png";
import shrish from "../../assets/team/shrish.png";
import ayan from "../../assets/team/Ayan.png";
import karthikeyan from "../../assets/team/Karthikeyan.png";
import mohak from "../../assets/team/mohak.png";
import mukul from "../../assets/team/Mukul.png";
import pankhuri from "../../assets/team/Pankhuri.png";
import sanchita from "../../assets/team/Sanchita.png";
import shweta from "../../assets/team/Shweta.png";
import siddhant from "../../assets/team/siddhant.png";
import harsha from "../../assets/team/Harsha.png";
import lakshya from "../../assets/team/lakshya.png";
import varun from "../../assets/team/varun.png";
import yash from "../../assets/team/Yash.png";


import Abhiraj from "../../assets/junior_team/Abhiraj.png";
import Anurupa from "../../assets/junior_team/Anurupa.png";
import Atharva from "../../assets/junior_team/Atharva.png";
import Jahnavi from "../../assets/junior_team/Jahnavi.png";
import Sanskar from "../../assets/junior_team/Sanskar.png";
import Divya from "../../assets/junior_team/Divya.png";
import Jai from "../../assets/junior_team/Jai.png";
import Mollshree from "../../assets/junior_team/Mollshree.png";
import Kashavi from "../../assets/junior_team/Kashavi.png";
import Deepanshu from "../../assets/junior_team/Deepanshu.png";
import Ispita from "../../assets/junior_team/Ispita.png";
import Sanchita_B from "../../assets/junior_team/Sanchita_B.png";
import Dhriti from "../../assets/junior_team/Dhriti.png";
import Mukul from "../../assets/junior_team/Mukul.png";
import Nihal from "../../assets/junior_team/Nihal.png";
import Subholaxmi from "../../assets/junior_team/Subholaxmi.png";
import Kashika from "../../assets/junior_team/Kashika.png";

const TeamPage = () => {
  const teamMembers23 = [
    { id: 2, name: "Utsukh", image: utsukh, member: "Senior member" },
    { id: 3, name: "Shrish", image: shrish, member: "Senior member" },
    { id: 4, name: "Ayan", image: ayan, member: "Senior member" },
    { id: 5, name: "Karthikeyan", image: karthikeyan, member: "Senior member" },
    { id: 6, name: "Pankhuri", image: pankhuri, member: "Senior member" },
    { id: 7, name: "Sanchita", image: sanchita, member: "Senior member" },
    { id: 7, name: "Shweta", image: shweta, member: "Senior member" },
    { id: 7, name: "Siddhant", image: siddhant, member: "Senior member" },
    { id: 7, name: "Harsha", image: harsha, member: "Senior member" },
    { id: 7, name: "Varun", image: varun, member: "Senior member" },
    { id: 7, name: "Yash", image: yash, member: "Senior member" },
    { id: 7, name: "Mohak", image: mohak, member: "Senior member" },
    { id: 7, name: "Mukul", image: mukul, member: "Senior member" },
    { id: 7, name: "Lakshya", image: lakshya, member: "Senior member" },
  ];
  const teamMembers24 = [
    { name: "Anurupa", image: Anurupa },
    { name: "Jahnavi", image: Jahnavi },
    { name: "Mollshree", image: Mollshree },
    { name: "Divya", image: Divya },
    { name: "Ispita", image: Ispita },
    { name: "Deepanshu", image: Deepanshu },
    { name: "Abhiraj", image: Abhiraj },
    { name: "Atharva", image: Atharva },
    { name: "Nihal", image: Nihal },
    { name: "Kashika", image: Kashika },
    { name: "Kashavi", image: Kashavi },
    { name: "Jai", image: Jai },
    { name: "Sanskar", image: Sanskar },
    { name: "Sanchita", image: Sanchita_B },
    { name: "Dhriti", image: Dhriti },
    { name: "Mukul", image: Mukul },
    { name: "Subholaxmi", image: Subholaxmi },

    // Add more members as needed
  ];

  return (
    <div>
      <NavbarComponent />
      <div className="mx-auto">
        <TeamSection title="Team 2023-25" teamMembers={teamMembers23} />
        <TeamSection title="Team 2024-26" teamMembers={teamMembers24} />
      </div>
      <FooterComponent />
    </div>
    
  );
};

export default TeamPage;
