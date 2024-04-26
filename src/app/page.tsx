"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = '/home';
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <main>
      <div className={` `}>
        <div className=" w-full bg-white shadow-md transform transition-transform duration-700 ease-in-out flex flex-col justify-center items-center ">
          {/* Sidebar content */}
          <div className=" h-screen p-3 flex flex-col justify-center items-center gap-16">
            <div className=" gap-6 flex flex-col justify-center items-center ">
              <Image
                src="/images/welcome.png"
                alt=""
                width={264}
                height={264}
                className=""
              />
              <div className="flex flex-col justify-center items-center text-center gap-4">
                <h1 className=" text-3xl font-bold text-black">
                  Welcome to Restro
                </h1>
                <p className=" text-lg  text-[#383838] text-center flex flex-col">
                  <span className="font-semibold">De Santos Hotel, Lagos</span>7
                  Shasha Rd, Akowonjo, Lagos 102213, Lagos
                </p>
              </div>
            </div>

            {/* Add your menu items here */}

            <div className="gap-4 flex flex-col items-center">
              <h2 className=" text-[#F36829] text-lg font-semibold flex justify-center text-center items-center">
                Ordering From 14b Fourth Floor Connecting Rooms
              </h2>
              <p className=" text-lg  text-[#383838] text-center flex pb-3 ">
                Order ID: <span className="font-semibold">DUQU28UHB</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </main>
  );
}
