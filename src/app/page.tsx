import Image from "next/image";
import line from "@/assets/line1.svg";
import line2 from "@/assets/line2.svg";
import Storycard from "@/components/Storycard";
import FAQs from "@/components/Faq";
import Square from "@/assets/BlueSquare.svg";
import Circle from "@/assets/GreenCircle.svg";
import Triangle from "@/assets/Triangle.svg";
import SquareGray from "@/assets/Square.svg";
import Group from "@/assets/Group.svg";
import MobileLogo from "@/assets/MobileLogo.svg";
import arc from "@/assets/arc.svg";
import hexagon from "@/assets/hexagon.svg";
import EventCarousel from "@/components/EventCarousel";
import Sponsers2 from "@/components/Sponsers";
import Headerlogo from "@/components/animation/HeaderLogo";
export default function Home() {
  return (
    <div className="w-min-[1280px] mx-auto">
      {/* Hero Section */}
      <div className="lg:h-[80vh] mb-20 pt-20 relative">
        <div>
          <Image
            src={Square}
            alt="Element-Square"
            className="md:block hidden lg:h-1/2 h-1/6 absolute lg:left-0 -left-16 top-[40vh] -z-0 fill-yellow-500"
          />
        </div>
        <div>
          <Image
            src={Circle}
            alt="Element-Square"
            className="md:block lg:h-1/2 h-1/6 hidden absolute lg:right-0 -right-16 top-[50vh] -z-0"
          />
        </div>
        <div className="absolute -top-4 lg:right-0 -right-10 -z-10 h-screen w-auto lg:block hidden">
          <Image src={line} alt="line" />
        </div>
        <div className="absolute top-[700px] left-[450px] -z-10 h-[200vh] w-full lg:block hidden">
          <Image src={line2} alt="line" />
        </div>
        {/* logo for smaller screen */}
            <div className="lg:hidden w-full flex flex-col items-center justify-center text-center gap-2">
              <Image src={MobileLogo} alt="GDG-Logo" />
              <h1 className="text-6xl text-gray-600 dark:text-gray-500">
                <strong className="text-red-500">G</strong>oogle <br/><strong className="text-blue-500">D</strong>eveloper <br/><strong className="text-green-500">G</strong>roups</h1>
            </div>
        <div className="w-full lg:flex justify-center mt-32 hidden">
          <Headerlogo></Headerlogo>
        </div>
        <div className="w-full flex  justify-center mt-3 lg:mt-5">
          <h3 className="text-gray-900 dark:text-gray-400 font-normal text-center lg:mt-5 lg:text-xl">
            On Campus
            <br />
            <strong className="text-[#FBBC04] lg:mt-10 lg:text-2xl">
              BIET
            </strong>
            , Lucknow
          </h3>
        </div>
        <div className="flex justify-center lg:flex-row flex-col gap-7 mt-10 w-2/3 m-auto">
          <button className="lg:p-2 p-4 font-semibold lg:px-8 text-lg border-2 border-black dark:border-gray-500 bg-[#4285F4] rounded-lg text-white ">
            Join Chapter
          </button>
          <button className="lg:p-2 p-4 font-semibold lg:px-8 text-lg border-2 border-black dark:border-gray-500 text-[#4285F4] rounded-lg">
            Open Position
          </button>
        </div>
      </div>
      {/* Event Section */}
      <div className="flex justify-center relative -z-10 flex-col h-auto lg:h-[80vh]">
        <div className="flex gap-4 flex-row items-center justify-center">
          <h3 className="text-5xl font-semibold text-center justify-center text-black dark:text-gray-500">
            Events
          </h3>
          <div className="lg:h-40 w-40 lg:block hidden bg-yellow-500 rounded-full absolute lg:left-[410px] -z-10 border-black border-2"></div>
          <Image
            src={Triangle}
            alt="Triangle"
            className="absolute lg:block hidden right-5 -bottom-0 -z-0"
          />
          <Image
            src={SquareGray}
            alt="Triangle"
            className="absolute left-5 -bottom-0 -z-10"
          />
        </div>
        <EventCarousel></EventCarousel>
      </div>

      {/* About Section */}
      <div className="grid sm:grid-cols-2 gap-5 w-11/12 m-auto">
        <div className="w-full h-auto flex justify-center items-center">
          <p className="lg:w-4/5 text-lg lg:text-2xl text-justify text-black dark:text-gray-500">
            At BIET on campus GDG we are creating a dynamic, ever-growing
            community of tech enthusiasts who are passionate about{" "}
            <strong className="text-[#34A853]">technology</strong>,{" "}
            <strong className="text-[#4285F4]">development</strong>, and the{" "}
            <strong className="text-[#EA4335]">joy</strong> of continuous
            learning.{" "}
          </p>
        </div>
        <div className="w-full h-auto">
          <Image src={Group} alt="GDG-group-illustration" />
        </div>
      </div>
      <div className="m-auto lg:mt-32 mt-10 sm:w-4/6 flex justify-center flex-col text-[#656C73]">
        <p className=" pl-10 text-xl font-semibold text-black dark:text-gray-500 lg:text-left text-center">
          We
        </p>
        <p className="lg:text-7xl md:text-5xl text-4xl text-center text-black dark:text-gray-500">
          <strong className="text-[#34A853] bg-green-200 dark:bg-opacity-0 md:rounded-2xl rounded-xl px-3 dark:px-0 mx-2">
            Learn
          </strong>
          ,
          <strong className="text-[#EA4335] dark:bg-opacity-0 dark:px-1 bg-red-200 rounded-xl px-3">
            Innovate
          </strong>{" "}
          &{" "}
          <strong className="text-[#4285F4] dark:bg-opacity-0 dark:px-0 bg-blue-200 rounded-xl px-3 mx-1">
            Create
          </strong>
        </p>
        <p className="text-center m-3 text-[#FBBC04] text-2xl font-base">
          while having fun.
        </p>
        <div>
          <Image
            src={arc}
            alt="arc"
            className="lg:right-28 right-0 hidden lg:block absolute h-16 lg:h-48 animate-spin duration-1000 ease-in-out repeat-infinite"
          />
        </div>
        <div className="">
          <Image
            src={hexagon}
            alt="arc"
            className=" sm:left-10 absolute h-24 lg:h-48 duration-1000 ease-in-out"
            //  Animation  need to trigger on scroll
          />
        </div>
      </div>

      {/* sponsors */}
      <div className="flex justify-center -z-10 flex-col sm:mt-36 mt-24">
        <h3 className="tracking-widest text-5xl font-semibold text-center relative z-10 text-black dark:text-gray-500">
          Sponsors
        </h3>
        <div className="w-full h-auto">
          <Sponsers2></Sponsers2>
        </div>
      </div>
      {/* Story*/}

      <div className="flex justify-center -z-10 flex-col h-[60vh] lg:h-[70vh] m-10 p-4">
        <h3 className="tracking-widest text-5xl font-semibold text-center relative z-10 text-black dark:text-gray-500">
          Stories
        </h3>
        <div className=" bg-blue-400 bg-opacity-60 backdrop-blur-xl p-10 lg:p-20 rounded-3xl mt-5 flex justify-center items-center">
          <Storycard></Storycard>
        </div>
      </div>

      {/* FAQs*/}
      <div className="flex justify-center -z-10 flex-col sm:mt-36 mt-24">
        <h3 className="tracking-widest text-5xl font-semibold text-center relative z-10 text-black dark:text-gray-500">
          FAQs
        </h3>
        <div className="w-full mt-5 flex justify-center">
          <div className="lg:m-20 p-4 bg-red-200 dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-lg lg:rounded-xl">
            <FAQs />
          </div>
        </div>
      </div>
    </div>
  );
}
