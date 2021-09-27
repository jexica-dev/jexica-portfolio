// ourdomain.com
import Layout from '../components/layout/Layout.js'
import Image from 'next/image';
import ReactDOM from 'react-dom'
import ThreejsModel from '../components/ThreejsModel'
import Link from 'next/link'



function HomePage() {
  return (
    <>
      <Layout>
        <ThreejsModel id="root" />
        <div className="home-logo" style={{ position: "fixed", zindex: "100" }}>
          <Image
            src="/jexica-logo.png"
            width={750}
            height={350}
            alt="jexica"
            className="logo-img"
          />
          <Link href="/work">work</Link>
        </div>
      </Layout>
    </>
  );
}


export default HomePage;