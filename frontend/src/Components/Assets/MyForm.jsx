import React, { useState } from 'react';

const form = [
  {type:'text',place:'Name',nam:'name',class:''},
  {type:'email',place:'Email Address',nam:'email',class:''},
  {type:'text',place:'Subject',nam:'subject',class:''}
]
const MyForm = (props) => {
  const [data,setData] = useState([]);
  const handleChanges =(event)=>{
          setData({...data,[event.target.name]: event.target.value});
  }
  return (
    <>
      <form onSubmit={(e)=>{e.preventDefault();props.handleSubmit(data)}} className='mt-4'>
      {
        form.map((el)=>(
          <input key={el} required onChange={handleChanges} type={el.type} name={el.nam} placeholder={el.place} className={'p-1 px-4 text-[#3d3dd2] bg-[#a3a4aa] w-full rounded-md border border-gray-400 mb-3 outline-none'+el.class} />
        ))
      }
      <textarea required name="message" onChange={handleChanges} placeholder='Message..' className='p-1 px-4 text-[#3d3dd2] bg-[#a3a4aa]  w-full rounded-md border border-gray-400 mb-4 outline-none' rows="2"></textarea>
      <input type="submit" value="Submit" className='text-white  bg-[#3d3dd2] px-8 text-xl rounded-md cursor-pointer py-1 border-4 border-[#3d3dd2]  hover:text-white' />
      </form>
    </>
  )
}

export default MyForm
