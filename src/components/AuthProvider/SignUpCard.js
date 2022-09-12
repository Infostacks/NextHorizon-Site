import React from "react";

const SignUpCard = ({valueEmail, valuePass, valueConfPass, onChange}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="email" className="text-xs text-slate-500">
        Email:
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={valueEmail}
        onChange={onChange}
        className={`xl:w-72 lg:w-72 w-56 h-7 pl-2 border-2 rounded-sm text-md z-12 focus:outline-none`}
      />
      <label htmlFor="password" className="text-xs text-slate-500">
        Password:
      </label>
      <input
        id="password"
        name="password"
        type="password"
        value={valuePass}
        onChange={onChange}
        className={`xl:w-72 lg:w-72 w-56 h-7 pl-2 border-2 rounded-sm text-md z-12 focus:outline-none`}
      />
      <label className="text-xs text-slate-500">Confirm Password:</label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={valueConfPass}
        onChange={onChange}
        className={`xl:w-72 lg:w-72 w-56 h-7 pl-2 border-2 rounded-sm text-md z-12 focus:outline-none`}
      />
    </div>
  );
};

export default SignUpCard;
