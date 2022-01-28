import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import GithubLogo from "./GithubLogo";
import ThemeChanger from "./ThemeChanger";


function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  
  return (
    <header className="header-container">
      <div className="header">
        <button className="hamburger-menu" onClick={handleClick}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Logo />
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full sm:inline-flex sm:w-auto pl-2`}
        >
          <div className="home-header-items-container">
            <Link href="#home">
              <a className="header-button">
                {/* <ChevronRightIcon className="anchor-chevron" /> */}
                Home
              </a>
            </Link>
            <Link href="#about">
              <a className="header-button">
                {/* <ChevronRightIcon className="anchor-chevron" /> */}
                About
              </a>
            </Link>
            <Link href="#devs">
              <a className="header-button">
                {/* <ChevronRightIcon className="anchor-chevron" /> */}
                Developers
              </a>
            </Link>
            <Link href="#projects">
              <a className="header-button">
                {/* <ChevronRightIcon className="anchor-chevron" /> */}
                Projects
              </a>
            </Link>
            <Link href="https://github.com/keystonecodes">
              <a className="github-button group mt-1 sm:mt-0" target="_blank" rel="noreferrer noopener">
                <GithubLogo />
              </a>
            </Link>
          </div>
        </div>
        <ThemeChanger />
      </div>
    </header>
  );
}

export default Header;