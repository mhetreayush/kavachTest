import PageWrapper from "@/components/Pagewrapper";

const EventDetails = ({ eventid }) => {
  return (
    <PageWrapper heading={"Event Details"}>
      <div>
        <div>{eventid}</div>
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
