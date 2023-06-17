import LoginWrapper from "@/components/LoginWrapper";
import PageWrapper from "@/components/Pagewrapper";
import useOfflineAlert from "@/hooks/useOfflineAlert";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useOfflineAlert();
  return (
    <>
      <LoginWrapper>
        <Component {...pageProps} />
      </LoginWrapper>
    </>
  );
}
