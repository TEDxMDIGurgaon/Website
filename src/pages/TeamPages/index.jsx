import React from "react";
import NavbarComponent from "../../components/Navbar";
import TeamSection from "../../components/TeamSection";
import FooterComponent from "../../components/Footer";

/* ✅ NEW SENIOR TEAM IMAGES */
import Adab from "../../assets/team/Adab.jpg";
import Anushka from "../../assets/team/Anushka.jpg";
import Bibhankar from "../../assets/team/Bibhankar.jpg";
import Chris from "../../assets/team/Chris.jpg";
import Gaurang from "../../assets/team/Gaurang.jpeg";
import Mayank from "../../assets/team/Mayank.jpg";
import Nishtha from "../../assets/team/Nishtha.jpg";
import Rishabh from "../../assets/team/Rishabh.jpeg";
import Saanvi from "../../assets/team/Saanvi.jpg";
import Tarun from "../../assets/team/Tarun.jpeg";
import Tirth from "../../assets/team/Tirth.png";
import Zoya from "../../assets/team/Zoya.jpg";
import Yagyant from "../../assets/team/Yagyant.jpg";
import Naman from "../../assets/team/Naman.png";

/* JUNIOR TEAM (UNCHANGED) */
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

  /* ✅ UPDATED SENIOR TEAM (REPLACED COMPLETELY) */
  const teamMembers23 = [
    { id: 1, name: "Adab", image: Adab, member: "Senior member" },
    { id: 2, name: "Anushka", image: Anushka, member: "Senior member" },
    { id: 3, name: "Bibhankar", image: Bibhankar, member: "Senior member" },
    { id: 4, name: "Chris", image: Chris, member: "Senior member" },
    { id: 5, name: "Gaurang", image: Gaurang, member: "Senior member" },
    { id: 6, name: "Mayank", image: Mayank, member: "Senior member" },
    { id: 7, name: "Nishtha", image: Nishtha, member: "Senior member" },
    { id: 8, name: "Rishabh", image: Rishabh, member: "Senior member" },
    { id: 9, name: "Saanvi", image: Saanvi, member: "Senior member" },
    { id: 10, name: "Tarun", image: Tarun, member: "Senior member" },
    { id: 11, name: "Tirth", image: Tirth, member: "Senior member" },
    { id: 12, name: "Zoya", image: Zoya, member: "Senior member" },
    { id: 13, name: "Yagyant", image: Yagyant, member: "Senior member" },
    { id: 14, name: "Naman", image: Naman, member: "Senior member" },
  ];

  /* JUNIOR TEAM (UNCHANGED) */
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
    { name: "Mukul", image: Mukul },
    { name: "Subholaxmi", image: Subholaxmi },
  ];

  return (
    <div>
      <NavbarComponent />

      <div className="mx-auto">
        <TeamSection title="Team 2025-27" teamMembers={teamMembers23} />
        <TeamSection title="Team 2024-26" teamMembers={teamMembers24} />
      </div>

      <FooterComponent />
    </div>
  );
};

export default TeamPage;
