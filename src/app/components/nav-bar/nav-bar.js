import SideNavBar from './side-bar'
import nextConfig from '../../../../next.config'

import styles from './nav-bar.module.scss'
import { AiOutlineHome} from 'react-icons/ai'
import { GrCircleInformation } from "react-icons/gr"
import { HiPhone } from "react-icons/hi"
import { MdOutlineLocalOffer } from "react-icons/md"

export default function NavBar({quote, children, height}){

    return (
        <nav className={styles.nav} style={children? {height: height}: {height: height, textAlign: "center"}}>
            <div className={styles.nav__background}>
                <div className={styles.nav__background__blend}></div>
            </div>
            <div className={styles.nav__content}>
                <div className={styles.logo}>
                    <a href={nextConfig.basePath} alt="Strona główna">
                        <img src={nextConfig.basePath+"/logo.svg"} alt='Logo Plast-Fol'/>
                    </a>
                </div>
                <div className={styles.nav_big}>
                    <a href={nextConfig.basePath+'/'} tabIndex="0"><AiOutlineHome /> Strona Główna</a>
                    <a href={nextConfig.basePath+'/o-nas'} tabIndex="0"><GrCircleInformation /> O nas</a>   
                    <a href={nextConfig.basePath+'/oferta'} tabIndex="0"><MdOutlineLocalOffer /> Oferta</a>
                    <a href={nextConfig.basePath+'/kontakt'} tabIndex="0"><HiPhone /> Kontakt</a>
                </div>
                <div className={styles.nav_small}>
                    <SideNavBar />
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