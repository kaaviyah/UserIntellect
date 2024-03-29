// import React,{useState}from "react";
import "./InputDisplay.css";

function InputDisplay({ handleChange, formInputData, handleSubmit,error,success }) {
  return (
    <div>
      <div className="container">
        
       <div className="pageone-input">
       
       
          <input
            type="text"
            name="name"
            value={formInputData.name || ""}
            placeholder="Name"
            onChange={handleChange}
          />
          
          <input
            type="tel"
            name="password"
            value={formInputData.password || ""}
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            value={formInputData.country || ""}
            placeholder="Country"
            onChange={handleChange}
          />
        </div>
        <div className="btn1">
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
      <div className="error">
      {error.length > 0 && (
            <div
              style={{
                marginBottom: "10px",
                marginLeft: "40px",
                marginTop: "20px",
                color: "red",
              }}
            >
              {error}
            </div>
          )}
          {success.length > 0 && (
            <div
              style={{
                marginBottom: "10px",
                marginLeft: "40px",
                marginTop: "20px",
                color: "green",
              }}
            >
              {success}
            </div>
          )}
    </div>
   
    </div>
  );
}
export default InputDisplay;
