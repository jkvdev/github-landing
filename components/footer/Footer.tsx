import Image from "next/image";
import Link from "next/link";
import { DiGithubFull } from "react-icons/di";

const Footer = () => {
  return (
    <div className="footer relative pt-14 break-words ">
      <div className="max-w-[1280px] mx-auto relative z-[2] overflow-hidden">
        <div className="flex flex-col lg:flex-row py-10 mb-8 space-x-6 px-4">
          {/* First Column */}
          <div className="mb-12 px-2">
            {/* GitHub Logo */}
            <Link
              href="/"
              data-analytics-event='{"category":"Footer","action":"go to home","label":"text:home"}'
              className="color-fg-default d-inline-block"
              aria-label="Go to GitHub homepage"
            >
              <DiGithubFull fontSize={80} className="text-white" />
            </Link>

            {/* Text */}
            <div className="text-white">
              <h2 className="font-semibold">Subscribe to our newsletter</h2>
              <p className="text-[14px] text-[#7d8590] mb-8 ">
                Get product updates, company news, and more.
              </p>

              {/* Link */}
              <Link
                href="/"
                className="mb-6 px-6 py-3 text-[17px] font-semibold border-[0.5px] border-gray-400 rounded-lg"
              >
                Subscribe
              </Link>
            </div>
          </div>

          {/* Second Column */}
          <div className="lg:flex w-full justify-between grid md:grid-cols-4 grid-cols-2 gap-6">
            <div className="text-[#7d8590]">
              {/* List of Links */}
              <h2 className="font-medium mb-4 font-mono">Product</h2>
              <ul className="text-[14px]">
                <li className="mb-4">
                  <Link href="/">Features</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Security</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Team</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Enterprise</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Custom Stories</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">The ReadME Project</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Pricing</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Resources</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Roadmap</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Compare GitHub</Link>
                </li>
              </ul>
            </div>

            {/* Third Column */}
            <div className="text-[#7d8590]">
              {/* List of Links */}
              <h2 className="font-medium mb-4 font-mono">Platform</h2>
              <ul className="text-[14px]">
                <li className="mb-4">
                  <Link href="/">Developer API</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Partners</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Electron</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">GitHub Desktop</Link>
                </li>
              </ul>
            </div>

            {/* Fourth Column */}
            <div className="text-[#7d8590]">
              {/* List of Links */}
              <h2 className="font-medium mb-4 font-mono">Product</h2>
              <ul className="text-[14px]">
                <li className="mb-4">
                  <Link href="/">Docs</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Community Forum</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Professional Services</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Premium Support</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Skill</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Status</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Contact GitHub</Link>
                </li>
              </ul>
            </div>

            {/* Fifth Column */}
            <div className="text-[#7d8590]">
              {/* List of Links */}
              <h2 className="font-medium mb-4 font-mono">Company</h2>
              <ul className="text-[14px]">
                <li className="mb-4">
                  <Link href="/">About</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Blog</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Careers</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Press</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Inclusion</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Social Impact</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Shop</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#161b22]">
        <div className="max-w-[1280px] mx-auto text-[12px] md:flex flex-row-reverse py-6 justify-between items-center px-4">
          {/* Social Links */}
          <ul className="flex items-center max-md:mb-4  ">
            <li className="mr-4">
              <Link href="/">
                <Image
                  src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg"
                  height="18"
                  width="22"
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="Twitter icon"
                />
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/">
                <Image
                  src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg"
                  height="18"
                  width="22"
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="Twitter icon"
                />
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/">
                <Image
                  src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg"
                  height="18"
                  width="22"
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="Twitter icon"
                />
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/">
                <Image
                  src="https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg"
                  height="18"
                  width="22"
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="Twitter icon"
                />
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/">
                <Image
                  src="https://github.githubassets.com/images/modules/site/icons/footer/twitch.svg"
                  height="18"
                  width="22"
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="Twitter icon"
                />
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/">
                <Image
                  src="https://github.githubassets.com/images/modules/site/icons/footer/tiktok.svg"
                  height="18"
                  width="22"
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="Twitter icon"
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
                  height="18"
                  width="22"
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="Twitter icon"
                />
              </Link>
            </li>
          </ul>

          {/* Legal Links and FAQ */}
          <ul className="flex items-center mb-4 sm:mb-0 text-[#7d8590] flex-wrap">
            <li className="mr-3 ">© 2023 GitHub, Inc.</li>
            <li className="mr-3 ">
              <Link href="/">Terms</Link>
            </li>
            <li className="mr-3 ">
              <Link href="/">Privacy (Updated 08/2022)</Link>
            </li>
            <li className="mr-3 ">
              <Link href="/">Sitemap</Link>
            </li>
            <li className="mr-3 ">
              <Link href="/">What is Git?</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
