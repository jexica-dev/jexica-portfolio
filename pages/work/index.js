// ourdomain.com
// import Layout from '../components/layout/Layout.js'
import { useRouter } from "next/dist/client/router";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import Image from "next/image";
import ProjectCard from "../../components/project/ProjectCard.js";

function ProjectListPage() {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      {/* <Layout> */}
      <Navbar />
      <div className="flex flex-col items-center w-full ">


        <ProjectCard img="/thyme.png" vid="/thyme.mp4" alt="thyme" />
        <ProjectCard img="/digialtar.png" vid="/digialtar.mp4" alt="digialtar"/>
        <ProjectCard img="/gjam.png" vid="/gjam.mp4" alt="gjam"/>
        <ProjectCard img="/spiritgif.png" vid="/spiritgif.mp4" alt="spiritgif" />
        

      </div>
      {/* </Layout> */}
    </>
  );
}

export default ProjectListPage;
