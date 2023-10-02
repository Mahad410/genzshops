import React from 'react'

export default function IntroJoinButtons({f_name, s_name, f_func , s_func}) {
    return (
            <div className="join">
                <button className="btn bg-[--bg-li] hover:bg-[#ffffff] border-white border-[4px] hover:border-[--bg-li] rounded-full text-[--sidebar-text] hover:text-[#000000] join-item" onClick={f_func}>{f_name}</button>
                <button className="btn bg-[#ffffff] hover:bg-[--bg-li] border-[--bg-li] border-[4px] hover:border-[#ffffff] rounded-full text-[#000000] hover:text-[--sidebar-text] join-item" onClick={s_func}>{s_name}</button>
            </div>
    )
}