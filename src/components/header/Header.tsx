'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full min-h-[70px] bg-white border-b border-[#1daa99] relative flex items-center justify-center p-[20px] py-[15px]">
      <Image src="https://i.imgur.com/bRLrOiF.png" width={190} height={27} className="w-[190px] h-[27px]" alt="logo" />
    </div>
  );
}
