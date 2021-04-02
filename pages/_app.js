import Navbar from '../components/Navbar';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

// import React, { Component } from 'react';
// import App, { Container } from 'next/app';

// class MyApp extends App {
//   static async origGetInitialProps({ Companent, ctx }) {
//     let pageProps = {};

//     if ((Component, this.getInitialProps)) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
//   }

//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <Container>
//         <p>I AM FROM THE _APP.JS FILE!!!</p>
//         <Component {...pageProps} />
//       </Container>
//     );
//   }
// }

// export default MyApp;
