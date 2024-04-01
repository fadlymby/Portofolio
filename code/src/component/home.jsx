import { Link } from "react-router-dom";
import animasi from "../assets/emot.gif";
import mac from "../assets/Gotix-Mac.png";
import darmi from "../assets/darmi-mac.png";
import BannerImage from "../assets/banner.jpeg";
import susu from "../assets/fadly.png";
import Marquee from "react-fast-marquee";
import chrome from "../assets/chrome.png";
import github from "../assets/github.png";
import lind from "../assets/lind.png";
import gmail from "../assets/gmail.png";
import { FaRegCopyright } from "react-icons/fa";
import logo from "../assets/f.png";

function HomeComponent() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <div className="bg-gray-100 flex justify-between sticky top-0 z-30 items-center mx-auto lg:px-14 text-orange-400 font-semibold">
          <a href="/">
            <img src={logo} alt="" className="w-20 object-cover" />
          </a>
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="lg:p-4 hover:bg-[#de9e2f] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              HOME
            </a>
            <a
              href="#about"
              className="lg:p-4 hover:bg-[#de9e2f] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              ABOUT
            </a>
            <a
              href="#skill"
              className="lg:p-4 hover:bg-[#de9e2f] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              SKILL
            </a>
            <a
              href="#portfolio"
              className="lg:p-4 hover:bg-[#de9e2f] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              PORTFOLIO
            </a>
            <a
              href="#contact"
              className="lg:p-4 hover:bg-[#de9e2f] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      <div id="/" className="w-full flex justify-center">
        <div className=" text-black w-full  max-w-screen-2xl">
          <div className="relative top-0 w-full h-screen flex flex-col justify-center items-center">
            <img
              src={BannerImage}
              alt=""
              className="absolute w-full h-full object-cover"
            />

            <div className="z-10 flex flex-col items-center justify-center p-4">
              <div className="w-48 md:w-48 lg:w-72 xl:w-72">
                <img src={susu} alt="" className="mx-auto" />
              </div>

              <div className="text-center">
                <div className="text-lg md:text-2xl lg:text-4xl mb-2">
                  Hello, I am
                </div>
                <h1 className="text-xl md:text-3xl lg:text-6xl font-bold mb-2">
                  Tri Fadli Fauzi
                </h1>
                <p className="text-xs md:text-sm lg:text-xl text-gray-600 mb-4">
                  FULL STACK WEB DEVELOPMENT
                </p>
                <Link to="https://drive.google.com/file/d/1I3mFjIObwo9_mYjXmitJZAGkm6sifL_U/view">
                  <button
                    onClick="downloadCV()"
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                  >
                    Download CV
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div
            id="about"
            className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-10 py-10"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif text-center mb-10 sm:mb-20">
              About Me
            </div>

            <div className="flex flex-col sm:flex-row outline-dashed outline-4 outline-offset-8 outline-orange-400">
              <div className="flex flex-col items-center px-4 sm:px-10">
                <p className="text-xl sm:text-2xl font-semibold">Fadly's,</p>

                <div className="w-32 h-32 sm:w-52 sm:h-52 mt-5">
                  <img
                    src={animasi}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-lg sm:text-2xl text-justify font-serif my-6 sm:my-0 text-black max-w-2xl p-10">
                <p>
                  Hello, I am Tri Fadli Fauzi, a system information bachelor
                  with passion in computer science. I am highly enthusiastic
                  about challenges and learning new things, such as coding.
                  Enjoy creating unique and efficient user interface designs for
                  applications, ready to collaborate with a team, and always
                  open to constructive criticism to improve oneself.
                </p>
              </div>
            </div>
          </div>

          <div
            id="skill"
            className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100"
          >
            <div className="text-3xl md:text-6xl font-extrabold font-serif text-center mb-16 md:mb-32">
              Skill
            </div>

            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-10">
              <div className="flex flex-col items-center">
                <div className="mb-4 px-8 py-4 bg-green-600 w-full md:w-72 rounded-t-md text-center text-xl md:text-2xl font-bold">
                  Front-end
                </div>
                <div class="bg-green-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  JavaScript
                </div>
                <div class="bg-green-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  Redux
                </div>
                <div class="bg-green-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  HTML
                </div>
                <div class="bg-green-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  CSS
                </div>
                <div class="bg-green-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  TailwindCSS
                </div>
                <div class="bg-green-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  Chakra UI
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4 px-8 py-4 bg-yellow-500 w-full md:w-72 rounded-t-md text-center text-xl md:text-2xl font-bold">
                  Back-end
                </div>
                <div class="bg-yellow-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  Node JS
                </div>
                <div class="bg-yellow-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  REST API
                </div>
                <div class="bg-yellow-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  Database ORM
                </div>
                <div class="bg-yellow-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  My SQL
                </div>
                <div class="bg-yellow-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  Express JS
                </div>
                <div class="bg-yellow-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  Multer
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4 px-8 py-4 bg-violet-600 w-full md:w-72 rounded-t-md text-center text-xl md:text-2xl font-bold">
                  Others
                </div>
                <div class="bg-violet-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  Adobe Photoshop
                </div>
                <div class="bg-violet-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  Problem Solving
                </div>
                <div class="bg-violet-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  Team Work
                </div>
                <div class="bg-violet-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  Critical Thinking
                </div>
                <div class="bg-violet-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  Creativity
                </div>
                <div class="bg-violet-300 w-full md:w-72 py-2 px-4 mb-2 rounded-md text-center">
                  Public Speaking
                </div>
              </div>
            </div>
          </div>

          <div
            id="portfolio"
            className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-20 mt-8"
          >
            <div className="text-3xl md:text-6xl font-extrabold font-serif text-center mb-10">
              Portfolio
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 mb-20">
              <img
                src={mac}
                alt=""
                className="w-full md:w-96 h-80 max-w-96 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
              />
              <div>
                <div className="text-xl md:text-4xl lg:text-6xl text-center md:text-left font-serif text-black mb-4 underline">
                  Gotix
                </div>
                <p className="text-lg md:text-2xl font-sans mb-4">
                  "The Gotix" is an application for buying ticket concerts,
                  creating music events, detailing concert music, viewing total
                  orders, and generating a sales report.
                </p>
                <p className="text-sm md:text-lg font-serif italic mb-4">
                  JavaScript, React, TailwindCSS, Redux, HOC, MySQL, Express JS,
                  Node JS, Axios, REST API, JWT, ORM, Multer, Node Mailer.
                </p>
                <div className=" flex flex-row gap-3">
                  <img
                    src={chrome}
                    alt=""
                    className=" w-14 object-cover transition ease-in-out duration-300 hover:-translate-y-1 hover:animate-bounce cursor-pointer"
                  />
                  <Link to="https://github.com/fadlymby/Miniproject-Ecommerce">
                    <img
                      src={github}
                      alt=""
                      className=" w-14 object-cover transition ease-in-out duration-300 hover:-translate-y-1 hover:animate-bounce cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-start gap-5 mb-8">
              <img
                src={darmi}
                alt=""
                className="w-full md:w-96 h-80 max-w-96 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
              />
              <div>
                <div className="text-xl md:text-4xl lg:text-6xl text-center md:text-left font-serif mb-4 underline">
                  Susu Mbok Darmi
                </div>
                <p className="text-lg md:text-2xl font-sans mb-4">
                  "Susu Mbok Darmi" is an application clone that closely
                  resembles the original version, capable of about company,
                  product, member of company and location store in many places.
                </p>
                <p className="text-sm md:text-lg font-serif italic mb-4">
                  JavaScript, NextJS, React, TailwindCSS.
                </p>
                <div className=" flex flex-row gap-3">
                  <Link to="https://codechallange.vercel.app/home">
                    <img
                      src={chrome}
                      alt=""
                      className=" w-14 object-cover transition ease-in-out duration-300 hover:-translate-y-1 hover:animate-bounce cursor-pointer"
                    />
                  </Link>
                  <Link to="https://github.com/fadlymby/code">
                    <img
                      src={github}
                      alt=""
                      className=" w-14 object-cover transition ease-in-out duration-300 hover:-translate-y-1 hover:animate-bounce cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            id="contact"
            class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
          >
            <Marquee>
              <div className="flex text-black text-2xl lg:text-6xl font-extrabold font-serif text-center justify-center items-center mb-10">
                Contact Me
              </div>
            </Marquee>
            <div className="flex text-black lg:text-xl font-serif text-center justify-center items-center italic">
              Let’s collaborate as a team
            </div>
            <div className="flex text-black lg:text-xl font-serif text-center justify-center items-center font-semibold mb-10">
              Contact me if you have any inquiries
            </div>

            <div className=" flex flex-row gap-6 mb-20">
              <Link to="mailto:trifadli.f@gmail.com">
                <img
                  src={gmail}
                  alt=""
                  className=" w-16 object-cover transition ease-in-out duration-300 hover:-translate-y-1 hover:animate-bounce cursor-pointer"
                />
              </Link>
              <Link to="https://www.linkedin.com/in/tri-fadli-fauzi-404827130/">
                <img
                  src={lind}
                  alt=""
                  className="w-16 object-cover transition ease-in-out duration-300 hover:-translate-y-1 hover:animate-bounce cursor-pointer"
                />
              </Link>
              <Link to="https://github.com/fadlymby">
                <img
                  src={github}
                  alt=""
                  className="w-16 object-cover transition ease-in-out duration-300 hover:-translate-y-1 hover:animate-bounce cursor-pointer"
                />
              </Link>
            </div>

            <div className="flex justify-center text-center items-center text-black gap-2 ">
              <FaRegCopyright />
              2024 Tri Fadli Fauzi
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
