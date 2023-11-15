import ReactDOM from 'react-dom/client';
import Router from 'router/Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import 'styles/index.css';
import theme from 'styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
