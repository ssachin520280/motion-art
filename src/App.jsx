import { GoArrowRight } from "react-icons/go";
import Canvas from "./Canvas";

export default function App() {
  return (
    <>
      <main className="absolute top-0 left-0 w-screen h-screen overflow-y-scroll text-white font-outfit hover:pointer-events-none">
        <main className="mx-auto space-y-28 max-w-full xl:max-w-7xl px-5 xl:px-0">
          {/* Navigation */}
          <nav className="flex items-center justify-between pt-7">
            <img src="/MotionArtEffect-logo.png" alt="MotionArtEffect-logo" className="w-1/2 sm:w-auto" />
            <div className="flex space-x-5 me-5">
              <a
                href="https://sachin-anand-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-transparent text-black hover:text-white border-2 border-white duration-200 rounded-md pt-2 pb-2.5 px-7 text-lg hidden sm:block"
              >
                Portfolio
              </a>
            </div>
          </nav>

          {/* Main Section */}
          <section className="relative text-center sm:text-start space-y-7 sm:space-y-0">
            <section className="w-fit top-0 text-xl font-sora space-y-2.5 static sm:absolute mx-auto sm:mx-0">
              <p className="ms-5 text-gradient font-semibold w-52 sm:w-36">Transform Your Website</p>
              <p className="ms-5 font-light text-base w-52 sm:w-[8.5rem]">With Motion Art Effect</p>
            </section>
            <section className="mx-auto space-y-5 w-full sm:w-1/2">
              <h1 className="font-sora !leading-tight font-medium text-4xl sm:text-5xl xl:text-[4rem]">
                Attract Your Visitors Attention With Colorful{" "}
                <span className="text-gradient">Motion Art Effect</span>
              </h1>
            </section>
          </section>

          {/* Footer */}
          <footer className="bg-gradient py-4 mt-28 text-slate-300 text-[15px]">
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center max-w-full xl:max-w-7xl px-5 xl:px-0 mx-auto">
              <p className="ms-5 text-center">© 2024 Copyright. All rights reserved by MotionArt</p>
              <div className="space-x-5 mb-5 sm:mb-0 me-5">
                <a
                  href="https://sachin-anand-frontend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </footer>
        </main>
      </main>

      <Canvas />
    </>
  );
}
