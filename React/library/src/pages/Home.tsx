import Layout from '../components/Layout';

import PageTitle from '../components/PageTitle';
// import { Counter } from "../features/counter/Counter";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Transactions from '../features/transactions/Transactions';
import Applications from '../features/applications/Applications';

type IHomeProps = {};

const Home = (props: IHomeProps) => {
  return (
    <Layout>
      <PageTitle text="Home" />
      <Breadcrumb
        separator=">"
        links={[
          { label: 'Home', url: '/' },
          { label: 'Breadcrumb1', url: '#' },
          { label: 'Breadcrumb2', url: '#' },
        ]}
      />
      <Transactions />
      <Applications />
    </Layout>
  );
};

export default Home;
