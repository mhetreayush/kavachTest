import LoginWrapper from "@/components/LoginWrapper";
import PageWrapper from "@/components/Pagewrapper";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LoginWrapper>
        <Component {...pageProps} />
      </LoginWrapper>
    </>
  );
}
