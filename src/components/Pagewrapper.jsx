import Head from "next/head";
const PageWrapper = ({ children, heading }) => {
  return (
    <>
      <div className="grow min-h-screen pb-9">
        <div className="px-10 w-full border-black/[12] border-b ">
          <div className="w-fit relative pb-2 pt-8">
            <h1 className="text-2xl font-semibold ">{heading}</h1>
            <div className="absolute bottom-0 w-full h-[5px] rounded-full bg-darkerBlue"></div>
          </div>
        </div>
        <div className="px-10 pt-12">
          <Head>
            <title>{heading} | Sangathan</title>
          </Head>
          {children}
        </div>
      </div>
    </>
  );
};

export default PageWrapper;
