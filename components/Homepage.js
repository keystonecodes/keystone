import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function Homepage() {
  const router = useRouter();
  return (
    <div className="content-container">
      <div className="flex flex-col w-screen">
        <div id="home" style={{ scrollMarginTop: "250px" }}></div>
        <div>
          <h1 className="flex font-bold text-4xl mx-2 pb-10 justify-center text-center">
            Welcome to Keystone
          </h1>
        </div>
        <div id="about" style={{ scrollMarginTop: "95px" }}></div>
        <div className="section-container">
          <h1 className="section-header">About</h1>
          <p className="section-text">
            Hello! GM to everyone{" "}
            <p className="text-xl inline">☀️</p> We are happy for you to be here. What is Keystone you ask?
            Well, Keystone is nothing short of an adventure. It has all stemmed
            from the eargerness to learn about blockchain technology, the pros
            and cons of differing L1s, and how to brings our favorite parts
            together. Two frens, that have dived
            deep down the rabbit hole, decided to come together and build a
            collection of tools that can be utilized on both Solana and
            Ethereum! We will strive to make capabilities of each tool/project
            equal for both L1s, AND we hope to expand the capabilites of each
            tool in the future! We welcome feedback and are glad you are
            here! Welcome, to Keystone.
          </p>
        </div>
        <div id="devs" style={{ scrollMarginTop: "95px" }}></div>
        <div className="section-container">
          <h1 className="section-header">Developers</h1>
          <p className="section-text">
            So, who are we you ask? Well as stated before, we are just two frens. We
            have been friends for quite some time, and have lived through the
            adventures of college and beyond together. From struggling through
            the same classes, to going ham at the same parties{" "}
            <p className="text-xl inline">🍻</p>, we have gone through it all.
            We had gone our separate ways, but through the freedom and opportunity that blockchain technology
            provides, we have come together again! Neither of us proclaim to be
            a master of a trade, but we are learning along the way! We don't
            wish to "dox" ourselves at this time, but some of you may connect
            the dots <p className="text-xl inline">🤝</p>. If you wish to
            discuss anything blockchain related though, you can reach out on
            twitter! <p className="text-xl inline">👇</p>
          </p>
          <div className="dev-container">
            <div className="dev-image-container">
              <Link href="https://twitter.com/ct_hobbes" passHref>
                <a target="_blank" rel="noreferrer noopener">
                  <div className="flex flex-col justify-center items-center pb-8 my-10 lg:my-0 lg:pt-[10px] bg-transparent group cursor-pointer">
                    <div className="dev-image">
                      <Image
                        src="/images/gm.png"
                        alt="gm"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div className="blockchain-link mt-[32px]">
                      <h1 className="blockchain-text group-hover:bg-[#1d2434] dark:group-hover:bg-[#f4f7fa] group-hover:text-white dark:group-hover:text-[#1d2434] group-trans-button">
                        Hobbes
                      </h1>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="dev-image-container">
              <Link href="https://twitter.com/twonarly1" passHref>
                <a target="_blank" rel="noreferrer noopener">
                  <div className="flex flex-col justify-center items-center pb-8 my-10 lg:my-0 lg:pt-[10px] bg-transparent group cursor-pointer">
                    <div className="dev-image">
                      <Image
                        src="/images/frank.png"
                        alt="frank"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div className="blockchain-link mt-[32px]">
                      <h1 className="blockchain-text group-hover:bg-[#1d2434] dark:group-hover:bg-[#f4f7fa] group-hover:text-white dark:group-hover:text-[#1d2434] group-trans-button">
                        Twonarly
                      </h1>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div id="projects" style={{ scrollMarginTop: "95px" }}></div>
        <div className="section-container">
          <h1 className="section-header">Projects</h1>
          <div className="flex flex-col justify-center items-center">
            <p className="section-text">
              Without further ado, here are the project(s) we have built
              together! Any feedback will be well received, and we will continue
              to expand. Nothing here is a promise of tokenization, an airdrop,
              or anything of the sort. We are here to learn, and build some fun
              tools for the community!
            </p>
            <div className="mt-4 border-2 rounded-lg border-gray-900 dark:border-gray-300">
              <Link href="/gallery">
                <a className="project-button">2NFT</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;