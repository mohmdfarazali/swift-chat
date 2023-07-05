import { UserProvider } from "@/context/authContext";
import "@/styles/globals.css";
import { ChatContextProvider } from "@/context/chatContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ChatContextProvider>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ChatContextProvider>
    </UserProvider>
  );
}
