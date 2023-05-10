import '../styles/globals.css';
// import { wrapper } from "../store/index";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// export default wrapper.withRedux(App);