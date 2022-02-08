import Layout from "../components/Layout";

import PageTitle from "../components/PageTitle";
import { Counter } from "../features/counter/Counter";
import Breadcrumb from "../components/Breadcrumb";

type IHomeProps = {};

const Home = (props: IHomeProps) => {
  return (
    <Layout>
      <PageTitle text="Home" />
      <Breadcrumb
        links={[
          { label: "Home", url: "/" },
          { label: "Breadcrumb1", url: "#" },
          { label: "Breadcrumb2", url: "#" },
        ]}
      />
      <Counter />
    </Layout>
  );
};

export default Home;
