'use client'
import Header from "./header";
import Activitys from "./components/activitys";
import HomePage from "./homePage";
import { useEffect, useState } from "react";
import Loader from "./Loader/Loader";
import Footer from "./footer";

export default function Home() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <div className=" w-full min-h-screen  h-full ">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <HomePage />
          <Activitys />
          <Footer />
        </>
      )}



    </div>
  );
}
