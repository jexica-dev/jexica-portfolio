// import Image from "next/image";
// import Marquee from "react-fast-marquee";
// import About from "../components/About/About.js";
// import Homebutton from "../components/homebutton/homebutton.js";
// import ThreejsModel from "../components/Threejs/ThreejsModel.js";
// import styles from "../styles/Home.module.css";

import GlassButton from "../components/Buttons/GlassButton";
import SkillButtons from "../components/Buttons/SkillButton";
import Layout from "../components/Layout/Layout";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <SafeHydrate>
        <div className=" cursor-star">
          <Layout>
            <GlassButton />
            <SkillButtons />
          </Layout>
        </div>
      </SafeHydrate>
    </>
  );
}

export default HomePage;
