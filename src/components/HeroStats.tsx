"use client";

import React from "react";
import CountUp from "react-countup";

const HeroStats = ({
  start,
  end,
  title,
}: {
  start?: number;
  end: number;
  title: string;
}) => {
  return (
    <div className="flexColCenter">
      <span style={{ fontSize: "2rem" }}>
        {start ? (
          <CountUp
            start={start}
            end={end}
            duration={4}
          />
        ) : (
          <CountUp end={end} />
        )}
        <span className="text-orange-400">+</span>
      </span>
      <span className="secondaryText">{title}</span>
    </div>
  );
};

export default HeroStats;
