import { ManagedUIContext } from "../components/contex";
import "../styles/index.scss";

const Noop = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }) {
  const Layout =  Component.Layout || Noop

  return (
    <ManagedUIContext>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ManagedUIContext>
  );
}

export default MyApp;
