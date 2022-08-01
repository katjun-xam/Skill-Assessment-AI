import React from 'react';
import { HomeWrapper } from './styles';
import { PageTitle, CallOut } from 'components';
import Applications from './components/Applications';
import Transactions from './components/Transactions';

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <HomeWrapper>
      <PageTitle text="Home" />
      <CallOut>
        Hello guest. Welcome to XAM React Accelerator. <br />
        Our aim is to save development hours by using ready-made and reusable components. <br />
        With this accelerator, we can start a new React project in a short period of time. <br />
        Feel free to navigate to pages to check out re-usable components created using ReactJS.
      </CallOut>
      <Transactions />
      <Applications />
    </HomeWrapper>
  );
};

export default Home;
