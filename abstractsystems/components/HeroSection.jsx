import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <div className="text-center mr-5 font-sarpanch">Code Design Launch</div>

      <div>
        <Image src="/images/computerscreen.png" width={400} height={400} alt="Abstract Systems Logo" />
      </div>
    </div>
  );
};

export default HeroSection;
