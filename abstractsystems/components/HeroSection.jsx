import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="text-center mr-5">Code is Art</div>

      <div>
        <Image src="/images/computerscreen.png" width={400} height={400} alt="Abstract Systems Logo" />
      </div>
    </div>
  );
};

export default HeroSection;
