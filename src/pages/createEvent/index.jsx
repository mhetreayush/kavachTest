import PageWrapper from "@/components/Pagewrapper";
import Step1 from "@/components/createEventSteps/Step1";
import Step2 from "@/components/createEventSteps/Step2";
import Step3 from "@/components/createEventSteps/Step3";

const CreateEvent = () => {
  return (
    <PageWrapper heading={"Create Event"}>
      <Step1 />
      <Step2 />
      <Step3 />
    </PageWrapper>
  );
};

export default CreateEvent;
