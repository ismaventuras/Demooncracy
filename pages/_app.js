import '../styles/globals.css';
import Layout from '../src/components/Layout';
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { useEffect, useState } from 'react';
import { Router } from 'next/router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Box, CircularProgress } from '@mui/material';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


function getLibrary(provider) {
  const library = new ethers.providers.Web3Provider(provider)
  return library
}


function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Web3ReactProvider getLibrary={getLibrary}>
          <Layout>
            {loading ? <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: '100vh' }}>
              <CircularProgress color="inherit" size={80} />
            </Box> : (
              <Component {...pageProps} />
            )}
          </Layout>
        </Web3ReactProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp
