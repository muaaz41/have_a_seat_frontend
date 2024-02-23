import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import Loader from "@/components/Loader";

import LinkPageDialogue from "../linkPageDialogue";

const MainLinkingPage = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const storageToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const localToken = localStorage.getItem("accessToken");
    if (localToken) {
      fetchUserInfo(localToken);
    }
  }, [storageToken]);

  const fetchUserInfo = async (localToken) => {
    // console.log(localToken , "token")
    setLoading(true);
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
        setLoading(false);
      } else {
        console.error(
          "Error fetching user data. Non-200 status code:",
          response.status
        );
        setLoading(false);
        console.error(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error occurred while fetching:", error);
      setLoading(false);
    }
  };

  // console.log(user)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="md:ml-36 lg:ml-36">
          <div className="grid grid-cols-7 md:gap-7   lg:gap-7">
            <div className=" md:col-span-2 ml-4 -mr-8 md:-ml-20  mt-32  sm:ml-28 -sm:mr-24 lg:col-span-2 sm:col-span-5 col-span-6">
              <div className=" bg-white shadow-lg rounded-lg card">
                <div className="card-body">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle mt-8"
                      width="150"
                    />
                    <div className="mt-3 mb-4">
                      <h4 className="text-lg">
                        {user?.first_name || "N/A"} {user?.last_name || "N/A"}
                      </h4>
                      <div>
                        <div className="flex items-center">
                          <div className="w-full text-center">
                            <LinkPageDialogue />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 lg:col-span-4 mx-2 sm:ml-24 sm:-mr-24 mb-52 sm:col-span-5 col-span-7 mt-32">
              <div className="bg-white shadow-lg rounded-lg px-6 pt-12 pb-8">
                <div className="mb-4">
                  <div className="flex items-center">
                    <div className="w-1/3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="w-2/3">
                      {user?.first_name || "N/A"} {user?.last_name || "N/A"}
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="mb-4">
                  <div className="flex items-center">
                    <div className="w-1/3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="w-2/3 ">{user?.email || "N/A"}</div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="mb-4">
                  <div className="flex items-center">
                    <div className="w-1/3">
                      <h6 className="mb-0">Password</h6>
                    </div>
                    <div className="w-2/3">**********</div>
                  </div>
                </div>
                <div className="flex justify-center items-center mx-auto mt-9">
                  <Button className="bg-purple-600">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainLinkingPage;
