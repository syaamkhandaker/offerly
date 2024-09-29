"use client";

import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { SignedInNav, EmbalaCarousel } from "@/components";
import { isAuthenticated } from "@/utils";

interface SlideInfo {
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
      src: "somesrc",
      event: "OA",
      company: "Citadel",
      role: "Software1",
      date_issue: new Date(2024, 8, 20, 10, 0, 0),
      date_due: new Date(2024, 8, 27, 10, 0, 0),
    },
    {
      src: "anothersrc",
      event: "Technical",
      company: "Amazon",
      role: "Software1",
      date_issue: new Date(2024, 9, 20, 10, 0, 0),
      date_due: new Date(2024, 9, 25, 10, 0, 0),
    },
    {
      src: "yetanothersrc",
      event: "Behavioral",
      company: "Google",
      role: "Software1",
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
      <div className="flex flex-col gap-10 justify-center items-center h-screen w-screen">
        <EmbalaCarousel slides={tempInfo} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Dashboard;
