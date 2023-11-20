import styles from './page.module.scss'

import { MdRecycling, MdOutlineVerifiedUser } from "react-icons/md"
import nextConfig from '../../../next.config';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

import NavBar from '../components/nav-bar/nav-bar';
import CompanyAge from '../components/company-age/company-age'
import Footer from '../components/footer/footer';
import Image from 'next/image';
import Link from 'next/link';

import aboutUs1 from "../../../public/about-us1.webp"

export default function AboutUs() {

  return (
    <>
      <NavBar quote={"Poznaj nas"} height={"25rem"}>
        
      </NavBar>
      
      <div className={styles.content}>
        <div className={styles.company_information_wrapper}>
          <h1>
            Producent foli i opakowań foliowych<br/>
            P.P.H.U. PLAST-FOL s.c Mariusz i Artur Rzeźnik
          </h1>
          <div className={styles.company_information}>
            <div className={styles.left}>
              Istniejemy na rynku od 2 maja 2005 roku. Od ponad <CompanyAge /> lat działalności specjalizujemy się w wytwarzaniu produktów z tworzywa <b>LDPE</b>. 
              Staramy się iść z duchem czasu. Stale udoskonalamy jakość naszych produktów oraz maszyn mając w świadomości znaczenie ekologii.
              Jesteśmy przejrzystą firmą, w której najważniejszymi wartościami jest współpraca i zrozumienie. 
              Nasze wyroby produkowane są na zamówienie zgodnie z indywidualnymi oczekiwaniami i potrzebami Klientów.     
              Posiadamy własny transport, którym dostarczamy nasze produkty na całą Polskę.
            </div>
            <div className={styles.right}>
              <h2>Dane rejestrowe:</h2>
              <div className={styles.data}>
                <h3>
                  <MdOutlineVerifiedUser /> NIP: 5551948312
                </h3>
                <h3>
                  <MdOutlineVerifiedUser /> REGON: 220042413
                </h3>
                <h3>
                  <MdOutlineVerifiedUser /> Nr Rejestrowy BDO: 000004215 
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.about_us_img}>
          <div className={styles.image_wrapper}>
            <Image 
              src={aboutUs1}
              alt="Starannie zapakowane rolki z folią"
              fill={true}
            />
          </div>
          <h2>Folie i Worki Foliowe na Miarę Twoich Potrzeb</h2>
          {/* <h2>Jakość naszych produktów przekłada się również na jakość ich pakowania</h2> */}
        </div>

        <div className={styles.about_us_wrapper}>
          <h1>Historia</h1>
          Firma powstała jako wynik połączenia pasji i zaangażowania dwóch braci.
          Początkowo skupiała się na produkcji wyrobów foliowych z gotowych tworzyw sztucznych. 
          Jednak z upływem czasu w miarę rosnącej świadomości ekologicznej, zrozumienie potrzeby zrównoważonego rozwoju stało się oczywiste. <br /><br />

          Istotnym elementem naszej działalności stało się pozyskiwanie i recykling odpadów z tworzyw sztucznych oraz przywracanie ich do ponownego wykorzystania w produkcji. 
          To wszystko po to by dać z pozoru nikomu niepotrzebnym odpadom drugie życie.
          Wiemy, że z plastiku należy mądrze korzystać, dlatego dbamy o to, by każdy poddany recyklingowi odpad z tworzywa sztucznego przyczyniał się do czystszej planety.
        </div>
        
        <div className={styles.about_us_production_wrapper}>
          <div className={styles.about_us_production}>
            <div className={styles.image_wrapper}>
              <MdRecycling />
            </div>
            <div className={styles.text}>
              <h2>Recykling i produkcja</h2>
              Wytworzony podczas recyklingu regranulat używany jest do wytwarzania foli LDPE, która jest głównym elementem naszej produkcji. 
              Z niej tworzy się następnie taśmy, rękawy czy worki.
              <Link href="/oferta">Poznaj szczegóły naszej oferty <BsFillArrowRightCircleFill /></Link>

            </div>
          </div>
        </div>
      </div>  
      <Footer />
    </>
  )
}
 