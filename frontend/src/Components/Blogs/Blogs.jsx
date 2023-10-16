import React from "react";
import { Breadcrumb } from "../../CommonElements/Breadcrumb";
import BlogCard from "./BlogCard";

const data = [
  {
    image:"https://pixabay.com/get/ga296fca911c4878e766c097f2f2ff15f37b164236399d5569a7c0fcaf4a8875b22b6a612858224f28096042ef247a98cf760dcd9d574feda7b87f580718628c0_1280.jpg",
    category:'Full Stack Web Development',
    title: "Web Development",
    description:
    "The Ultimate Guide to Web Development: Building Your Online Presence",
    date: "2018-05-06"
    },
    {
    image:"https://pixabay.com/get/ga296fca911c4878e766c097f2f2ff15f37b164236399d5569a7c0fcaf4a8875b22b6a612858224f28096042ef247a98cf760dcd9d574feda7b87f580718628c0_1280.jpg",
    category:'Full Stack Web Development',
    title: "Web Development",
    description:
    "The Ultimate Guide to Web Development: Building Your Online Presence",
    date: "2018-05-06"
    },
    {
    image:"https://pixabay.com/get/ga296fca911c4878e766c097f2f2ff15f37b164236399d5569a7c0fcaf4a8875b22b6a612858224f28096042ef247a98cf760dcd9d574feda7b87f580718628c0_1280.jpg",
    category:'Full Stack Web Development',
    title: "Web Development",
    description:
    "The Ultimate Guide to Web Development: Building Your Online Presence",
    date: "2018-05-06"
    },
    {
    image:"https://pixabay.com/get/ga296fca911c4878e766c097f2f2ff15f37b164236399d5569a7c0fcaf4a8875b22b6a612858224f28096042ef247a98cf760dcd9d574feda7b87f580718628c0_1280.jpg",
    category:'Full Stack Web Development',
    title: "Web Development",
    description:
    "The Ultimate Guide to Web Development: Building Your Online Presence",
    date: "2018-05-06"
    },


]
const Blogs = () => {
  return (
    <React.Fragment>
    <Breadcrumb title={'Blogs'} />
      <section className="text-gray-600 bg-[#252734f5] body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          {
            data && data.map((item, index)=>(
              <BlogCard key={index} item={item}/>
            ))
          }
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Blogs;
