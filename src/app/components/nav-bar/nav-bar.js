// import SideNavBar from './side-bar'
import Image from 'next/image'
import Link from 'next/link'
import styles from './nav-bar.module.scss'
import { AiOutlineHome} from 'react-icons/ai'
import { GrCircleInformation } from "react-icons/gr"
import { HiPhone } from "react-icons/hi"
import { MdOutlineLocalOffer } from "react-icons/md"

import logo from '../../../../public/logo.svg'

export default function NavBar({quote, children, height}){

    return (
        <nav className={styles.nav} style={children? {height: height}: {height: height, textAlign: "center"}}>
            <div className={styles.nav__background} style={{height: height}}>
                <div className={styles.nav__background__blend}></div>
            </div>
            <div className={styles.nav__content}>
                <div className={styles.logo}>
                    <Link href={"/"} className={styles.logo}>
                        <Image 
                            src={logo}
                            alt='Logo Plast-Fol'
                        />
                    </Link>
                </div>
                <div className={styles.nav_big}>
                    <Link href='/'><AiOutlineHome /> Strona Główna</Link>
                    <Link href='/o-nas' ><GrCircleInformation /> O nas</Link>   
                    <Link href='/oferta' ><MdOutlineLocalOffer /> Oferta</Link>
                    <Link href='/kontakt' ><HiPhone /> Kontakt</Link>
                </div>
                <div className={styles.nav_small}>
                    {/* <SideNavBar /> */}
                </div>
            </div>
            <div className={styles.quote}>
            {children? 
                <div className={styles.additional}>
                    <h2>
                        {children}
                    </h2>
                </div>
                :
                null
            }
                <h1>
                    {quote}
                </h1>
            </div>
            
        </nav>

    )
}