// import Link from "next/link";
import Head from "../components/Head.js";
import Content from "../components/Content.js";
import Services from "../components/Services.js";
import Galery from "../components/Galery.js";
import Contact from "../components/Contact.js";

export default function IndexPage() {
  return (
    <div>
      <Head />
      <Content />
      <Services />
      <Galery />
      <Contact />
    </div>
  );
}
