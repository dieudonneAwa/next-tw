import React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Raleway:ital,wght@0,200;0,300;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto+Mono:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-body text-lg leading-7 tracking-tight text-body-light font-normal subpixel-antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
