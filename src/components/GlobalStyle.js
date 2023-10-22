import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #ffff ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   //background-image: url(https://cdn.pixabay.com/photo/2020/07/06/01/33/forest-5375005_1280.jpg);
     background-image: url(https://pixabay.com/get/gde3257acc23ad3db905738e12d3998cee715389f9d2539e71f1d17dd185eb462ba9e734eebb3e7e8e18daf6e17d494de44d8e2fc327081ea24792f80f8ce70e6_1280.jpg);
     background-repeat:no-repeat;
     background-size: cover;
     background-attachment: fixed;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  
  
}
`;
