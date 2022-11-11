// ourdomain.com
import Navbar from "../../components/navbar/Navbar";
import ProjectCard from "../../components/project/ProjectCard.js";
import NextJsCarousel from "../../components/Carousel/index";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Modal from "../../components/Modal/Modal";
import Image from "next/dist/client/image";

function ProjectListPage(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    img: "/thyme.png",
    video: "/thyme.mp4",
    date: "",
    lang: "",
    body: "",
    github: "",
    figma: "",
    site: "",
  });

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
          className=" relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-black content-center pt-60"
          style={{ padding: "21vw 3vw 0" }}
        >
          <ProjectCard
            setModalOpen={setModalOpen}
            setModalData={setModalData}
            lang="HTML, CSS, JavaScript, ReactJS, Tailwind CSS, Ruby, Ruby on Rails"
            title="digi-Altar"
            date="10-2021"
            info="full-stack web app for creating cyber art-shrine collages, using RoR and React.js"
            body="digi-Altar is a cyber spiritual space, where you can create, share, and inspire your own altar using a hybrid mix of relics and artifacts."
            img="/digialtar.png"
            video="/digialtar.mp4"
            alt="digialtar"
            site="https://digialtar.netlify.app/"
            github="https://github.com/xicaz/digiAltar"
            figma="https://www.figma.com/file/hO2KgFUbFCceqaOceDhOv0/digi-Altar?node-id=0%3A1"
          />

          <ProjectCard
            setModalOpen={setModalOpen}
            setModalData={setModalData}
            date="09-2021"
            title="g'JAM"
            info="e-commerce (MERN stack) website for creating, modifying, and purchasing customizable organic jams"
            lang="HTML, CSS, JavaScript, ReactJS, Bootstrap, Node. Express, MongoDB,
            Mongoose"
            body="g’JAM is an eCommerce shop that sells customizable freshly-made jams, with music themed names and an endless list of savory, spicy, and sweet ingredients. Users, after creating an account and signing in, are able to buy (shopping cart), create, and edit jams."
            img="/gjam.png"
            video="/gjam.mp4"
            alt="gjam"
            site="https://gjam.netlify.app/"
            github="https://github.com/xicaz/gjam-app"
            figma="https://www.figma.com/file/RpJb5JPqRSrHZgfHFav8Sr/GJAM-team-library?node-id=314%3A2"
          />

          <ProjectCard
            setModalOpen={setModalOpen}
            setModalData={setModalData}
            title="Thyme"
            date="08-2021"
            info={
              <>
                a React web app for creating a bucket/task list based on your
                own
                <span className="italic"> thyme</span> and collecting data
                through Airtable's API
              </>
            }
            lang="HTML, CSS, JavaScript, ReactJS, Airtable"
            body="Thyme is a modern and simple tasklist, with a leaf-branching
            system, for goal-setting or bucket lists. Airtable (backend) is collecting the tasks that submitted from the form, while React (frontend) is rendering the data and the single-page app. "
            img="/thyme.png"
            video="/thyme.mp4"
            alt="thyme"
            site="https://thyme-app.netlify.app/"
            github="https://github.com/xicaz/Thyme"
          />

          <ProjectCard
            setModalOpen={setModalOpen}
            setModalData={setModalData}
            date="06-2022"
            title="#36daysoftype_22"
            lang="HTML, CSS, Javascript, ReactJS, Touchdesigner"
            info="a React web app designed for a personal project (audio-reactive alphabet typography), participating in the online event: #36daysoftype"
            body="a React web app designed for a personal project (audio-reactive alphabet typography), participating in the online event: #36daysoftype. Touchdesigner, a node and code based software, specializes in creative programming and is reflective of the work I would love to be a part of."
            img="/36days.png"
            video="/36days.mp4"
            alt="36days"
            site="https://36daysoftype.jexica.design/"
            github="https://github.com/xicaz/36days_2022"
          />

          <ProjectCard
            setModalOpen={setModalOpen}
            setModalData={setModalData}
            date="07-2022"
            title="HaluPaleta"
            lang="HTML, CSS, JavaScript, React, Tailwind CSS"
            info="An experimental eCommerce website that sells customizable paletas (Mexico) and haluhalu (Phillipines)."
            body="An experimental eCommerce website that sells customizable paletas (Mexico) and haluhalu (Phillipines)."
            img="/halupaleta.png"
            video="/halupaleta.mov"
            alt="halupaleta"
            site="https://halupaleta.jexica.design/"
            github="https://github.com/xicaz/halu-paleta"
          />

          <ProjectCard
            setModalOpen={setModalOpen}
            setModalData={setModalData}
            date="10-2022"
            title="MemoAR"
            lang="Javascript, A-Frame"
            info={`A poetic AR experience that redefines traditional monuments as "memos" with playful sculptures and written notes on any Lightship VPS-enabled wayspot anchor.`}
            body={`A poetic AR experience that redefines traditional monuments as "memos" with playful sculptures and written notes on any Lightship VPS-enabled wayspot anchor.`}
            img="/memoar.png"
            video="/memoar.mp4"
            alt="MemoAR"
            site="https://memoarr.jexica.design/"
            github="https://interactiveknowledge.8thwall.app/vps-bespoke"
          />

          <ProjectCard
            setModalOpen={setModalOpen}
            setModalData={setModalData}
            date="07-2021"
            title="Spirit Gif"
            info="giphy images of the user's name are expressively collaged, using the Giphy API"
            body="After entering your name in the search bar, giphy images are expressively and randomly added and collaged using the Giphy API."
            img="/spiritgif.png"
            video="/spiritgif.mp4"
            alt="spiritgif"
            site="https://spiritgif.surge.sh/"
            github="https://github.com/xicaz/Spirit-GIF"
          />
          <ProjectCard
            setModalOpen={setModalOpen}
            setModalData={setModalData}
            date="03-2022"
            title="Ghibli-Giphy Remix"
            lang="HTML, CSS, Javascript"
            info="Ghibli film informational (wiki) page abstractly layered with images and text collected and rendered through the Ghibli Studio and Giphy API"
            body="A drop-down menu holding a list of Ghibli films offers an informational (wiki) page abstractly layered with gif images and text. Data is collected and rendered through the Ghibli Studio and Giphy API."
            img="/giphy.png"
            video="/giphy.mp4"
            alt="ghibli-giphy"
            site="https://spiritgif.surge.sh/"
            github="https://github.com/xicaz/Spirit-GIF"
          />

          {/* WORKSAMPLE */}
          {/* <NextJsCarousel /> */}
        </div>
        {/* </div> */}
      </Layout>
    </>
  );
}

export default ProjectListPage;
