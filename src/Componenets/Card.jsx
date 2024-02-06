import React from 'react'
import { motion } from "framer-motion"
import { FaRegFileAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { LuDownload } from "react-icons/lu";

const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} className='w-64 h-80 bg-zinc-900 rounded-3xl text-white relative overflow-hidden '>
        <div className='p-7'>
            <FaRegFileAlt className='text-xl mt-2'/>
            <p className='mt-10'>{data.content}</p>
        </div>
        <div className='w-full absolute bottom-0 left-0'>
            <div className='w-full h-2/5 flex items-center justify-between mb-3 px-6'>
                <p>{data.filesize}</p>
                <span className='w-9 h-9 bg-zinc-700 flex items-center justify-center rounded-full'>
                    { data.close ? <MdClose /> : <LuDownload className='text-xl cursor-pointer' />}
                </span>
            </div>
            { data.tag.tags ? <div className={`w-full py-3 ${ data.tag.color ? "bg-green-700" : "bg-blue-700" } flex items-center justify-center cursor-pointer`}>
                <p>Dowload</p>
            </div> : null}
        </div>
    </motion.div>
  )
}

export default Card