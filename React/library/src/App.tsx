import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { NavLinks } from 'pages/Home/styles';
import { Layout, Breadcrumb } from 'components';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <NavLinks>
            <Breadcrumb
              separator="/"
              links={[
                { label: 'Link 1', url: '/' },
                { label: 'Link 2', url: '#' },
                { label: 'Link 3', url: '#' },
              ]}
            />
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
