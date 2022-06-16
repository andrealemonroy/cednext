import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-screen sm:max-w-5xl mx-auto">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
