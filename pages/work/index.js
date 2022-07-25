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
              " fixed top-0 left-0 z-20 mix-blend-difference text-white"
            }
          >
            <div className=" pl-16 pt-20 font-whyteinktrap flex flex-row text-8xl">
              portfolio
              <div className=" pt-3 px-10">
                <p className=" border-2 flex justify-around text-white rounded-full py-5 px-10 whitespace-nowrap font-bold tracking-wider bg-black text-3xl">
                  creative developer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" pl-10 relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-black content-center pt-60">
          <ProjectCard
            // href="/?image=1"
            // as="/1"

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
