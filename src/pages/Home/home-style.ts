import styled from "styled-components";
import { Button, TableContainer, Grid, Paper, Typography } from "@mui/material/";
import {Colors} from '../../shared/colors'
import { Vectors } from "../../shared/images";


export const TableInformation = styled(TableContainer)`


`
export const GridContainer = styled(Grid)`
   &.MuiGrid-root{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }

`
export const GridItem = styled(Grid)`
   &.MuiGrid-root{
    background-color: ${Colors.readonly};
    width:90%;
    min-height: 100vh;
    -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.26); 
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.26);
   }
`
export const PaperTeste = styled(Paper)`
  &.MuiPaper-root{
    overflow-x: auto;
    margin-right: auto;
    margin-left: auto;

  }
`

export const Icon = styled.div`
  display:flex;
  flex-direction: column;
  color: ${Colors.primary};
`;


export const WelcomeMessage = styled(Typography)`
    &.MuiTypography-root{
      display:flex;
      flex-direction:row;
      margin: 20px;
      font-weight: bold;
    }
`

export const UserName = styled.div`
  color: ${Colors.primary};
  margin-left:5px;
`;

export const Instructions = styled.div`
  color: ${Colors.secondary};
  margin: 20px;
  font-size: 14px;
`;

