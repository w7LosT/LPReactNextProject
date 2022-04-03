import '../styles/globals.css';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import P from 'prop-types';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

MyApp.propTypes = AppProps;
