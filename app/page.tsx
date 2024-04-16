import Image from "next/image";
import {siteConfig} from "@/config/site";

export default function Home() {
  return (
      <section>{ siteConfig.name }</section>
  );
}
