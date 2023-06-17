import EventCard from "@/components/EventCard";
import PageWrapper from "@/components/Pagewrapper";
import { Fade } from "react-reveal";

const Home = () => {
  const sampleData = {
    name: "Sangathan",
    time: {
      date: "12/12/2021",
      startTime: "12:00",
      endTime: "13:00",
    },
    address: "B-12, Sector 12, Noida",
    officials: 12,
    status: "upcoming",
  };
  return (
    <PageWrapper heading={"Home"}>
      <div className="grid grid-cols-2 gap-4">
        {Array(10)
          .fill(sampleData)
          .map((data, index) => {
            return (
              <Fade right key={index}>
                <EventCard {...data} id={index} />
              </Fade>
            );
          })}
      </div>
    </PageWrapper>
  );
};

export default Home;
