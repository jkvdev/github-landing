"use client";

import { Navbar, StickyNav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Productivity } from "@/components/productivity";
import { Collaboration } from "@/components/collaboration";
import { Security } from "@/components/security";
import { Footer, Globe } from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <div className="relative z-50">
        <div className="absolute">
          <Navbar />
        </div>
      </div>

      {/* Main App */}
      <main>
        <div className="overflow-x-hidden">
          {/* BG Image */}
          <div className="relative">
            <Image
              className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image object-contain"
              width="4377"
              height="2041"
              src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
              alt="background"
            />
          </div>

          {/* Hero Section */}
          <div className="hero-section px-3 ">
            <Hero />
          </div>

          {/* Sticky Navbar */}
          <StickyNav />

          {/* Productivity Section */}
          <div
            id="productivity"
            className="home-campaign-productivity px-4 pt-8 overflow-hidden"
          >
            <Productivity />
          </div>

          {/* Collaboration Section */}
          <div
            id="collaboration"
            className="home-campaign-productivity px-4 pt-8  overflow-hidden"
          >
            <Collaboration />
          </div>

          {/* Security Section */}
          <div
            id="security"
            className="home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden"
          >
            <Security />
          </div>

          {/* Final Globe */}
          <Globe />

          {/* Info */}
          <div className="max-w-[1280px] mx-auto relative z-[2]  px-5">
            <ul className="lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1">
              <li>
                <sup id="footnote-1">1</sup> The Total Economic Impact™ Of
                GitHub Enterprise Cloud and Advanced Security, a commissioned
                study conducted by Forrester Consulting, 2022. Results are for a
                composite organization based on interviewed customers.
              </li>
              <li>
                <sup id="footnote-2">2</sup> GitHub, Octoverse 2022 The state of
                open source software.
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
