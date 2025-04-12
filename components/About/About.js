import styles from './About.module.css';

export default function About() {
  return (
    <div
      style={{ background: '#0007' }}
      className={[
        styles.about +
          ' w-1/2 rounded-3xl pl-7 pr-3 py-4 text-white text-2xl tracking-wide	 text-left z-10 font-thin	',
      ]}
    >
      <p className={[styles.about + ' font-medium my-4']}>
        &#10209; Creative Developer and multi-disciplinary designer interested
        in interactive, animated, and beautifully curated web experiences.
      </p>
      <p className={[styles.about + ' mb-4 font-normal text-xl']}>
        &#9670; Adobe CC: Photoshop, Illustrator, AfterEffects, InDesign,
        Lightroom, Figma.
      </p>
      <p className={[styles.about + ' mb-4 font-normal text-xl']}>
        &#9670; Javascript, React, Node.js, Next.js, Tailwind CSS, Bootstrap,
        Java, Spring (framework), Express, Mongoose, Ruby, Ruby on Rails, SQL,
        PostgreSQL, MongoDB, Postman API, Git, and Github.
      </p>
      <p className={[styles.about + ' text-lg']}>
        &#10070; Bachelor of Architecture from California of the Arts, 2016.
      </p>

      {/* <p className={[styles.about + " text-lg"]}>
        &#10070; General Assembly: Software Engineering Immersive, 2021.
      </p> */}
    </div>
  );
}
