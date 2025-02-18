import React, { ReactNode } from 'react';
import { withTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationStyled = styled.nav`
  display: flex;
  gap: 1.6em;
  align-items: center;
  color: #fff;

  .nav--link {
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.6;
    }
    &.active {
      text-decoration: underline;
    }
  }
`;

const Navigation = ({ t }: { t?: (v: string) => ReactNode | string }) => {
  return (
    <NavigationStyled className="nav">
      <NavLink className={({ isActive }) => (isActive ? 'nav--link active' : 'nav--link')} to={'/'}>
        {t('nav.home')}
      </NavLink>
    </NavigationStyled>
  );
};

const NavigationTranslated = withTranslation('common')(Navigation);
export default NavigationTranslated;
