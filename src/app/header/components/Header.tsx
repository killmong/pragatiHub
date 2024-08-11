"use client";
import React from "react";
import Image from "next/image";
import Container from "@/common/components/Container";
import { useRouter,usePathname } from "next/navigation";
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isLandingPage = pathname === "/" || pathname === "/home";
  return (
    <div className="flex items-center justify-between font-semibold text-sm leading-6 text-slate-200 bg-black">
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
              className="mx-3 mt-1 text-base text-[#FB773C] cursor-pointer"
              onClick={() => router.push("/")}
            >
              pragatiHub
            </p>
          </div>
          {isLandingPage && (
            <div className="flex justify-self-end">
              <Link
                href="/auth/login"
                className="font-[system-ui] text-base px-4 py-2 rounded-xl border border-[#604CC3] text-[#FB773C] mx-2 hover:bg-blue-100"
              >
                Login
              </Link>

              <Link
                href="/auth/signup"
                className="font-[system-ui] text-base px-4 py-2 rounded-xl border bg-[#FB773C] text-white mx-2 hover:bg-violet-600"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
