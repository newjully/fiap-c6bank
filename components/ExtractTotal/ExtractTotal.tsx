import styled from "@emotion/styled";
import React from "react";
import SaldoTotal from "@mui/icons-material";



export default function ExtractTotal() {
  const ExtractContainer = styled.div`
    display: flex;
    width: 100%;
    font-size: 40px;
    margin: 5px 0px 0px 9px;
    background-color: #f2f2f2;
    max-width: 1000px;
    border-radius: 10px;
    padding: 1px;
    padding-left: 25px;
   
  `;

  return (
    <ExtractContainer>
      Saldo
    </ExtractContainer>
     
  );
}
