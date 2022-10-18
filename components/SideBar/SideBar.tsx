import React from 'react'
import styled from '@emotion/styled';
import Profile from '../Profile';
import Menu from '../Menu';
import Balance from '../Balance';

const SideBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 360px;
  background-color: #242424;
`;

type SideBarProps = {
  children: React.ReactNode;
}
export default function SideBar(props: SideBarProps) {
  return (
   <SideBarContainer>
    <Profile/>
    <Balance/>
    <Menu/>
    {props.children}
   </SideBarContainer>
  )
}
