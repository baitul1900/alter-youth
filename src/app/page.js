import Hero from "@/components/home-components/Hero";
import MobileAppDownload from "@/components/home-components/MobileAppDownload";
import ScholarshipCommunity from "@/components/home-components/ScholarshipCommunity";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <MobileAppDownload/>
      <ScholarshipCommunity/>
    </>
  );
}
