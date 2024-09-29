"use client";

import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { SignedInNav, EmbalaCarousel } from "@/components";
import { isAuthenticated } from "@/utils";

interface SlideInfo {
  name: string;
  email: string;
  src: string;
  event: string;
  company: string;
  role: string;
  date_issue: Date;
  date_due: Date;
}

type PropType = {
  slides: SlideInfo[];
  options?: EmblaOptionsType;
};

const Dashboard: React.FC<PropType> = (props) => {
  useEffect(() => {
    const init = () => {
      if (!isAuthenticated()) {
        window.location.href = "/";
      }
    };
    init();
  }, []);
  const tempInfo = [
    {
      name: "Syaam1",
      email: "Syaam1@gmail.com",
      src: "somesrc",
      event: "OA",
      company: "Citadel",
      role: "Software1",
      date_issue: new Date(2024, 8, 20, 10, 0, 0),
      date_due: new Date(2024, 8, 27, 10, 0, 0),
    },
    {
      name: "Syaam2",
      email: "Syaam2@gmail.com",
      src: "anothersrc",
      event: "Technical",
      company: "Amazon",
      role: "Software2",
      date_issue: new Date(2024, 9, 20, 10, 0, 0),
      date_due: new Date(2024, 9, 25, 10, 0, 0),
    },
    {
      name: "Syaam3",
      email: "Syaam3@gmail.com",
      src: "yetanothersrc",
      event: "Behavioral",
      company: "Google",
      role: "Software3",
      date_issue: new Date(2024, 10, 20, 10, 0, 0),
      date_due: new Date(2024, 10, 29, 10, 0, 0),
    },
  ];
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <div>
      <div className="absolute top-10 w-full">
        <SignedInNav
          name={localStorage.getItem("fullName")?.split(" ")[0] || "User"}
        />
      </div>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <div className="text-center text-[65px] mt-[75px]">
          Upcoming Assessments
        </div>
        <div className="">
          <EmbalaCarousel slides={tempInfo} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
