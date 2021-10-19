import styles from './About.module.css'

export default function About() {
  return (
    <div style={{background: "#0009"}} className={[styles.about + " w-1/2 rounded-3xl px-7 py-2 text-white text-left z-10 overflow-hidden"]}>
      <p className={styles.about}>+ Bachelor of Architecture from California of the Arts, 2016.</p>
      <p className={[styles.about + ' overflow-scroll']}>
      + General Assembly: Software Engineering Immersive, 2021.
      </p>
      <p className={[styles.about + ' font-semibold my-4']}>
         + Multi-disciplinary designer interested in creative coding: interactive, animated, and beautifully curated web experiences. 
      </p>
      <p className={styles.about}>
        Skills: HTML, CSS, Javascript, React, Adobe CC
      </p>
    </div>
  )
}
