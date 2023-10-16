import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb bg-[#252734] px-4 py-8 md:py-12 ">
      <div className="container">
        <div className="text-center">
          <div className="text-2xl text-center md:text-4xl text-white xl:text-5xl">
            {props.title}
          </div>
          <div className="flex justify-center self-center">
            <div
              className=" mt-3 py-2 md:py-4 md:mt-6 xl:my-9 bg-slate-600 bg-opacity-40 flex  rounded-[2.75rem] px-4 
                md:px-8 text-[10px] md:text-base text-slate-300"
            >
            <Link className="hover:text-slate-100" to='/' >Home </Link>&nbsp;||&nbsp;
            {props.ParentLink && <Fragment> <Link className="hover:text-slate-100" to={props.ParentLink}>{props.ParentTitle}</Link>&nbsp;||&nbsp;</Fragment>}
            <span className="text-slate-100">&nbsp;{props.title}</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
