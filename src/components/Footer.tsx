import Image from "next/image";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flex gap-y-[32px] justify-between items-center flex-wrap f-container">
        {/* left side */}
        <div className="flexColStart f-left gap-4">
          <Image
            src="/images/logo2.png"
            alt="logo"
            width={120}
            height={120}
          />

          <span className="secondaryText">
            Our vision is to make all people <br /> the best place to live for
            them.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            70 Washington Square S, New York, NY 10012
          </span>

          <div className="flexCenter f-menu gap-6 mt-6 font-semibold">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
