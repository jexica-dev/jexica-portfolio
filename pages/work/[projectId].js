// ourdomain.com
// import Layout from '../components/layout/Layout.js'
import { useRouter } from 'next/dist/client/router';


function DetailPage() {
  const router = useRouter();

  console.log(router.query.projectId);
  // send a request to backend api
  // to fetch image Urls / Description

  return (
    <>
      {/* <Layout> */}
        <h1>DetailPage</h1>
      {/* </Layout> */}
    </>
  );
}

export default DetailPage;