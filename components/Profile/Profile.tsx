import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';


const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f8f8f8;
  font-family: sans-serif;
  background-color: #242424;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  `;


export default function Profile() {
  return (
    <ProfileContainer>
      <AvatarContainer>
        <Avatar alt="Juliana Cruz" src="https://avatars.githubusercontent.com/u/104940843?s=400&u=d47a62df8eaa87edd3b5795cda01434e1a2c14df&v=4" sx={{ width:100, height:100}}/>
        <h2>Juliana Cruz</h2>
        <h3>Software Engineer</h3>
      </AvatarContainer>
    </ProfileContainer>
  )
}
