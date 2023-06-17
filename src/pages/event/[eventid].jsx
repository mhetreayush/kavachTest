import Chat from "@/components/Chat";
import PageWrapper from "@/components/Pagewrapper";

const EventDetails = ({ eventid }) => {
  return (
    <PageWrapper heading={`Project ${eventid}`}>
      <div className="grid grid-cols-12 gap-x-4">
        <div className="col-span-9">
          <div className="flex w-full h-full items-center justify-center text-9xl border">
            Map
          </div>
        </div>
        <div className="col-span-3">
          <Chat />
        </div>
      </div>
    </PageWrapper>
  );
};

export async function getServerSideProps(context) {
  const { eventid } = context.params;
  return {
    props: {
      eventid,
    },
  };
}

export default EventDetails;
