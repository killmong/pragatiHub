"use client";
import React from "react";
import Image from "next/image";
import Container from "@/common/componentns/Container";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between font-semibold text-sm leading-6 text-slate-200 bg-[#FF7F3E]">
      <Container>
        <div className="flex justify-between px-4">
          <div className="flex flex-row items-center space-x-2">
            <Image
              src="/images/Logo.png"
              width={30}
              height={30}
              alt="app logo"
              className="bg-current rounded-full"
            />
            <p
              className="mx-3 mt-1 text-base text-[#604CC3] cursor-pointer"
              onClick={() => router.push("/")}
            >
              pragatiHub
            </p>
          </div>
          <div className="flex justify-self-end">
            <button
              onClick={() => router.push("/auth/Login")}
              className="font-[system-ui] text-base px-4 py-2 rounded-xl border border-[#604CC3] text-[#604CC3] mx-2 hover:bg-blue-100"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/auth/Signup")}
              className="font-[system-ui] text-base px-4 py-2 rounded-xl border bg-[#604CC3] text-white mx-2 hover:bg-violet-600"
            >
              Signup
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
