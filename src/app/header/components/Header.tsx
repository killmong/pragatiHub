"use client";
import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@/common/components/Container";
import Image from "next/image"; // Import Image for the icon
import { IoMdHome } from "react-icons/io"; // Import Home icon
import { FaSearch, FaPaperPlane } from "react-icons/fa"; // Import Search and PaperPlane icons
import { MdGroup } from "react-icons/md"; // Import Group icon
import { IoMdNotifications } from "react-icons/io"; // Import Notifications icon

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const isHomePage = pathname === "/home";
  const iconSize = 24; // Define a consistent icon size

  return (
    <header className="bg-gray-800 p-4">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/applogo.png"
              alt="Icon"
              width={32}
              height={32}
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
        </nav>
      </Container>
    </header>
  );
};

export default Header;
