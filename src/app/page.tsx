import Image from "next/image";
import Header from "./header";
import Activitys from "./components/activitys";
import HomePage from "./homePage";


export default function Home() {
  return (
    <div className=" w-full min-h-screen  h-full ">
      <Header />
      <HomePage />
      <Activitys />

    </div>
  );
}
