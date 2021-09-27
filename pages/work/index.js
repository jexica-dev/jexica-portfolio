// ourdomain.com
// import Layout from '../components/layout/Layout.js'
import { useRouter } from 'next/dist/client/router';


function ProjectListPage() {
  const router = useRouter();

  console.log(router.query.projectId);

  return (
    <>
      {/* <Layout> */}
        <h1>Project List</h1>
      {/* </Layout> */}
    </>
  );
}

export default ProjectListPage;