import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { AiOutlineMinus } from 'react-icons/ai'
import { Collapse } from 'react-collapse'


const AccordionItem = ({open, toggle, title, desc}) => {
  return (
    <div className='pt-[10px]'>
        <div className='flex justify-between bg-[#2D2D2D] w-full h-[100px] px-9 items-center text-white text-[25px] font-medium cursor-pointer' onClick={toggle}>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
              {title}
            </h2>
            <div className='text-[22px]'>
                {open ? <AiOutlineMinus size={32}/> : <IoMdAdd size={32}/>}
            </div>
        </div>

        <Collapse isOpened={open}>
            <div className='bg-[#2D2D2D] text-white px-[40px] pb-[20px]'>{desc}</div>
        </Collapse>
    </div>
  )
}

export default AccordionItem