import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "../comps";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Uncomment to notice that the scroll state is preserved between page transitions */}
      {/* <Nav /> */}
      <Component {...pageProps} />
    </>
  );
}

MyApp.getServerSideProps = () => {
  return { props: {} };
};

export default MyApp;
