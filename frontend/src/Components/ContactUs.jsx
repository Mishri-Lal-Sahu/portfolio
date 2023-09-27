import React from "react";
import { AiOutlineLine, AiOutlineUser } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import MyForm from "./Assets/MyForm";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
export const ContactUs = () => {
  emailjs.init("y8FIC7W8Yfv4iyTJ-");
  const handleSubmit = async (data) => {
    const mail = await emailjs
      .send("service_89soz9p", "template_lasfhlq", {
        from_name: data.name,
        subjact: data.subject,
        message: data.message,
        reply_to: data.email,
      })
      .then((res) => {
        MySwal.fire("Success!", "Thank you for contacting me Support me. Your request has now been recieved. You will be notified when a response is made by email.", "success");
      })
      .catch((error) => {
      });
  };
  return (
    <section className="services px-4 xl:px-10 bg-[#252734] md:py-8 py-4 xl:py-10">
      <div className="text-slate-400 text-lg  py-2">|| Get in Touch</div>
      <div className="xl:text-5xl text-2xl my-2 md:my-6 md:text-4xl text-white font-bold">
        You can contact me.
      </div>
      <div className="py-14 md:px-14 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 p-4">
            <AiOutlineLine className="text-gray-600 text-2xl inline-block" />
            <div className="text-white inline-block">Get in touch</div>
            <AiOutlineLine className="text-gray-600 text-2xl inline-block" />
            <div className="flex py-2">
              <div className="p-2">
                <AiOutlineUser className="text-[#858792] items-center text-3xl" />
              </div>
              <div className="px-2">
                <h6 className="font-bold text-[#858792] ">Name</h6>
                <p className="text-white">MISHRI LAL SAHU</p>
              </div>
            </div>
            <div className="flex py-2">
              <div className="p-2 ">
                <BsWhatsapp className="text-[#858792] items-center text-3xl" />
              </div>
              <div className="px-2">
                <a
                  href="https://wa.me/918419892041?text=Hello!%20I%20have%20question%20for%20your%20service.%20%0ACan%20you%20help%20me%20please%3F"
                  rel="noreferrer"
                  target="_blank"
                >
                  <h6 className="font-bold text-[#858792] ">Whatsapp Number</h6>
                </a>
                <a
                  href="https://wa.me/918419892041?text=Hello!%20I%20have%20question%20for%20your%20service.%20%0ACan%20you%20help%20me%20please%3F"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="text-white">+91 8419892041 </p>
                </a>
              </div>
            </div>
            <div className="flex py-2">
              <div className="p-2">
                <CiLocationArrow1 className="text-[#858792] items-center text-3xl" />
              </div>
              <div className="px-2">
                <h6 className="font-bold text-[#858792]">Address</h6>
                <p className="text-white">Lucknow, Utter Pradesh</p>
              </div>
            </div>
            <div className="flex py-2">
              <div className="p-2">
                <TfiEmail className="text-[#858792] items-center text-3xl" />
              </div>
              <div className="px-2">
                <h6 className="font-bold text-[#858792]">Email Address</h6>
                <p className="text-white text-sm">
                  engineermishrilalsahu@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 p-4">
            <AiOutlineLine className="text-gray-600 text-2xl inline-block" />
            <div className="text-white inline-block">Message me</div>
            <AiOutlineLine className="text-gray-600 text-2xl inline-block" />
            <MyForm handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};
