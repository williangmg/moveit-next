import "../styles/global.css";
import {ChallengesProvider} from "../contexts/ChallengesContext";
import { useState } from "react";

function App({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
}

export default App;
