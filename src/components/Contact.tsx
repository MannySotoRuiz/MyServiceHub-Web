import Image from "next/image";
import { FC } from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <section>
      <div className="paddings innerWidth flex gap-y-[32px] justify-between items-center flex-wrap">
        {/* left side */}
        <div className="flexColStart c-left flex-1 gap-2">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart contactModes mt-[32px] gap-4">
            {/* first row */}
            <div className="flexStart row gap-[24px]">
              {/* first mode */}
              <div className="flexColCenter mode w-[256px] p-[16px] border-[0.8px] border-[rgba(128,128,128,0.143)] rounded-[5px] gap-4">
                <div className="flexStart w-full gap-[1.6rem]">
                  <div className="flexCenter icon p-[10px] bg-[#eeeeff] rounded-[5px]">
                    <MdCall
                      size={25}
                      color="#4066ff"
                    />
                  </div>
                  <div className="flexColStart detail">
                    <span className="text-[#1f3e72] font-semibold text-[1.1rem]">
                      Call
                    </span>
                    <span className="secondaryText">012 345 567</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode w-[256px] p-[16px] border-[0.8px] border-[rgba(128,128,128,0.143)] rounded-[5px] gap-4">
                <div className="flexStart w-full gap-[1.6rem]">
                  <div className="flexCenter icon p-[10px] bg-[#eeeeff] rounded-[5px]">
                    <BsFillChatDotsFill
                      size={25}
                      color="#4066ff"
                    />
                  </div>
                  <div className="flexColStart detail">
                    <span className="text-[#1f3e72] font-semibold text-[1.1rem]">
                      Chat
                    </span>
                    <span className="secondaryText">012 345 567</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row gap-[24px]">
              {/* third mode */}
              <div className="flexColCenter mode w-[256px] p-[16px] border-[0.8px] border-[rgba(128,128,128,0.143)] rounded-[5px] gap-4">
                <div className="flexStart w-full gap-[1.6rem]">
                  <div className="flexCenter icon p-[10px] bg-[#eeeeff] rounded-[5px]">
                    <BsFillChatDotsFill
                      size={25}
                      color="#4066ff"
                    />
                  </div>
                  <div className="flexColStart detail">
                    <span className="text-[#1f3e72] font-semibold text-[1.1rem]">
                      Video Call
                    </span>
                    <span className="secondaryText">012 345 567</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>

              {/* fourth mode */}
              <div className="flexColCenter mode w-[256px] p-[16px] border-[0.8px] border-[rgba(128,128,128,0.143)] rounded-[5px] gap-4">
                <div className="flexStart w-full gap-[1.6rem]">
                  <div className="flexCenter icon p-[10px] bg-[#eeeeff] rounded-[5px]">
                    <HiChatBubbleBottomCenter
                      size={25}
                      color="#4066ff"
                    />
                  </div>
                  <div className="flexColStart detail">
                    <span className="text-[#1f3e72] font-semibold text-[1.1rem]">
                      Message
                    </span>
                    <span className="secondaryText">012 345 567</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="c-right flex-1 w-full flex items-center justify-center">
          <div className="relative w-[480px] h-[560px] overflow-hidden border-8 border-[rgba(255,255,255,0.12)] rounded-b-none rounded-t-[240px]">
            <Image
              src="/images/contact.jpg"
              alt="contact img"
              fill={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
