// ourdomain.com
// import Layout from '../components/layout/Layout.js'
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import ProjectCard from "../../components/project/ProjectCard.js";


function ProjectListPage() {

  return (
    <>
      {/* <Layout> */}<div className="relative w-screen bg-white relative">
      <Navbar />
      <div className="flex flex-col items-center w-full bg-black text-white  pb-20">



        <ProjectCard img="/digialtar.png" vid="/digialtar.mp4" alt="digialtar" deployed="https://digialtar.netlify.app/" github="https://github.com/xicaz/digiAltar" />
        
        <ProjectCard img="/gjam.png" vid="/gjam.mp4" alt="gjam" deployed="https://gjam-app.netlify.app/" github="https://github.com/WAMS24/gjam-app" />
        
        <ProjectCard img="/thyme.png" vid="/thyme.mp4" alt="thyme" deployed="https://thyme-app.netlify.app/" github="https://github.com/xicaz/Thyme" />
        
        <ProjectCard img="/spiritgif.png" vid="/spiritgif.mp4" alt="spiritgif" deployed="https://spiritgif.surge.sh/" github="https://github.com/xicaz/Spirit-GIF" />
        

        </div>
        </div>
      {/* </Layout> */}
    </>
  );
}

export default ProjectListPage;
