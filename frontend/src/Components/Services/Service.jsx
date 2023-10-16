import React from 'react'
import { SiInteractiondesignfoundation } from "react-icons/si";
import { AiOutlineDoubleRight } from "react-icons/ai";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Service = () => {
    const responsiveOptions = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  };
  return (
    <section className="services px-4 xl:px-10 bg-[#2a2c39] md:py-8 py-4 xl:py-10">
      <div className="text-slate-400 text-lg  py-2">|| My Services</div>
      <div className="xl:text-5xl text-2xl my-2 md:my-6 md:text-4xl text-white font-bold">
        Service Provide For My Clients.
      </div>
      <div className="py-14 md:px-14 px-6">
        <OwlCarousel
          className="owl-theme"
          loop
          mouseDrag
          animateOut={"slideOutDown"}
          responsive={responsiveOptions}
          animateIn={"flipInX"}
          smartSpeed={450}
          autoplay
          touchDrag
          margin={30}
        >
          <div className="item md:p-10 max-w-[20rem] bg-[#252734] p-6">
            <div className="text-4xl text-white md:text-5xl ml-auto">
              <SiInteractiondesignfoundation />
            </div>
            <div className="text-xl text-white md:py-6 py-4 md:text-2xl">
              UI/UX Design
            </div>
            <ul>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">Landing Pages</span>
              </li>
              <li className=" my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">User flow</span>
              </li>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">Wireframing </span>
              </li>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">Prototyping</span>
              </li>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">Mobile App Design</span>
              </li>
            </ul>
          </div>
          <div className="item md:p-10 max-w-[20rem] bg-[#252734] p-6">
            <div className="text-4xl text-white md:text-5xl ml-auto">
              <SiInteractiondesignfoundation />
            </div>
            <div className="text-xl text-white md:py-6 py-4 md:text-2xl">
              Web Development
            </div>
            <ul>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">
                  Custom Website Development
                </span>
              </li>
              <li className=" my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">Responsive Design</span>
              </li>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">E-Commerce Solutions </span>
              </li>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">
                  Web Application Development
                </span>
              </li>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">Website Optimization</span>
              </li>
            </ul>
          </div>
          <div className="item md:p-10 max-w-[20rem] bg-[#252734] p-6">
            <div className="text-4xl text-white md:text-5xl ml-auto">
              <SiInteractiondesignfoundation />
            </div>
            <div className="text-xl text-white md:py-6 py-4 md:text-2xl">
              App Development
            </div>
            <ul>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">iOS App Development</span>
              </li>
              <li className=" my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">Android App Development</span>
              </li>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">
                  Cross-Platform App Development{" "}
                </span>
              </li>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">Custom App Development</span>
              </li>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">App Integration Services</span>
              </li>
            </ul>
          </div>
          <div className="item md:p-10 max-w-[20rem] bg-[#252734] p-6">
            <div className="text-4xl text-white md:text-5xl ml-auto">
              <SiInteractiondesignfoundation />
            </div>
            <div className="text-xl text-white md:py-6 py-4 md:text-2xl">
              Custom Software Development
            </div>
            <ul>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">Cloud-Based Solutions</span>
              </li>
              <li className=" my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">Integration Services</span>
              </li>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">
                  Quality Assurance and Testing{" "}
                </span>
              </li>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">
                  Enterprise Software Solutions
                </span>
              </li>
              <li className="my-4 flex text-[#858792]">
                <span>
                  <AiOutlineDoubleRight />
                </span>{" "}
                <span className="leading-[0.9]">Tailored Approach</span>
              </li>
            </ul>
          </div>
        </OwlCarousel>
      </div>
    </section>
  )
}

export default Service
