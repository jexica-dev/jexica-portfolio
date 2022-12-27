// ourdomain.com
import { useState } from "react";
import DevHeader from "../../components/DevHeader/DevHeader";
import Layout from "../../components/Layout/Layout";
import Modal from "../../components/Modal/Modal";
import ProjectCard from "../../components/project/ProjectCard.js";
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
        <DevHeader />

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
