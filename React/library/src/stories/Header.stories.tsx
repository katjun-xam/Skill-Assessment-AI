import { Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as IconProfile } from 'assets/icons/icon-profile.svg';

import { Button, Header, Icon } from 'components';
import GlobalStyles from 'globalStyles';
import { lightTheme } from 'theme';

export default {
  title: 'Common/Header',
  component: Header,
};

const headerMenu = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'What’s New',
    path: '/news',
  },
  {
    label: 'My Profile',
    path: '/profile',
  },
];

const Template: Story = (args) => (
  <MemoryRouter initialEntries={['/']}>
    <GlobalStyles />
    <Header title={args.title} logo={args.logo} menu={args.menu} endElement={args.endElement} {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Storybook showcase',
  logo: <Logo />,
  menu: headerMenu,
  endElement: (
    <Button
      label="Login"
      color="primary"
      variant="outlined"
      wide
      startIcon={
        <Icon fillColor={lightTheme.primary}>
          <IconProfile />
        </Icon>
      }
    />
  ),
};
Default.parameters = {
  layout: 'fullscreen',
};

export const WithoutLogin = Template.bind({});
WithoutLogin.args = {
  title: 'Storybook showcase',
  logo: <Logo />,
  menu: headerMenu,
};
WithoutLogin.parameters = {
  layout: 'fullscreen',
};

export const DesktopWithoutTitle = Template.bind({});
DesktopWithoutTitle.args = {
  logo: <Logo />,
  menu: headerMenu,
  endElement: (
    <Button
      label="Login"
      color="primary"
      variant="outlined"
      wide
      startIcon={
        <Icon fillColor={lightTheme.primary}>
          <IconProfile />
        </Icon>
      }
    />
  ),
};
DesktopWithoutTitle.parameters = {
  layout: 'fullscreen',
};
