import Layout from "../components/Layout";

import PageTitle from "../components/PageTitle";
// import { Counter } from "../features/counter/Counter";
import Breadcrumb from "../components/Breadcrumb";
import Transactions from "../features/transactions/Transactions";

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
      {/* <Counter /> */}
      <Transactions />
    </Layout>
  );
};

export default Home;
