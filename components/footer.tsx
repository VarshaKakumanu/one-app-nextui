import React from "react";
import { WhiteLogo } from "./icons";

const Footer = () => {
  return (
    <div className='bg-black text-white flex justify-around w-full p-6'>
      <div className='flex flex-col gap-2'>
        <p className='flex gap-1'>
          <WhiteLogo />
          OneApp Housing
        </p>
        <p className='text-xs font-extralight'>
          Copyright 2024 @ OneApp Housing
        </p>
      </div>
      <div className='flex gap-4'>
          <a href="/privacy-policy" className='text-xs font-extralight'>Privacy Policy</a>
          <a href="/terms-conditions" className='text-xs font-extralight'>Terms & Conditions</a>
          <a href="/cookie-policy" className='text-xs font-extralight'>Cookie Policy</a>
          <a href="/contact" className='text-xs font-extralight'>Contact</a>
        </div>
    </div>
  );
};

export default Footer;
