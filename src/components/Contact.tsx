import Image from "next/image";
import { FC } from "react";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        {/* <div className="c-left">
            left
        </div> */}

        {/* right side */}
        {/* <div className="c-right">
            <div className="relative w-[480px] h-[560px] overflow-hidden border-8 border-[rgba(255,255,255,0.12)] rounded-b-none rounded-t-[240px]">
                <Image 
                    src="/images/contact.png"
                    alt="contact img"
                />
            </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
