import { useState } from "react";

import { useNavigate } from "react-router-dom";

const ReservationForm = ({ formData, bookingInfo }) => {
  const navigate = useNavigate();

  const [reservationFormData, setReservationFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const updatedNextData = {
      reservationFormData: reservationFormData,
      bookingInfo: bookingInfo,
      formData: formData,
    };
    const route = `/reservation-status?data=${encodeURIComponent(
      JSON.stringify(updatedNextData)
    )}`;
    navigate(route);
    console.log(updatedNextData);
    setReservationFormData({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="flex bg-white p-8 rounded shadow-md ">
      <div className=" w-full md:w-2/3 lg:w-2/3 community-service-hours-form">
        <h2 className="text-3xl font-bold text-center pb-8">
          Reservation Form
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <label
            htmlFor="first_name"
            className="text-sm font-medium text-gray-700"
          >
            First Name:
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            required
            className="w-full px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
            onChange={handleChange}
          />

          <label
            htmlFor="last_name"
            className="text-sm font-medium text-gray-700"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            required
            className="w-full px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
            onChange={handleChange}
          />

          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Number:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            className="w-full px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
            onChange={handleChange}
          />

          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
            onChange={handleChange}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex justify-center items-center px-4 py-2 text-base font-medium rounded-md text-white w-1/2 align-center bg-purple-600 hover:bg-purple-800"
              style={{ minWidth: "100px" }}
            >
              Make a Reservation
            </button>
          </div>
        </form>
      </div>
      <div className=" md:w-2/5 lg:w-2/5 hidden md:block lg:block md:px-24 lg:px-24 px-0">
        <img
          src="https://www.scaler.com/topics/stories/how-to-create-a-registration-form-in-html/assets/3.png"
          className="mt-32"
          width={"200px"}
          height={"300px"}
          alt=""
        />
      </div>
    </div>
  );
};

export default ReservationForm;