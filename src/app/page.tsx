import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import HeroStats from "@/components/HeroStats";
import Header from "@/components/Header";
import FeaturedRow from "@/components/FeaturedRow";

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <div className="relative overflow-x-clip">
        <div className="bg-[#131110] relative">
          <div className="absolute w-[20rem] h-[20rem] bg-[rgba(255,255,255,0.522)] blur-[100px] rounded-[100px]"></div>
          <Header />
          <section className="text-white relative pb-[32px]">
            <div className="p-[24px] innerWidth flex gap-y-[32px] justify-between flex-wrap items-end ">
              {/* left side */}
              <div className="flexColStart gap-[48px]">
                {/* hero title */}
                <div className="relative z-10">
                  <div className="orangeCircle" />
                  <h1 className="font-semibold text-6xl">
                    Find The Best
                    <br />
                    Pros In Your <br />
                    Area
                  </h1>
                </div>

                {/* hero description */}
                <div className="flexColStart">
                  <span className="text-[rgb(140,139,139)] text-lg">
                    Find a variety of properties that suit you very easily
                  </span>
                  <span className="text-[rgb(140,139,139)] text-lg">
                    Forget all difficulties in finding a residence for you
                  </span>
                </div>

                {/* hero search bar */}
                <div className="bg-white rounded-[5px] border border-[rgba(120,120,120,0.374)] py-[8px] px-[16px] flex items-center justify-between w-full">
                  <HiLocationMarker
                    color="var(--blue)"
                    size={25}
                  />
                  <input
                    type="text"
                    // className="border-none outline-none"
                  ></input>
                  <button className="button">Search</button>
                </div>
                {/* end of search bar */}

                {/* stats */}
                <div className="flex gap-y-[32px] justify-between items-center flex-wrap w-full">
                  <HeroStats
                    start={8800}
                    end={9000}
                    title="Premium Products"
                  />
                  <HeroStats
                    start={1950}
                    end={2000}
                    title="Happy Customers"
                  />
                  <HeroStats
                    end={28}
                    title="Award Winnings"
                  />
                </div>
              </div>
              {/* end of left side */}

              {/* right side */}
              <div className="flexCenter">
                <div className="relative w-[480px] h-[560px] overflow-hidden border-8 border-[rgba(255,255,255,0.12)] rounded-b-none rounded-t-[240px]">
                  <Image
                    src="/images/hero-image.png"
                    alt="hero-image"
                    fill={true}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* end of hero section */}

      {/* featured rows section */}
      <section className="r-wrapper">
        <FeaturedRow />
      </section>
    </main>
  );
}
