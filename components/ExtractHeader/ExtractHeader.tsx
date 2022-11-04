import styled from "@emotion/styled";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ExtractHeader() {
  const ExtractContainer = styled.div`
    display: flex;
    width: 100%;
    font-size: 40px;
    margin: 5px 0px 0px 9px;
    background-color: rgba(91, 90, 90, 0.7);
    max-width: 1000px;
    border-radius: 10px;
    padding: 2px;
    padding-left: 12px;
    justify-content: space-around;
  `;
  const ExtractButtom = styled.button`
    display: flex;
    justify-content: center;
    padding: 0px 12px;
    margin: 1%;
    border: none;
    border-radius: 10px;
    align-items: center;
    font-size: 15px;
    &:hover {
      background-color: #333;
      border-left: 5px solid #ffef0d;
      cursor: pointer;
    }
  `;

  return (
    <ExtractContainer>
      Extrato
      <ExtractButtom>7 dias</ExtractButtom>
      <ExtractButtom>15 dias</ExtractButtom>
      <ExtractButtom>30 dias</ExtractButtom>
      <ExtractButtom>
        <CalendarMonthIcon /> Periodo
      </ExtractButtom>
      <ExtractButtom>
        <ArrowDownwardIcon /> Entradas
      </ExtractButtom>
      <ExtractButtom>
        <ArrowUpwardIcon /> Saídas
      </ExtractButtom>
    </ExtractContainer>
  );
}