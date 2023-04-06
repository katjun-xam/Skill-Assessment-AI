import { useLocation, Link } from 'react-router-dom';

import {
  HeaderContainer,
  HeaderContent,
  HeaderEndElement,
  HeaderMainContainer,
  HeaderNavigation,
  HeaderNavigationSticky,
  HeaderNavigationStickyItem,
  LogoContainer,
  StyledTextButton,
  TitleContainer,
  TitleText,
} from './styles';
import { IHeaderProps } from './types';

const Header = ({ title, logo, menu, endElement }: IHeaderProps) => {
  const { pathname } = useLocation();

  return (
    <HeaderMainContainer>
      <HeaderContainer>
        <TitleContainer>
          <Link to={'/'}>
            <LogoContainer>{logo}</LogoContainer>
          </Link>
          {title && <TitleText>{title}</TitleText>}
        </TitleContainer>
        <HeaderContent>
          {/* NAVIGATION */}
          <HeaderNavigationSticky>
            {menu.map((item) => (
              <HeaderNavigationStickyItem
                key={item.path}
                selected={
                  (pathname === '/' && item.path === '/') || (item.path !== '/' && pathname.includes(item.path))
                }
              >
                <Link to={item.path}>{item.label}</Link>
              </HeaderNavigationStickyItem>
            ))}
          </HeaderNavigationSticky>
          {/* NAVIGATION WIDE SCREENS */}
          <HeaderNavigation>
            {menu.map((item, index) => (
              <Link to={item.path} key={index}>
                <StyledTextButton variant="text">{item.label}</StyledTextButton>
              </Link>
            ))}
          </HeaderNavigation>
          {/* HEADER END ELEMENT */}
          {endElement && <HeaderEndElement>{endElement}</HeaderEndElement>}
        </HeaderContent>
      </HeaderContainer>
    </HeaderMainContainer>
  );
};

export default Header;
