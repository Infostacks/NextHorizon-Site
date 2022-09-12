import React from "react";
import { Link } from "react-router-dom";

import { SiAndroid } from "react-icons/si";
import { SiApple } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { GiGears } from "react-icons/gi";
import { HiDesktopComputer } from "react-icons/hi";
import { TbMapSearch } from "react-icons/tb";
import { FaCube } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";

const ServicesMenu = () => {
  return (
    <div className="absolute top-[2.5rem] xl:right-[15rem] lg:right-[6rem] right-[2rem] gap-5 z-50 bg-slate-100 rounded-3xl drop-shadow-md flex flex-col">
      {/* top links  */}
      <div className="flex flex-row px-10 gap-10 pt-10">
        {/* mobile  */}
        <div className="flex flex-col gap-3">
          <span className="text-xl font-semibold text-[#1B2B36] hover:">
            <Link to="/services/mobile-development">Mobile Development</Link>
          </span>
          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-blue-700">
              <SiApple />
            </div>
            <Link to="/services/mobile-development/ios">
              <div className="flex flex-col">
                <span className="text-[#1B2B36]">iOS app development</span>
                <span className="text-slate-500">
                  Native Swift apps for all Apple devices
                </span>
              </div>
            </Link>
          </div>

          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-blue-700">
              <SiAndroid />
            </div>
            <Link to="/services/mobile-development/android">
              <div className="flex flex-col">
                <span className="text-[#1B2B36]">Android app development</span>
                <span className="text-slate-500">
                  Build native apps for Android with Kotlin
                </span>
              </div>
            </Link>
          </div>

          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-blue-700">
              <SiFlutter />
            </div>
            <Link to="/services/mobile-development/flutter">
              <div className="flex flex-col">
                <span className="text-[#1B2B36]">Flutter app development</span>
                <span className="text-slate-500">
                  Dart-based cross-platform development
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* web  */}
        <div className="flex flex-col gap-3">
          <span className="text-xl font-semibold text-[#1B2B36]">
            <Link to="/services/web-development">Web Development</Link>
          </span>
          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-orange-400">
              <SiWebpack />
            </div>
            <Link to="/services/web-application-development-services">
              <div className="flex flex-col">
                <span className="text-[#1B2B36]">Web app development</span>
                <span className="text-slate-500">
                  Secure and performant web apps and PWAs
                </span>
              </div>
            </Link>
          </div>

          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-orange-400">
              <GiGears />
            </div>
            <Link to="/services/devops-services">
              <div className="flex flex-col">
                <span className="text-[#1B2B36]">DevOps services</span>
                <span className="text-slate-500">
                  Solution architecture & cloud dev services
                </span>
              </div>
            </Link>
          </div>

          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-orange-400">
              <HiDesktopComputer />
            </div>
            <Link to="/services/application-modernization-service">
              <div className="flex flex-col">
                <span className="text-[#1B2B36]">
                  Legacy soft modernization
                </span>
                <span className="text-slate-500">
                  Reengineering, redesign, and migration
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* startups  */}
        <div className="flex flex-col gap-3">
          <span className="text-xl font-semibold text-[#1B2B36]">
            For Startups
          </span>
          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-cyan-500">
              <TbMapSearch />
            </div>
            <Link to="/services/discovery-phase-process">
              <div className="flex flex-col">
                <span className="text-[#1B2B36]">Discovery phase</span>
                <span className="text-slate-500">
                  SRS, UX prototype, SWOT analysis
                </span>
              </div>
            </Link>
          </div>

          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-cyan-500">
              <FaCube />
            </div>
            <Link to="/services/mvp-development-services">
              <div className="flex flex-col">
                <span className="text-[#1B2B36]">MVP development</span>
                <span className="text-slate-500">
                  Reducing time-to-market with MVP
                </span>
              </div>
            </Link>
          </div>

          <div className="flex flex-row gap-2 hover:cursor-pointer">
            <div className="text-xl text-cyan-500">
              <SiHiveBlockchain />
            </div>
            <Link to="/services/cto-as-a-services">
              <div className="flex flex-col">
                <span className="text-[#1B2B36]">CTO as a Service</span>
                <span className="text-slate-500">
                  CaaS consulting services for startups
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex flex-row bg-slate-200 p-10 w-full rounded-b-3xl justify-around">
        <Link to="/services/qa-services">
          <div className="flex flex-col hover:cursor-pointer">
            <span className="text-xl font-semibold text-[#1B2B36]">
              Software testing
            </span>
            <span className="text-slate-500">
              Manual testing & Automation testing
            </span>
          </div>
        </Link>

        <Link to="/services/dedicated-development-team-services">
          <div className="flex flex-col hover:cursor-pointer">
            <span className="text-xl font-semibold text-[#1B2B36]">
              Dedicated team
            </span>
            <span className="text-slate-500">
              Experienced tech staff to extend a team
            </span>
          </div>
        </Link>

        <Link to="/services/ui-ux-design">
          <div className="flex flex-col hover:cursor-pointer">
            <span className="text-xl font-semibold text-[#1B2B36]">
              UI-UX design
            </span>
            <span className="text-slate-500">
              Material and HIG design for all platforms
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServicesMenu;
