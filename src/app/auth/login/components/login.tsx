'use client'
import InputField from "@/common/components/InputField";
import Container from "@/common/components/Container";
import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter()
  return (
    <div className="flex h-screen background items-center justify-center">
      <Container>
        <div className="flex flex-col md:flex-row bg-black border-2 rounded-xl border-gray-50 p-8 mx-4 w-full max-w-6xl">
          <form className=" w-full md:w-1/2 rounded-lg bg-black  p-6">

          <p className="text-3xl py-2 font-[sans-serif] text-[#F05D23] font-semibold text-center">Welcome Back!</p>
             <div className="flex flex-row mb-4">
              <Link
                href="/#"
                className="flex border border-gray-400 px-2 py-1 m-auto"
              >
                <FcGoogle size={20} />
                <span className="px-2 text-sm text-white">Signin with Google</span>{" "}
              </Link>
            </div>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <hr className="flex-1 border-t border-gray-300" />
              </div>
              <div className="relative text-center">
                <span className="bg-black text-white px-4">or</span>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <InputField
                type="text"
                name="email"
                label="email"
                placeholder="enter email/username "
              />
              <InputField
                type="password"
                name="password"
                label="password"
                placeholder="enter password"
              />
            <Link href="/home" className="bg-[#F05D23] px-4 py-2 text-center text-white hover:animate-in w-full lg:rounded">
                Login
              </Link>
              <Link href="/#" className="text-sm text-white underline ">Forgot your password</Link>
             
             <div className="flex justify-end">
             <p className="text-xs text-center">{`Don't`} have an account?<Link href="/auth/signup" className="text-[#FF7F3E]">Signup Now</Link></p>
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
