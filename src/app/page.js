import Client from "@/components/home-components/Client";
import CommunityImpact from "@/components/home-components/CommunityImpact";
import Hero from "@/components/home-components/Hero";
import MobileAppDownload from "@/components/home-components/MobileAppDownload";
import ScholarshipApp from "@/components/home-components/ScholarshipApp";
import ScholarshipCommunity from "@/components/home-components/ScholarshipCommunity";
import ScholarshipEligibility from "@/components/home-components/ScholarshipEligibility";
import SchoolsNationWide from "@/components/home-components/SchoolsNationWide";
import TeacherCard from "@/components/home-components/TeacherCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <MobileAppDownload/>
      <ScholarshipCommunity/>
      <CommunityImpact/>
      <SchoolsNationWide/>
      <ScholarshipEligibility/>
      <TeacherCard/>
      <ScholarshipApp/>
      <Client/>
    </>
  );
}
