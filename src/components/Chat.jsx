import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
const Chat = () => {
  const [isChatLoaded, setIsChatLoaded] = useState(true);
  const [newMsg, setNewMsg] = useState("");
  const [isStep1Completed, setIsStep1Completed] = useState(false);
  const uid = "user1";
  //   const chats = [
  //     {
  //       from: {
  //         uid: "user1",
  //         name: "John",
  //       },
  //       text: "Hello!",
  //     },
  //     {
  //       from: {
  //         uid: "user2",
  //         name: "John",
  //       },
  //       text: "Hello!",
  //     },
  //     {
  //       from: {
  //         uid: "user1",
  //         name: "John",
  //       },
  //       text: "Hello!",
  //     },
  //     {
  //       from: {
  //         uid: "user2",
  //         name: "John",
  //       },
  //       text: "Hello!",
  //     },
  //     {
  //       from: {
  //         uid: "user1",
  //         name: "John",
  //       },
  //       text: "Hello!",
  //     },
  //     {
  //       from: {
  //         uid: "user2",
  //         name: "John",
  //       },
  //       text: "Hello!",
  //     },
  //     {
  //       from: {
  //         uid: "user1",
  //         name: "John",
  //       },
  //       text: "Hello!",
  //     },
  //     {
  //       from: {
  //         uid: "user2",
  //         name: "John",
  //       },
  //       text: "Hello!",
  //     },
  //     {
  //       from: {
  //         uid: "user1",
  //         name: "John",
  //       },
  //       text: "Hello!",
  //     },
  //     {
  //       from: {
  //         uid: "user2",
  //         name: "John",
  //       },
  //       text: "Hello!",
  //     },
  //     {
  //       from: {
  //         uid: "user1",
  //         name: "John",
  //       },
  //       text: "Hello!",
  //     },
  //     {
  //       from: {
  //         uid: "user2",
  //         name: "John",
  //       },
  //       text: "Hello!",
  //     },
  //   ];
  const chats = [];
  return (
    <div className="h-[80vh] md:h-[600px] border rounded-lg overflow-y-auto w-full flex flex-col justify-between ">
      <div className="sticky top-0 pl-2 py-2 border-b border-black bg-primaryYellow bg-white flex gap-x-3">
        <button>
          <IoArrowBackSharp />
        </button>
        <h1 className="flex items-center text-lg gap-x-4">
          Name <span>.</span>{" "}
          <span className="text-sm font-extralight">ID </span>
        </h1>
      </div>
      <div className="flex flex-col gap-y-2 w-full pr-10 px-4  py-3 flex-grow bg-[#EDF1FF]">
        {chats?.length > 0 &&
          chats?.map((chat, idx) => {
            return (
              <div
                key={idx}
                className={`w-full max-w-1/4 flex break-all p-2 flex-col ${
                  chat?.from?.uid === uid && "items-end"
                }`}
              >
                <p className={`w-fit  bg-white rounded-lg p-2`}>{chat?.text}</p>
              </div>
            );
          })}
        {isChatLoaded && (chats?.length === 0 || !chats) && (
          <div className=" flex flex-col gap-y-3 items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/noChat.svg" alt="no chat" />
            <h1 className="text-textHeading text-2xl font-bold">
              Nothing here
            </h1>
            <h1 className="text-primaryOrange font-semibold">
              There&apos;s no chat in your feed
            </h1>
          </div>
        )}
      </div>

      <div className="flex sticky bottom-0 z-[100] bg-[#EDF1FF] w-full pt-2">
        <div className="  mx-2 mb-2 w-full">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Write a message..."
              value={newMsg}
              className="flex-grow outline-none bg-white py-2 border pl-2 rounded-l-lg"
              onChange={(e) => setNewMsg(e.target.value)}
            />
            <button
              disabled={!newMsg}
              className="bg-primaryOrange px-2 rounded-r-lg min-h-max disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <IoSendSharp className="text-white text-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
