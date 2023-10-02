'use client'
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import React, {useState} from "react";
export default function Favouritebtn() {
    const[isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);

    }
    return (
        <>
            <button onClick={handleClick}>
                <FavoriteTwoToneIcon className={`absolute top-[16px] right-[16px] cursor-pointer ${isClicked? 'text-red-500':''} `}/>
            </button>
        </>
    )
}