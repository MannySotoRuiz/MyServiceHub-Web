"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);

  return (
    <section className="text-white">
      <div className="flex gap-y-[32px] flex-wrap items-center justify-between p-[24px] py-[16px] text-[rgba(255,255,255,0.78)] innerWidth">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={50}
        />
        <div className="hidden tablet:flex gap-y-[32px] justify-center items-center flex-wrap gap-[32px]">
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>

        <div
          className={`text-[#131110] font-medium absolute top-[3rem] right-[4rem] bg-[white] ${
            mobileMenuOpened ? "flex" : "hidden"
          } tablet:hidden flex-col gap-y-[32px] justify-center items-start flex-wrap gap-[32px] p-[48px] rounded-[10px] shadow-[0px,4px,4px,rgba(0,0,0,0.05)] z-50 transition`}
        >
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>

        {/* menu header */}
        <div
          onClick={() => setMobileMenuOpened((prev) => !prev)}
          className="menu-icon tablet:hidden"
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
