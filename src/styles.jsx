import React from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${(props) => props.theme.colors.backgroundColorSecondary};
  color: ${(props) => props.theme.colors.black};
  font-family: Arial, Helvetica, sans-serif;
   
  width: 100%;
  
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
      background: rgb(179, 177, 177);
      border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
      background: rgb(136, 136, 136);
      border-radius: 10px;
      height: 100px;
    }

  &::-webkit-scrollbar-thumb:hover {
      background: rgb(100, 100, 100);
      border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:active {
      background: rgb(68, 68, 68);
      border-radius: 10px;
  }
}`

const theme = {
  colors: {
    white: "#FFFFFF",
    black: '#000000',
    backgroundColorModal:'#474747',
    backgroundColorSecondary: '#4e4d4a',
    backgroundColor:'#353432',
    borderColor: '#2790b0',
    green:'#94ba65',
    darkBlue:'#2b4e72',
    ligthBlue: '#3b5875',
    red: '#e30224',
    redMinus:'#FF0000',
    greenPlus: '#008000',
    orange: '#e6ac27',
  },
  fontSizes: {
    small: "12px",
    medium: "18px",
    large: "24px"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}><GlobalStyles />{children}</ThemeProvider>
)

export default Theme;
