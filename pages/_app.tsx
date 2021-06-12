/* eslint-disable react/prop-types */
import React from 'react';
import 'tailwindcss/tailwind.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config.js';

interface Props {
  pageProps: any;
  Component: any;
}

const App = ({ Component, pageProps }: Props) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
