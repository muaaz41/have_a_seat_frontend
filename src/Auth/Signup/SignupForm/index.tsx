import React, { useReducer } from "react";
import axios from "axios";

interface State {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

type Action =
  | { type: "SET_FIRST_NAME"; payload: string }
  | { type: "SET_LAST_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_PHONE_NUMBER"; payload: string }
  | { type: "RESET_FIELDS" };

const initialState: State = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_PHONE_NUMBER":
      return { ...state, phoneNumber: action.payload };
    case "RESET_FIELDS":
      return {
        ...state,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
      };
    default:
      return state;
  }
};

const SignupForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { firstName, lastName, email, password, phoneNumber } = state;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://tagsolutionsltd.com/auth/register/",
        {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          phone_number: phoneNumber,
        }
      );

      if (response.status === 200) {
        dispatch({ type: "RESET_FIELDS" });
        console.log("Account created successfully!");
      } else {
        console.error("signup failed");
      }
    } catch (error) {
      console.error("Error occurred while signing up:", error);
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
                onChange={(e) =>
                  dispatch({ type: "SET_FIRST_NAME", payload: e.target.value })
                }
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
                onChange={(e) =>
                  dispatch({ type: "SET_LAST_NAME", payload: e.target.value })
                }
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
                onChange={(e) =>
                  dispatch({ type: "SET_EMAIL", payload: e.target.value })
                }
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
                onChange={(e) =>
                  dispatch({ type: "SET_PASSWORD", payload: e.target.value })
                }
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
                onChange={(e) =>
                  dispatch({
                    type: "SET_PHONE_NUMBER",
                    payload: e.target.value,
                  })
                }
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
        </form>
      </div>
    </div>
  );
};

export default SignupForm;