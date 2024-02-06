import React, { useRef, useState } from 'react'
import Card from './Card'

const Cover = () => {

  const ref = useRef(null)

    let data = [
      {
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.rum sapiente ipsam a sunt officiis.",
        filesize:"0.5mb",
        close: false,
        tag: {
          tags:true,
          color: true
        }
      },
        {
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet iure! Amet, praesentium laborum.",
            filesize:"0.4mb",
            close: true,
            tag: {
              tags: false,
              color: false,
            }
        },

        {
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, reprehenderit obcaecati sequi hic magni.",
          filesize:"0.7mb",
          close: false,
          tag: {
            tags:true,
            color: false
          }
        },
    ]

  return (
    <div ref={ref} className='fixed left-0 bottom-0 w-full h-full bg-transparent p-5 flex gap-5 flex-wrap'>
      {data.map((items, index)=>(
        <Card data={items} reference={ref} key={index}/>
      ))}
    </div>
  )
}

export default Cover