import React from "react";
import { AsadCode } from "./Sections/Asad/AsadCode";
import { IsrarCode } from "./Sections/Israr/IsrarCode";
import { SaadCode } from "./Sections/Saad/SaadCode";
import { TaqiCode } from "./Sections/Taqi/TaqiCode";

const Home = () => {
  return (
    <>
      <AsadCode />
      <IsrarCode />
      <TaqiCode />
      <SaadCode />
    </>
  );
};

export default Home;
