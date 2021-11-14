// ourdomain.com
import Navbar from "../../components/navbar/Navbar";
import ProjectCard from "../../components/project/ProjectCard.js";

function ProjectListPage() {
  return (
    <>
      <div className="relative w-screen bg-white overflow-y-scroll overflow-x-hidden">
        <Navbar />
        <div className="flex flex-col items-center justify-center align-center w-full bg-black text-white pb-10 mt-60">
          <ProjectCard
            img="/digialtar.png"
            vid="/digialtar.mp4"
            alt="digialtar"
            deployed="https://digialtar.netlify.app/"
            github="https://github.com/xicaz/digiAltar"
            figma="https://www.figma.com/file/hO2KgFUbFCceqaOceDhOv0/digi-Altar?node-id=0%3A1"
          >
            <span className="font-extralight block text-left mb-2">
              HTML, CSS, JavaScript, React, Tailwind CSS, Ruby on Rails.
            </span>
            digi-Altar is a cyber spiritual space, where you can create, share,
            and inspire your own altar using a hybrid mix of relics and
            artifacts. Images may link to actual objects that you may purchase
            and add to your own physical sanctuary.
          </ProjectCard>
          <ProjectCard
            img="/gjam.png"
            vid="/gjam.mp4"
            alt="gjam"
            deployed="https://gjam-app.netlify.app/"
            github="https://github.com/WAMS24/gjam-app"
            figma="https://www.figma.com/file/RpJb5JPqRSrHZgfHFav8Sr/GJAM-team-library?node-id=314%3A2"
          >
            <span className="font-extralight block text-left mb-2">
              HTML, CSS, JavaScript, React, Bootstrap, Node. Express, MongoDB,
              Mongoose.
            </span>
            g’JAM is an eCommerce shop that sells customizable sweet and spicy,
            freshly-made jams, using a unique variety of ingredients. Users,
            after creating an account and signing in, are able to buy (shopping
            cart), create, and edit jams.
          </ProjectCard>
          <ProjectCard
            img="/thyme.png"
            vid="/thyme.mp4"
            alt="thyme"
            deployed="https://thyme-app.netlify.app/"
            github="https://github.com/xicaz/Thyme"
          >
            <span className="font-extralight block text-left mb-2">
              HTML, CSS, JavaScript, React. Airtable.
            </span>
            Thyme is a modern and simple tasklist, with a leaf-branching system,
            for goal-setting or bucket lists.
          </ProjectCard>

          <ProjectCard
            img="/spiritgif.png"
            vid="/spiritgif.mp4"
            alt="spiritgif"
            deployed="https://spiritgif.surge.sh/"
            github="https://github.com/xicaz/Spirit-GIF"
          >
            <span className="font-extralight block text-left mb-2">
              HTML, CSS, JavaScript. Giphy API.
            </span>
            Spiritgif is name search bar that'll
            create a collage of gif sitckers, using the Giphy API.
          </ProjectCard>
        </div>
      </div>
    </>
  );
}


export default ProjectListPage;
