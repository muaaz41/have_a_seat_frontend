import { Link} from "react-router-dom";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import axios from "axios";

import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { useAuth } from "@/contexts/authContext/AuthProvider";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SideNav = () => {
  const { logout } = useAuth();
  const [user, setUser] = useState();
  const storageToken = localStorage.getItem("accessToken");

  useEffect(() => {
    (async () => {
      const localToken = localStorage.getItem("accessToken");
      if (localToken) {
        await fetchUserInfo(localToken);
      }
    })();
  }, [storageToken]);

  const fetchUserInfo = async (localToken) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localToken}`,
        },
      };
      const response = await axios.get(
        "https://tagsolutionsltd.com/api/v1/users/me",
        config
      );
      if (response.status === 200) {
        console.log(response.data, "fetching id");
        setUser(response.data);
      } else {
        console.error(
          "Error fetching user data. Non-200 status code:",
          response.status
        );
        console.error(response.data);
      }
    } catch (error) {
      // console.error("Error occurred while fetching user id:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error("Error occurred while logging out:", error);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>User Authentication</SheetTitle>
          <SheetDescription>{/* Login or Signup here  */}</SheetDescription>
        </SheetHeader>
        <div className=" justify-center text-center align-middle items-center w-full">
          <div>
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="Admin"
              className="rounded-circle ml-8 mt-8"
              width="150"
            />
          </div>
          <div className="relative">
            {user === undefined || user === null ? (
              <div className="fle mt-8">
                <ul className="flex ">
                  <li className="p-2">
                    <Button
                      className={cn("rounded-full ml-2")}
                      variant="outline"
                      asChild
                    >
                      <Link to="/login">Login</Link>
                    </Button>
                  </li>
                  <hr className="border-gray-200" />
                  <li className="p-2">
                    <Button className={cn("rounded-full")} asChild>
                      <Link to="/register">Register</Link>
                    </Button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex space-x-2">
                <div className="">
                  <ul>
                    <li className="p-4 mt-2 decoration-solid text-purple-600 text-sm">
                      {user && user.email}
                    </li>
                  </ul>
                  <ul className="flex ml-8">
                    <li className="p-1">
                      <Button
                        className={cn("rounded-full bg-purple-600 ")}
                        asChild
                        onClick={handleLogout}
                      >
                        <Link to="/">Logout</Link>
                      </Button>
                    </li>
                    <li>
                      <div className="relative w-[40px] h-[40px] mt-1 bg-purple-600 rounded-full p-2">
                        <Link to="account-links">
                          <User className="cursor-pointer text-white w-6 h-6" />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            {/* <Button type="submit">Save changes</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;