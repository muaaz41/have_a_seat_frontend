import React, { useState } from "react";

import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import VerifyUserForm from "./VerifyUser/VerifyUserForm";

const SignupForm = () => {
  const { toast } = useToast();
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const currentDate = new Date();
      const date = currentDate.toString();
      const response = await axios.post(
        "https://tagsolutionsltd.com/api/v1/auth/request-verify-token",
        {
          email,
        }
      );
      if (response.status === 202) {
        console.log(response)
        toast({
          title: "Please Verify From your Email an Click on the link there ",
          description: date,
        });
      } else {
        console.log("reset failed");
        toast({
          title: "Error Occurred",
          description: date,
        });
      }
    } catch (error) {
      console.error("Error occurred while Signing in", error);
      toast({
        title: "Error Occurred",
        description: date,
      });
    }
  };



  return (
    <div className="w-full md:w-11/12 lg:w-full xl:w-11/12">
      <div className="md:w-5/6 lg:w-11/12 xl:w-5/6 order-2 md:order-1">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-8 md:mb-10">
          Sign up
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="flex-grow">
              <input
                type="text"
                id="first_name"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="flex-grow">
              <input
                type="text"
                id="last_name"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
            <div className="flex-grow">
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div className="flex-grow">
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div className="flex-grow">
              <input
                type="number"
                id="phone_number"
                className="border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="md:w-2/3 lg:w-1/2 sm:w-1 text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <a href="/login" className="underline">
              Click to login
            </a>
          </p>
          <div className="hidden">
            <VerifyUserForm />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
