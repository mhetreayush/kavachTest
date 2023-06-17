import Link from "next/link";

const EventCard = ({ name, time, address, officials, id, status }) => {
  const { date, startTime, endTime } = time;
  return (
    <>
      <div
        className="flex flex-col gap-y-2 px-6 py-4 rounded-md  "
        style={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="flex w-full justify-between">
          <h1>
            <span className="text-2xl font-semibold">{name}</span> . {date}
          </h1>
          {status != "past" && (
            <h1 className="text-darkerBlue first-letter:capitalize">
              {status}
            </h1>
          )}
        </div>
        <h2 className="font-semibold text-lg ">
          {startTime} - {endTime}
        </h2>
        <h2>{address}</h2>
        <h2>
          <span className="opacity-60">No. of officials:</span> {officials}
        </h2>
        <Link
          href={`/event/${id}`}
          className="decoration underline text-sm underline-offset-2"
        >
          View details
        </Link>
        {status === "upcoming" && (
          <button className="mt-2 bg-primaryOrange py-3 px-6 rounded-lg text-white w-fit">
            Start Event
          </button>
        )}
      </div>
    </>
  );
};

export default EventCard;
