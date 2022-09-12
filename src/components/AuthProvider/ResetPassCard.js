import React from 'react'

const ResetPassCard = ({valueEmail, onChange}) => {
  return (
    <input
          id="email"
          name="email"
          type="email"
          value={valueEmail}
          onChange={onChange}
          className={`xl:w-72 lg:w-72 w-56 h-7 pl-2 bg-white border-2 rounded-sm text-lg z-12 focus:outline-none`}
        />
  )
}

export default ResetPassCard