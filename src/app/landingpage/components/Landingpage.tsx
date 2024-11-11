import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/common/components/Container";
import { GlobeDemo } from "./GlobeDemo";
import TextGradient from "@/common/components/TextGradient";

const Landingpage = () => {
  return (
    <div className="flex flex-col bg-black  max-md:py-12 max-md:pr-5">
      <Container>
        <div className="w-full max-w-[1328px] max-md:max-w-full">
          <div className="flex justify-between max-md:flex-col">
            <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full  max-md:max-w-full">
                <div className="mx-6 my-24 text-2xl">
                  <TextGradient
                    className="text-4xl font-bold animate-pulse  text-[#F7F7F2] dark:text-white"
                    text="Welcome to PragatiHub - Your Gateway to Knowledge and Community!"
                  />
                 </div>
                <div className="mt-10 text-3xl font-semibold leading-10 text-black text-opacity-50 max-md:mt-10 max-md:max-w-full"></div>
              </div>
            </div>
            <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">
              <Image
                alt="Main picture"
                src="/images/2990435.jpg"
                objectFit="cover"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <GlobeDemo />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Landingpage;
