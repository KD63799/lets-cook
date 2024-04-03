import React from 'react';
import LikeButton from './LikeButton/LikeButton';

export default function App() {
  return (
      <div className="mx-auto mb-3 xl:w-96 gap-10">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                  type="search"
                  className="relative m-0 block flex-auto rounded border border-solid border-red-400 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-red-900 focus:outline-none "
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2" />
              <span className="pl-2 pt-1">
              <LikeButton />
              </span>
          </div>
      </div>
  );
}