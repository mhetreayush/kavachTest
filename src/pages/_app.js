import LoginWrapper from "@/components/LoginWrapper";
import PageWrapper from "@/components/Pagewrapper";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.onoffline = () => {
      alert("You are offline");
    };
  }, []);
  return (
    <>
      <LoginWrapper>
        <Component {...pageProps} />
      </LoginWrapper>
    </>
  );
}
