'use client'
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Container from '@/common/components/Container';

function Login() {
  const router = useRouter();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data: any) => {
    try {
      // Make a POST request to your login route
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email: data.email,
        password: data.password,
      });

      // Handle successful login
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        router.push('/home'); // Navigate after successful login
      } else {
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error during login:', error.response?.data || error.message);
      } else {
        const errorMessage = (error as Error).message;
        console.error('Error during login:', errorMessage);
      }
    }
  };
  return (
    <div className="flex h-screen background items-center justify-center">
      <Container>
        <div className="flex flex-col md:flex-row bg-black border-2 rounded-xl border-gray-50 p-8 mx-4 w-full max-w-6xl">
          {/* Form section */}
          <form
            className="w-full md:w-1/2 rounded-lg bg-black p-6"
            onSubmit={handleSubmit(onSubmit)} // Attach form submission handler
          >
            <p className="text-3xl py-2 font-[sans-serif] text-[#F05D23] font-semibold text-center">
              Welcome Back!
            </p>
            <div className="flex flex-row mb-4">
              <Link
                href="/#"
                className="flex border border-gray-400 px-2 py-1 m-auto"
              >
                <FcGoogle size={20} />
                <span className="px-2 text-sm text-white">
                  Sign in with Google
                </span>{' '}
              </Link>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <hr className="flex-1 border-t border-gray-300" />
              </div>
              <div className="relative text-center">
                <span className="bg-black text-white px-4">or</span>
              </div>
            </div>

            {/* Input fields */}
            <div className="flex flex-col space-y-4">
              <div>
                <label className="text-white" htmlFor="email">
                  email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full px-4 py-2 text-black"
                  placeholder="enter email/username"
                  {...register('email', { required: 'Email is required' })} // Register email input
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email?.message as string}</p>
                )}
              </div>

              <div>
                <label className="text-white" htmlFor="password">
                  password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 text-black"
                  placeholder="enter password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })} // Register password input
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password?.message as string}</p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="bg-[#F05D23] px-4 py-2 text-center text-white hover:animate-in w-full lg:rounded"
              >
                Login
              </button>
              <Link href="/#" className="text-sm text-white underline">
                Forgot your password?
              </Link>

              <div className="flex justify-end">
                <p className="text-xs text-center">
                  Don&apos;t have an account?
                  <Link href="/auth/signup" className="text-[#FF7F3E]">
                    Signup Now
                  </Link>
                </p>
              </div>
            </div>
          </form>

          {/* Image section */}
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
