import React, { Component } from "react";
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
import {AiOutlineClose,AiOutlineMenu,AiOutlineTwitter,AiFillInstagram,AiFillYoutube} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state ={
      navToggle:false,
    }
  }
  
  render() {
    
    return (
      <div className="header-section px-4 xl:px-10 bg-[#2a2c39] py-6 sticky w-100 top-0 z-50  font-sans md:text-xl xl:text-2xl text-white">
        <div className="grid grid-flow-col items-center justify-between auto-rows-max">
          {/* <!-- header --> */}
          <div className="flex xl:font-extrabold  md:font-bold xl:text-3xl px-4">
           MISHRI LAL SAHU
          </div>
          <div className="">
          {
            !this.state.navToggle?<AiOutlineMenu onClick={() => this.setState({navToggle:true})} className="xl:hidden text-3xl text-white block"/>:''
            }
            <ul className="hidden xl:flex gap-10 md:opacity-60 ">
              <li><Link className="hover:text-white" to='/'>Home</Link></li>
              <li><Link className="hover:text-white" to='/Services'>Service</Link></li>
              <li><Link className="hover:text-white" to='/Blogs'>Blogs</Link></li>
              <li><Link className="hover:text-white" to='/Projects'>Projects</Link></li>
                <li><Link className="hover:text-white" to='/AboutMe'>About Me</Link></li>
              <li><Link className="hover:text-white" to='/ContactMe'>Contact Me</Link></li>
            </ul>
            <div className="block fixed p-10  bg-[#2a2c39] duration-500 -top-6 right-0 h-[100vh] text-left w-[80%] md:w-[40%] xl:hidden" style={{right:this.state.navToggle?"0%":"-100%"}}>
            <div className="text-3xl py-6 relative"><AiOutlineClose onClick={() => this.setState({navToggle:false})} className="p-1 border border-slate-300 rounded-full text-white block"/></div>
              <ul className=' text-left  gap-10 text-white' >
                <li><Link className="hover:text-white" to='/'>Home</Link></li>
                <li><Link className="hover:text-white" to='/Services'>Service</Link></li>
                <li><Link className="hover:text-white" to='/Blogs'>Blogs</Link></li>
                <li><Link className="hover:text-white" to='/Projects'>Projects</Link></li>
                <li><Link className="hover:text-white" to='/AboutMe'>About Me</Link></li>
                <li><Link className="hover:text-white" to='/ContactMe'>Contact Me</Link></li>
              </ul>
                <div>
                <div className="flex flex-wrap py-6 text-3xl ">
                  <ul className="flex flex-wrap">
                      <li className="mr-2"><Link target="_blank" rel="noreferrer" to="https://www.facebook.com/mishri.mishrilalsahu"><FiFacebook  className="p-1 border border-slate-300 rounded-full text-white block"/></Link>
                      </li>
                      <li className="mr-2"><a target="_blank" rel="noreferrer" href="https://twitter.com/MishriSahu4"><AiOutlineTwitter  className="p-1 border border-slate-300 rounded-full text-white block"/></a>
                      </li>
                      <li className="mr-2"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/official_mishri_lal_sahu"><AiFillInstagram  className="p-1 border border-slate-300 rounded-full text-white block"/></a></li>
                      <li className="mr-2"><a target="_blank" rel="noreferrer" href="https://youtube.com/channel/UC89G9Yrbwg4CzGDGoFkbQ_g"><AiFillYoutube  className="p-1 border border-slate-300 rounded-full text-white block"/></a></li>
                  </ul>
                </div>
                </div>
            </div>
          </div>
          <div className="hidden md:block">
          <button className="border-[1px] border-slate-400 rounded-full text-sm p-4 px-8 flex align-middle leading-4">Hire Me <MdOutlineKeyboardDoubleArrowRight className="ml-4" /></button>
          </div>
        </div>
      </div>
    );
  }
}
