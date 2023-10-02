import React from 'react'

export default function IntroSingleButton({text, func}) {
  return (
    <>
    <button className="btn bg-[#ffffff] hover:bg-[--bg-li] border-[4px] border-[#000000] hover:border-[#ffffff] rounded-full font-bold text-[#000000] hover:text-[--sidebar-text] mt-[30px] h-min" onClick={func}>{text}</button>
    </>
  )
}