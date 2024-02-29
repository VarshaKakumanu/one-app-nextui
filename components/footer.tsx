import React from "react";
import { WhiteLogo } from "./icons";

const Footer = () => {
  return (
    <div className='flex justify-around w-full p-6'>
      <div className='flex flex-col gap-2'>
        <p className='flex gap-1'>
          <WhiteLogo />
          OneApp Housing
        </p>
        <p className='text-xs font-extralight'>Copyright 2024 OneApp Housing</p>
      </div>
      <div className='text-xs font-extralight flex gap-2'>
        <p>privacy</p>
        <p>privacy</p>
        <p>privacy</p>
        <p>privacy</p>
      </div>
    </div>
  );
};

export default Footer;
