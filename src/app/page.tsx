import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from "next/head";
//import SiteNotice from "./components/SiteNotice";

export default function Home() {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7172996117171177"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <About />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
