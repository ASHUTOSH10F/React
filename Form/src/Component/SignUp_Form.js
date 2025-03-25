import React from "react";
import { useState } from "react";
export default function SignUp_Form() {
  const [action, setaction] = useState("LogIn");
  return (
    <>
      <h1 className="Main-Heading">{action}</h1>
      <div className="container form-box">
        <form action="#">
          <div className="mb-3 mt-3">
            <label for="Name" className="form-label">
              Name:
            </label>
            <input
              type="Text"
              className="form-control form-control-sm"
              id="Name"
              placeholder="Enter Name"
              name="Name"
            />
          </div>
          <div className="mb-3">
            <label for="Email" className="form-label">
              Email:
            </label>
            <input
              type="Email"
              className="form-control form-control-sm"
              id="Email"
              placeholder="Enter Email"
              name="Email"
            />
          </div>
          <div className="mb-3">
            <label for="Mobile_No" className="form-label">
              Mobile_No:
            </label>
            <input
              type="tel"
              className="form-control form-control-sm"
              id="Mobile_No"
              placeholder="Mobile Number"
              name="Mobile_No"
            />
          </div>
          <div className="mb-3">
            <label for="Password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control form-control-sm"
              id="Password"
              placeholder="Password"
              name="Password"
            />
          </div>
          <div class="row">
            <div class="col">
              <button
                type="button"
                className={`${
                  action === "LogIn" ? "Submit gray" : "Submit"
                } first-button`}
                onClick={() => setaction("SignUP")}
              >
                SUBMIT
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                className={action === "Sign Up" ? "Submit gray" : "Submit"}
                onClick={() => setaction("LogIn")}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
      <Image />
    </>
  );
}


const User =
{
  Name: "Rahul",
  url:"https://images.unsplash.com/photo-1742850541164-8eb59ecb3282?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8https://www.google.com",
  size: 150,
}

const{Name,url,size}=User;



function Image() {
  return (
    <>
    <h1>{Name}</h1>
    <img src={url} alt="Image" style={{width:size, height:size}} />
    </>
  )
}

