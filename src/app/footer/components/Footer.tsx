'use client'
import React from "react";
import Container from "@/common/components/Container";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/" || pathname === "/home";

  return (
    <>
      {isLandingPage && (
        <div className="bg-slate-900">
          <Container>
            <div className="mx-auto max-w-screen-xl px-4 md:items-center md:justify-center">
              <span className="text-sm text-gray-500 text-center dark:text-gray-400">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  pragatiHub
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Footer;
