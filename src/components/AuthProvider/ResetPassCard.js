/* eslint-disable react/prop-types */
import React from "react";

const ResetPassCard = ({ valueEmail, onChange }) => {
  return (
    <input
      id="email"
      name="email"
      type="email"
      value={valueEmail}
      onChange={onChange}
      className={`xl:w-72 lg:w-72 w-56 pl-2 py-1 border-[1px] rounded-2xl text-md focus:outline-none`}
    />
  );
};

export default ResetPassCard;
