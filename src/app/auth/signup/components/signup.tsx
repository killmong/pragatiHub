'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Container from '@/common/components/Container';

function Signup() {
  const router = useRouter();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  // Handle form submission
  interface SignupFormData {
    name: string;
    username: string;
    email: string;
    password: string;
  }

  const onSubmit = async (data: SignupFormData): Promise<void> => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', data);
      console.log(response.data); // Log response data if needed
      router.push('/home'); // Navigate after successful signup
    } catch (error) {
      console.error(error); // Log error for debugging
    }
  };

  return (
    <div className="flex h-screen background items-center justify-center">
      <Container>
        <div className="flex flex-col md:flex-row bg-black border-2 rounded-xl border-gray-50 p-8 mx-4 w-full max-w-6xl">
          <form
            className="w-full md:w-1/2 rounded-lg bg-black p-2"
            onSubmit={handleSubmit(onSubmit)} // Connect form submission
          >
            <p className="text-3xl py-2 font-[sans-serif] text-gray-500 font-semibold">
              Create an account
            </p>
            <div className="flex flex-row mb-4">
              <Link
                href="/#"
                className="flex border border-gray-400 px-2 py-1 m-auto"
              >
                <FcGoogle size={20} />
                <span className="px-2 text-sm text-white">Signup with Google</span>
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

            {/* Input fields */}
            <div className="flex flex-col space-y-2">
              <div>
                <label className="text-white" htmlFor="name">full-name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 text-black"
                  placeholder="Enter name"
                  {...register('name', {
                    required: 'Full name is required',
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message as string}</p>
                )}
              </div>

              <div>
                <label className="text-white" htmlFor="username">username</label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-2 text-black"
                  placeholder="Enter username"
                  {...register('username', {
                    required: 'Username is required',
                  })}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">{typeof errors.username.message === 'string' ? errors.username.message : ''}</p>
                )}
              </div>

              <div>
                <label className="text-white" htmlFor="email">email</label>
                <input
                  type="text"
                  id="email"
                  className="w-full px-4 py-2 text-black"
                  placeholder="Enter email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{typeof errors.email.message === 'string' ? errors.email.message : ''}</p>
                )}
              </div>

              <div>
                <label className="text-white" htmlFor="password">password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 text-black"
                  placeholder="Enter password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{typeof errors.password.message === 'string' ? errors.password.message : ''}</p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="bg-[#FF7F3E] text-center px-4 rounded-xl py-2 text-white hover:animate-in w-full"
              >
                Create account
              </button>

              <div className="flex justify-end">
                <p className="text-xs text-center">
                  Already have an account?
                  <Link href="/auth/login" className="text-[#FF7F3E]">
                    Sign in Now
                  </Link>
                </p>
              </div>
            </div>
          </form>

          {/* Image section */}
          <div className="hidden md:block w-full md:w-1/2 p-5 border-2 border-gray-800 rounded-lg">
            <Image
              alt="signup pic"
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

export default Signup;
