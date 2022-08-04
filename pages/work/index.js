// ourdomain.com
import Navbar from "../../components/navbar/Navbar";
import ProjectCard from "../../components/project/ProjectCard.js";
import NextJsCarousel from "../../components/Carousel/index";
import styles from "../../styles/Work.module.css";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";

function ProjectListPage() {
  let router = useRouter();

  return (
    <>
      <Layout>
        {/* <div className={[styles.container + " absolute "]}> */}
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
          className=" relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-black content-center pt-60"
          style={{ padding: "21vw 3vw 0" }}
        >
          <ProjectCard
            title="digi-Altar"
            info="full-stack web app for creating cyber art-shrine collages, using RoR and React.js"
            lang="HTML, CSS, JavaScript, React, Tailwind CSS, Ruby on Rails"
            img="/digialtar.png"
            vid="/digialtar.mp4"
            alt="digialtar"
            deployed="https://digialtar.netlify.app/"
            github="https://github.com/xicaz/digiAltar"
            figma="https://www.figma.com/file/hO2KgFUbFCceqaOceDhOv0/digi-Altar?node-id=0%3A1"
          >
            {/* <span className="font-medium text-sm tracking-wide block text-left mb-2">
              HTML, CSS, JavaScript, React, Tailwind CSS, Ruby on Rails.
            </span>
            <p className="font-light text-sm">
              digi-Altar is a cyber spiritual space, where you can create,
              share, and inspire your own altar using a hybrid mix of relics and
              artifacts. Images may link to actual objects that you may purchase
              and add to your own physical sanctuary.
            </p> */}
          </ProjectCard>

          <ProjectCard
            title="g'JAM"
            info="e-commerce (MERN stack) website for creating, modifying, and purchasing customizable organic jams "
            lang="HTML, CSS, JavaScript, React, Bootstrap, Node. Express, MongoDB,
            Mongoose"
            img="/gjam.png"
            vid="/gjam.mp4"
            alt="gjam"
            deployed="https://gjam.netlify.app/"
            github="https://github.com/xicaz/gjam-app"
            figma="https://www.figma.com/file/RpJb5JPqRSrHZgfHFav8Sr/GJAM-team-library?node-id=314%3A2"
          >
            {/* <span className="font-medium text-sm tracking-wide block text-left mb-2">
              HTML, CSS, JavaScript, React, Bootstrap, Node. Express, MongoDB,
              Mongoose.
            </span>
            <p className="font-light text-sm">
              g’JAM is an eCommerce shop that sells customizable sweet and
              spicy, freshly-made jams, using a unique variety of ingredients.
              Users, after creating an account and signing in, are able to buy
              (shopping cart), create, and edit jams.
            </p> */}
          </ProjectCard>
          <ProjectCard
            title="Thyme"
            info={
              <>
                a React web app for creating a bucket/task list based on your
                own
                <span className="italic"> thyme</span> and collecting data
                through Airtable's API
              </>
            }
            lang="HTML, CSS, JavaScript, React, Airtable "
            img="/thyme.png"
            vid="/thyme.mp4"
            alt="thyme"
            deployed="https://thyme-app.netlify.app/"
            github="https://github.com/xicaz/Thyme"
          >
            {/* <span className="font-medium text-sm tracking-wide block text-left mb-2">
              HTML, CSS, JavaScript, React. Airtable.
            </span>
            <p className="font-light text-sm">
              Thyme is a modern and simple tasklist, with a leaf-branching
              system, for goal-setting or bucket lists.
            </p> */}
          </ProjectCard>
          <ProjectCard
            title="#36daysoftype_22"
            info="a React web app designed for a personal project (audio-reactive alphabet typography), participating in the online event: #36daysoftype"
            img="/36days.png"
            vid="/36days.mp4"
            alt="36days"
            deployed="https://thyme-app.netlify.app/"
            github="https://github.com/xicaz/Thyme"
          >
            {/* <span className="font-medium text-sm tracking-wide block text-left mb-2">
              HTML, CSS, JavaScript, React. Airtable.
            </span>
            <p className="font-light text-sm">
              Thyme is a modern and simple tasklist, with a leaf-branching
              system, for goal-setting or bucket lists.
            </p> */}
          </ProjectCard>
          <ProjectCard
            title="Ghibli-Giphy Remix"
            info="Ghibli film informational (wiki) page abstractly layered with images and text collected and rendered through the Ghibli Studio and Giphy API"
            img="/giphy.png"
            vid="/giphy.mp4"
            alt="ghibli-giphy"
            deployed="https://spiritgif.surge.sh/"
            github="https://github.com/xicaz/Spirit-GIF"
          >
            {/* <span className="font-medium text-sm tracking-wide block text-left mb-2">
              HTML, CSS, JavaScript. Giphy API.
            </span>
            <p className="font-light text-sm">
              Spiritgif is name search bar that'll create a collage of gif
              sitckers, using the Giphy API.
            </p> */}
          </ProjectCard>
          <ProjectCard
            title="Spirit Gif"
            info="giphy images of the user's name are expressively collaged, using the Giphy API"
            img="/spiritgif.png"
            vid="/spiritgif.mp4"
            alt="spiritgif"
            deployed="https://spiritgif.surge.sh/"
            github="https://github.com/xicaz/Spirit-GIF"
          >
            {/* <span className="font-medium text-sm tracking-wide block text-left mb-2">
              HTML, CSS, JavaScript. Giphy API.
            </span>
            <p className="font-light text-sm">
              Spiritgif is name search bar that'll create a collage of gif
              sitckers, using the Giphy API.
            </p> */}
          </ProjectCard>

          {/* WORKSAMPLE */}
          {/* <NextJsCarousel /> */}
        </div>
        {/* </div> */}
      </Layout>
    </>
  );
}

export default ProjectListPage;
