'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="bg-[#e4e4e3] h-screen relative">
      <Header />
      <div className="p-4 px-6">
        <div className="mx-auto rounded-xl w-full p-7">
          <div className="mb-5">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label htmlFor="User ID">User ID</label>
                <input
                  type="text"
                  value={username}
                  className="p-4 rounded-full text-[#5c5c5c] placeholder:text-gray-600 bg-white border-2 border-[#1daa99] outline-none"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  value={password}
                  className="p-4 rounded-full text-[#5c5c5c] placeholder:text-gray-600 bg-white border-2 border-[#1daa99] outline-none"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 mt-6">
              <button type="submit" className="p-4 py-3 bg-[#1daa99] w-full text-white font-semibold rounded-full">
                LOG IN
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 mt-10">
              <div className="flex items-center justify-center w-[80px] h-[80px] bg-black rounded-full">
                <Image src="https://i.imgur.com/I1LgzLa.png" width={45} height={29} alt="security" />
              </div>
              <span className="font-semibold text-lg">Security</span>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] absolute bottom-0 z-50 flex items-center justify-center px-6 p-[20px]">
        <p className="text-base text-[#22262A] flex flex-col gap-1 text-center">
          <span>Bank Audi sal Anti-Bribery and Corruption (ABC).</span> <span className="text-sm">List of Banks No 56 - BDLN: 26-07-01</span>
        </p>
      </div>
    </div>
  );
}
