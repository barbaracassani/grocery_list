import React, { FunctionComponent } from 'react';
import Form from './form/form';
import List from './list/list';
import { MainContentStyled } from './main-content.styled';

const MainContent: FunctionComponent<{}> = () => {
  return (
    <MainContentStyled>
      <Form />
      <List />
    </MainContentStyled>
  );
};

export default MainContent;
