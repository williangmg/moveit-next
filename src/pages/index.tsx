import Head from "next/head";
import { GetServerSideProps } from "next";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home(v ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it com Next</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level,
      currentExperience,
      challengesCompleted,
    },
  };
};
