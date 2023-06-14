import styles from "../style";
import { discount, forklift, construction } from '../assets';
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">15%</span> Discount On{' '}
            <span className="text-white">Long-Term</span> Contracts
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Experts in
            <br className="sm:block hidden" />{' '}
            <span className="text-gradient">Logistic</span>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Solutions.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With years of industry expertise operating out of Nigeria and a
          commitment to excellence, we are here to meet all your logistical
          needs. Whether you require efficient shipping services, reliable
          construction solutions, or expert procurement support, we've got you
          covered.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        {/* <div className="w-[5000px] h-[5000] rounded-full construction-blur"></div> */}

        <img
          src={construction}
          alt="construction"
          className="w-[5000px] relative z-[5] rounded-full shadow-2xl shadow-[#763921] mix-blend-hard-light"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 orange__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
