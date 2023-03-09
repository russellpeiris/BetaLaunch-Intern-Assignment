import React from 'react';
import Body from '../components/Body';
import { Border } from '../components/Border';
import TitleBar from '../components/TitleBar';

function Employees() {
  return (
    <div>
      <TitleBar height="72px" title="People" ptop="24px" pleft="32px" />
      <Border />
      <Body />
    </div>
  );
}

export default Employees;
