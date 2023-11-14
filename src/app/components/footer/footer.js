import styles from "./footer.module.scss"
import { AiOutlineHome} from 'react-icons/ai'
import { GrCircleInformation } from "react-icons/gr"
import { HiPhone } from "react-icons/hi"
import { MdOutlineLocalOffer } from "react-icons/md"
import Link from "next/link"
import Image from "next/image"

import logo from '../../../../public/logo.svg'


export default function Footer(){


    return (
        <div className={styles.footer}>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_top}>
                    <div className={styles.company_logo_name}>
                        <Link href={"/"} className={styles.logo}>
                            <Image 
                                src={logo}
                                alt='Logo Plast-Fol'
                            />
                        </Link>
                        <div style={{paddingLeft: "1em"}}>
                            P.P.H.U. PLAST-FOL s.c<br />
                            Mariusz i Artur Rzeźnik
                        </div>
                    </div>
                    <div className={styles.bottom_nav}>
                        <Link href='/'><AiOutlineHome /> Strona Główna</Link>
                        <Link href='/o-nas' ><GrCircleInformation /> O nas</Link>   
                        <Link href='/oferta' ><MdOutlineLocalOffer /> Oferta</Link>
                        <Link href='/kontakt' ><HiPhone /> Kontakt</Link>
                    </div>
                </div>
                
                <div className={styles.author}>
                    Projekt i realizacja: Dariusz Rzeźnik <a href="mailto:rz.dariusz@gmail.com">rz.dariusz@gmail.com</a>
                </div>
            </div>
        </div>
    )
}