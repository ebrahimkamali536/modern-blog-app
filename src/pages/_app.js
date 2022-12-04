import Layout from "../layout";
import "../../styles/globals.css";
import {ThemeProvider} from "next-themes"


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
