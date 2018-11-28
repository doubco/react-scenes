import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

// App
class Demo extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps = {
      ...pageProps,
      route: {
        query: ctx.query,
        asPath: ctx.asPath,
        pathname: ctx.pathname
      }
    };

    return { pageProps };
  }

  render() {
    const { pageProps, Component } = this.props;
    return (
      <Container>
        <Head>
          <title>React Scenes v2</title>
        </Head>
        <ThemeProvider theme={{}}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default Demo;
