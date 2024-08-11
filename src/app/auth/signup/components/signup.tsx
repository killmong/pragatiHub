"use client";
import InputField from "@/common/components/InputField";
import Container from "@/common/components/Container";
import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  return (
    <div className="flex h-screen background items-center justify-center">
      <Container>
        <div className="flex flex-col md:flex-row bg-black border-2 rounded-xl border-gray-50 p-8 mx-4 w-full max-w-6xl">
          <form className=" w-full md:w-1/2 rounded-lg bg-black p-2">
            <p className="text-3xl py-2 font-[sans-serif] text-gray-500 font-semibold ">
              Create an account
            </p>
            <div className="flex flex-row mb-4">
              <Link
                href="/#"
                className="flex border border-gray-400 px-2 py-1 m-auto"
              >
                <FcGoogle size={20} />
                <span className="px-2 text-white">Signup with Google</span>{" "}
              </Link>
            </div>{" "}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <hr className="flex-1 border-t border-gray-300" />
              </div>
              <div className="relative text-center">
                <span className="bg-black text-white px-4">or</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <InputField
                type="text"
                name="name"
                label="full-name"
                placeholder="enter name "
              />
              <InputField
                type="text"
                name="username"
                label="username"
                placeholder="enter username "
              />
              <InputField
                type="text"
                name="email"
                label="email"
                placeholder="enter email "
              />
              <InputField
                type="password"
                name="password"
                label="password"
                placeholder="enter password"
              />
              <Link
                href="/home/feed"
                className="bg-violet-600 text-center px-4 rounded-xl py-2 text-white hover:animate-in w-full "
              >
                Create account
              </Link>

              <div className="flex justify-end">
                <p className="text-xs text-center">
                  Already have an account?
                  <Link href="/auth/login" className="text-[#FF7F3E]">
                    Signin Now
                  </Link>
                </p>
              </div>
            </div>
          </form>
          <div className="hidden md:block w-full md:w-1/2 p-5 border-2 border-gray-800 rounded-lg">
            <Image
              alt="login pic"
              width={500}
              height={250}
              src="/images/2990435.jpg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
