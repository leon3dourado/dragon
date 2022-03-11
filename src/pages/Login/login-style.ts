import styled from "styled-components";
import { Button, Paper, TextField } from "@mui/material/";
import {Colors} from '../../shared/colors'
import { Vectors } from "../../shared/images";


export const LoginContainer = styled(Paper)`
   &.MuiPaper-root{
    padding: 20px;
    width: 500px;
    margin: 10px auto;
   }

   @media(max-width: 480px) {
    &.MuiPaper-root{
    height: 90vh;
   }}

   @media(max-width: 768px) {
    &.MuiPaper-root{
    height: 80vh;
   }}

   @media(max-width: 1200px) {
        &.MuiPaper-root{
        height: 80vh;
    }}

   @media screen and (min-width: 1280px) {
    &.MuiPaper-root{
    height: 70vh;
   }}
}
  }
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: 80px;
  margin: 0 0 18px 0;
`;

export const Label = styled.div`
  width: 348px;
  left: calc(50% - 348px / 2);
  margin: 10px 0px 6px 0;

  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: ${Colors.primary};
`;

export const TextInput = styled(TextField)`
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    /* START WEBKIT */
    INPUT[type='password'] {
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-size: 19px;

      ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }

  && {
    & .MuiOutlinedInput-root {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      height: 50px;

      .MuiOutlinedInput-notchedOutline {
        border-color: ${Colors.gray1};
      }
    }

    & .MuiOutlinedInput-root.Mui-error {
      .MuiOutlinedInput-notchedOutline {
        border-color: red;
      }
    }

    & .MuiCircularProgress-root {
      width: 40px;
      height: 30px;
    }
  }
`;  

export const LogoSouthSystem = styled(Vectors.SouthSystemLogo)`
  width: 100%;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`
export const LoginButton = styled(Button)`
    &.MuiButton-root{
        height: 40px;
        text-transform: capitalize;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        margin-top: 20px;
        background-color: ${Colors.primary};

        &:hover {
          background-color: ${Colors.primary};
        }
    }
    
`

export const Form = styled.form`
`;