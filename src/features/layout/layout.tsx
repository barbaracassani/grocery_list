import React, { FunctionComponent } from 'react';
import { LayoutStyled } from './layout.styled';
import Header from '../header/header';
import Filter from '../filters/filter';
import MainContent from '../main-content/main-content';

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  return (
    <LayoutStyled>
      <div className="slot-for-header">
        <Header />
      </div>
      <div className="slot-for-filter">
        <Filter />
      </div>
      <div className="slot-for-main-content">
        <MainContent />
      </div>
    </LayoutStyled>
  );
};

export default Layout;
