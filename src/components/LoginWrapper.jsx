import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
const LoginWrapper = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const pageMap = [
    {
      name: "Home",
      path: "/home",
      icon: <AiOutlineHome />,
      heading: "Scheduled events",
    },
    {
      name: "History",
      path: "/history",
      icon: <BiHistory />,
      heading: "Past events",
    },
    {
      name: "Create event",
      path: "/createEvent",
      icon: <AiOutlinePlus />,
      heading: "Create event",
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <IoIosNotificationsOutline />,
      heading: "Notifications",
    },
  ];
  return (
    <>
      <div className="min-h-screen flex w-full relative">
        {/*------------------------ Sidebar starts Here ---------------------------*/}
        <div className="bg-primaryBlue p-4 flex flex-col gap-y-4 sticky top-0 h-screen pt-8 z-50">
          <button
            className={`absolute top-8 -right-4 z-[100] p-2  rounded-full bg-darkerBlue text-white transition-all duration-500 ease-linear ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            <FaAngleRight />
          </button>
          <h1 className="text-white">{isExpanded ? "Sangathan" : "S"}</h1>
          {pageMap.map((page, index) => {
            return (
              <Link
                onClick={() => {
                  setCurrentPage(index);
                  if (page.path == "/createEvent") setIsExpanded(false);
                }}
                href={page.path}
                key={index}
                className="flex w-full"
              >
                <p
                  className={`flex items-center p-2 text-white hover:bg-white/[22%]  rounded-md ${
                    pageMap.indexOf(page) == currentPage && "bg-white/[22%]"
                  } transition-all duration-1000
                  whitespace-nowrap pr-8 overflow-hidden ease-linear  w-full
                    ${isExpanded ? "max-w-[100vw] " : "max-w-[26px]"}
                    `}
                >
                  <span className="text-[26px]">{page.icon}</span>
                  <span className="ml-4 min-w-max">{page.name}</span>
                </p>
              </Link>
            );
          })}
        </div>
        {/*------------------------ Sidebar ends Here ---------------------------*/}
        {children}
      </div>
    </>
  );
};

export default LoginWrapper;
