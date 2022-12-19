// ourdomain.com
import Navbar from "../../components/navbar/Navbar";
import ProjectCard from "../../components/project/ProjectCard.js";
import NextJsCarousel from "../../components/Carousel/index";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Modal from "../../components/Modal/Modal";
import Image from "next/dist/client/image";
import projectList from "../../projects/projects.json";

function ProjectListPage(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    img: "",
    video: "",
    date: "",
    lang: "",
    body: "",
    github: "",
    figma: "",
    site: "",
  });

  let projectCards = [];

  projectList.map((project) =>
    projectCards.push(
      <ProjectCard
        setModalOpen={setModalOpen}
        setModalData={setModalData}
        title={project.title}
        date={project.date}
        info={project.info}
        lang={project.lang}
        video={project.video}
        img={project.img}
        body={project.body}
        alt={project.alt}
        site={project.site}
        github={project.github}
        figma={project.figma ? project.figma : null}
      />
    )
  );

  return (
    <>
      <Layout>
        <div>
          <div
            className={
              " fixed top-0 left-0 z-20 mix-blend-exclusion text-white"
            }
          >
            <div
              style={{ fontSize: "10vw", padding: "7vh 3vw 0 " }}
              className=" pt-20 font-whyteinktrap flex flex-row "
            >
              portfolio
              <div style={{ padding: "3vw 4vw 0" }}>
                <p
                  style={{ fontSize: "3vw", padding: "2vw 2vw" }}
                  className="  border-2 flex justify-around bg-white text-black rounded-full whitespace-nowrap font-bold tracking-wider "
                >
                  creative developer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ zIndex: "100" }}
          onClick={() => {
            setModalOpen(false);
          }}
          className={
            !modalOpen
              ? "hidden w-screen h-screen fixed"
              : "w-screen h-screen fixed   "
          }
        >
          <div
            style={{ zIndex: "50" }}
            className={
              !modalOpen
                ? "hidden w-screen h-screen fixed"
                : "w-screen h-screen fixed bg-black opacity-80 filter blur-3xl"
            }
          ></div>
          <div
            style={{ top: "10vh", display: "flex" }}
            className={
              !modalOpen
                ? "hidden"
                : " fixed  w-screen h-screen bg-trp z-50 grid grid-cols-1 place-content-center"
            }
          >
            <div className="fixed  w-140  h-fit bg-white ">
              {!modalOpen ? null : <Modal modalData={modalData} />}
            </div>
          </div>
        </div>

        <div
          className=" relative grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-black content-center pt-60"
          style={{ padding: "21vw 3vw 0" }}
        >
          {projectCards}
          {/* WORKSAMPLE */}
        </div>
      </Layout>
    </>
  );
}

export default ProjectListPage;
