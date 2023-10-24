"use client"

import { useState } from 'react'
import styles from './nav-bar.module.scss'
import {TiThMenu} from "react-icons/ti"
import { AiFillCloseCircle, AiOutlineHome} from 'react-icons/ai'
import { GrCircleInformation } from "react-icons/gr"
import {HiPhone} from "react-icons/hi"
import { MdOutlineLocalOffer } from "react-icons/md"

export default function SideNavBar(){

    const [sideBarVisibility, setSideBarVisibility] = useState(false)


    return (
        <>
            <button onClick={() => {setSideBarVisibility(!sideBarVisibility)}}>
                {sideBarVisibility?<AiFillCloseCircle/>:<TiThMenu />}
            </button>
            <div className={styles.nav_small_dropdown} style={sideBarVisibility? {
                    display: "flex"
                }:{
                    display: "none"
                }}>
                <a href='/' tabIndex="0"><AiOutlineHome /> Strona Główna</a>
                <a href='/o-nas' tabIndex="0"><GrCircleInformation /> O nas</a>   
                <a href='/oferta' tabIndex="0"><MdOutlineLocalOffer /> Oferta</a>
                <a href='/kontakt' tabIndex="0"><HiPhone /> Kontakt</a>
            </div>
        </>


    )
}