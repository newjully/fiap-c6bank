import React from 'react';
import styled from '@emotion/styled';
import SideBar from '../components/SideBar';
import ExtractContent from '../components/ExtractContent';


const ExtractContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  `


export default function Extract() {

  return (

    <ExtractContainer>
      <SideBar>
        <section>
          <h1>Extrato</h1>
          Sair da Conta
        </section>
      </SideBar>
      <ExtractContent/>
    </ExtractContainer>
  )
}


