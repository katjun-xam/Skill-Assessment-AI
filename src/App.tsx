import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { NavLinks } from 'pages/Home/styles';
import { Layout } from 'components';

import { Breadcrumbs, Link, Typography } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <NavLinks>
            <Breadcrumbs>
              <Typography>Link 1</Typography>
              <Typography>Link 2</Typography>
              <Link underline="hover" href="/">
                Link 3
              </Link>
            </Breadcrumbs>
          </NavLinks>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
