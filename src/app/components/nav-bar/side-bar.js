"use client"

import { useState } from 'react'
import Link from 'next/link'
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
            <button onClick={() => {setSideBarVisibility(!sideBarVisibility)}}
                aria-label="Przycisk menu nawigacji"
            >
                {sideBarVisibility?<AiFillCloseCircle/>:<TiThMenu />}
            </button>
            <div className={styles.nav_small_dropdown} style={sideBarVisibility? {
                    left: "0"
                }:{
                    left: "-80%"
                    
                }}>
                <div className={styles.nav_small_links}>
                    <Link href='/'><AiOutlineHome /> Strona Główna</Link>
                    <Link href='/o-nas' ><GrCircleInformation /> O nas</Link>   
                    <Link href='/oferta' ><MdOutlineLocalOffer /> Oferta</Link>
                    <Link href='/kontakt' ><HiPhone /> Kontakt</Link>
                </div>
            </div>
        </>
    )
}