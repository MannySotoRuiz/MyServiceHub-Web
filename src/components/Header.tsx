import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="bg-[#131110] text-white">
      <div className="flex gap-y-[32px] flex-wrap items-center justify-between p-[24px] py-[16px] text-[rgba(255,255,255,0.78)] innerWidth">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={50}
        />
        <div className="flex gap-y-[32px] justify-center items-center flex-wrap gap-[32px]">
          <a href="">Residencies</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
