import { Button, Dialog, TextField} from '@mui/material/';
import styled from 'styled-components';
import {Colors} from '../../../shared/colors'

export const InputLabel = styled.div`
  font-size: 14px;
  color: #4f4f4f;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
  
  }
`;

export const CustomDialog = styled(Dialog)`
  & > h1 {
    font-size: 28px;
    color: inherit;
  }

  & .MuiPaper-root {
    border-radius: 30px;
    color: inherit;
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }
`;

export const TittleContainer = styled.div`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  padding: 18px;
  font-weight: bold;
  color: ${Colors.primary};
  margin-left: 120px;
  margin-right: 120px;
`;

export const SubtitleContainer = styled.div`,
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
`;

export const ModalContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  align-items: center;
`;

export const DialogContentContainer = styled.div`
  font-size: 14px;
  font-weight: 400;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  padding: 0px 24px 24px 10px;
  margin-top: 40px;

  & h3 {
    font-size: 22px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  padding: 24px 24px 24px 24px;
  align-items: center;
  justify-content: center;
`;

export const ConfirmButton = styled(Button)`
width: 20vw;
font-weight: 700;
  &.MuiButton-root {
    padding: 10px 10px 10px 10px;
    color: ${Colors.primary};
    border-radius: 24px;
    &:hover {
      background-color: white;
    }
  }
`;

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

export const Form = styled.form`
`;