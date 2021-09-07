import React, { FunctionComponent } from 'react';
import Form from './form/form';
import List from './list/list';

const MainContent: FunctionComponent<{}> = () => {
  return (
    <>
      <Form />
      <List />
    </>
  );
};

export default MainContent;
