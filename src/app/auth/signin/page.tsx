"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/lib/firebase/auth";
import { Button } from "@/components/ui";
import { PagePadding, Container } from "@/components/layout";

// Test user accounts for quick login
const TEST_USERS = [
  {
    name: "John Doe",
    email: "john.doe@test.com",
    password: "password123",
  },
  {
    name: "Michael Smith",
    email: "michael.smith@test.com",
    password: "password123",
  },
  {
    name: "David Johnson",
    email: "david.johnson@test.com",
    password: "password123",
  },
];

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signIn(email, password);
      router.push("/services");
    } catch (error: any) {
      setError(error.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const handleQuickLogin = async (testUser: (typeof TEST_USERS)[0]) => {
    setError("");
    setLoading(true);
    setEmail(testUser.email);
    setPassword(testUser.password);

    try {
      await signIn(testUser.email, testUser.password);
      router.push("/services");
    } catch (error: any) {
      setError(error.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Background Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="/images/Image-10.jpeg"
          alt="The Elevated Gentleman Fashion"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="text-white">
            <h2 className="text-2xl font-semibold font-sans mb-2">
              ELEVATE YOUR STYLE
            </h2>
            <p className="text-white/90 font-serif">
              Professional styling services for the modern gentleman
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <PagePadding>
          <Container size="small">
            <div className="flex flex-col items-center justify-center min-h-screen py-12">
              {/* Sign In Form */}
              <div className="w-full max-w-md">
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg lg:shadow-xl">
                  <h1 className="text-3xl font-semibold font-sans text-center mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-gray-600 font-serif text-center mb-8">
                    Sign in to access your styling services
                  </p>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm font-serif">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 font-serif mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent hover:border-gray-400 transition-all duration-200 ease-in-out font-serif"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 font-serif mb-2"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent hover:border-gray-400 transition-all duration-200 ease-in-out font-serif"
                        placeholder="Enter your password"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3"
                    >
                      {loading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>

                  {/* Quick Login Buttons */}
                  <div className="mt-6">
                    <div className="text-center mb-4">
                      <span className="text-sm text-gray-500 font-serif">
                        Quick Login (Test Accounts)
                      </span>
                    </div>
                    <div className="space-y-2">
                      {TEST_USERS.map((user, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickLogin(user)}
                          disabled={loading}
                          className="w-full px-4 py-2 text-sm bg-gray-50 hover:bg-black hover:text-white border border-gray-200 hover:border-black rounded-lg font-serif transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed hover:shadow-md"
                        >
                          Sign in as {user.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      href="/auth/forgot-password"
                      className="text-sm text-gray-600 hover:text-black font-serif"
                    >
                      Forgot your password?
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-600 font-serif">
                      Don&apos;t have an account?{" "}
                      <Link
                        href="/auth/signup"
                        className="text-black hover:underline font-medium"
                      >
                        Create Account
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500 font-serif">
                    Access your personalized styling services, appointments, and
                    order history.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </PagePadding>
      </div>
    </div>
  );
}
