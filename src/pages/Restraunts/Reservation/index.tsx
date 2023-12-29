import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ReservationForm from "./ReservationForm";
import PreviousData from "./PreviousData";
import axios from "axios";
import { Base_Url } from "@/baseUrl";

const Reservation = () => {
  const [formData, setFormData] = useState<any>();
  const [bookingInfo , setBookingInfo] = useState<any>()

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const data = params.get("data");

  useEffect(() => {
    let finalData: any = null;
    try {
      // console.log("Data received:", data);
      if (data !== null) {
        const decodedData = decodeURIComponent(data);
        // console.log("Decoded data:", decodedData);
        finalData = JSON.parse(decodedData);
        setFormData(finalData);
        console.log("Parsed data:", finalData);
      } else {
        console.error("Data parameter is null or undefined");
      }
    } catch (error) {
      console.error("Error parsing JSON or decoding URI:", error);
    }
  }, [data]);

  useEffect(() => {
    if (formData) {
      fetchBookingInfo();
    }
  }, [formData]);

  const fetchBookingInfo = async () => {
    const separator = formData[1]?.form_action;
    const parts = separator?.split("/");
    const alias = parts[2];
    const date = parts[4];
    const time = parts[5];
    const persons = parseInt(parts[6]);

    const bookingInfoParams = {
      csrf_token: formData[1].csrf_token,
      restaurant_alias: alias,
      date: date,
      time: time,
      persons: persons,
    };

    console.log(bookingInfoParams)

    try {
      const response = await axios.get(
        `${Base_Url}/api/v1/yelp/get_restaurant_booking_info`,
        {
          params: bookingInfoParams,
        }
      );

      if (response.status === 200) {
        console.log("Request successful");
        console.log("Response data:", response.data);
        setBookingInfo(response.data)
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching booking info:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-3/4 mt-12">
          <ReservationForm formData={formData} bookingInfo={bookingInfo} />
        </div>
        <div className="w-3/4  mt-28">
          <PreviousData formData={formData} />
        </div>
      </div>
    </>
  );
};

export default Reservation;
