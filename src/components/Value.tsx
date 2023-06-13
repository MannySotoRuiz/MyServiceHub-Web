"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "@/lib/utils/accordian";

const Value = () => {
  const [expandedItem, setExpandedItem] = useState<number>(0);
  const handleAccordionItemClick = (idx: number) => setExpandedItem(idx);

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left flex-1">
          <div className="relative w-[480px] h-[560px] overflow-hidden border-8 border-[rgba(255,255,255,0.12)] rounded-b-none rounded-t-[240px]">
            <Image
              src="/images/value.png"
              alt="value"
              fill={true}
            />
          </div>
        </div>
        {/* end of left side */}

        {/* right side */}
        <div className="flexColStart v-right flex-1 gap-2">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We always are always ready to help by providing the best services
            for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="mt-[32px]"
            style={{ border: "none" }}
          >
            {data.map((item, idx) => {
              return (
                <AccordionItem
                  key={idx}
                  className={`accordionItem ${
                    expandedItem === idx ? "expanded" : "collapsed"
                  } bg-white border-[0.8px] border-[rgba(128,128,128,0.143)] rounded-lg overflow-hidden mb-5`}
                  uuid={idx}
                >
                  <AccordionItemHeading
                    onClick={() => handleAccordionItemClick(idx)}
                  >
                    <AccordionItemButton className="bg-white p-[16px] w-full flex items-center justify-between cursor-pointer gap-y-[32px] flex-wrap">
                      <div className="flexCenter icon p-[10px] bg-[#eeeeff] rounded-[5px]">
                        {item.icon}
                      </div>
                      <span className="text-[#1f3e72] font-bold text-[17.6px]">
                        {item.heading}
                      </span>
                      <div className="flexCenter icon p-[10px] bg-[#eeeeff] rounded-[5px]">
                        <MdOutlineArrowDropDown
                          size={20}
                          color="#4066ff"
                        />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        {/* end of right side */}
      </div>
    </section>
  );
};

export default Value;
