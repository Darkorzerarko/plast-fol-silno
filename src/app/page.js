import styles from './page.module.scss'
import nextConfig from '../../next.config';

import NavBar from './components/nav-bar/nav-bar'
import CompanyAge from './components/company-age/company-age';
import Gallery from './components/gallery/gallery';
import LocationEmbeded from './components/company-location/company_location';
import Footer from './components/footer/footer';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { TbMessageCircleQuestion } from 'react-icons/tb'

import { Anton } from 'next/font/google';
const anton = Anton({
  subsets: ['latin'],
  weight: '400' 
})

export default function Home() {

  return (
    <>
      <NavBar quote={"Folie i Worki Foliowe na Miarę Twoich Potrzeb"} height={"40rem"}>
        
        Producent foli i opakowań foliowych <br />P.P.H.U. PLAST-FOL s.c Mariusz i Artur Rzeźnik
      </NavBar>
      
      <div className={styles.content}>

        <div className={styles.company_age_wrapper}>
          <div className={styles.company_age}>
            <div className={[styles.company_age_graphic, anton.className].join(' ')}><CompanyAge/></div>
            <div className={styles.company_age_description}>
              <div className={styles.top}>
                O NAS
                <h1><CompanyAge/> lat doświadczenia</h1>  
              </div>
              <div className={styles.bottom}>
                Firma Plast-Fol ma swoje korzenie w malowniczym Silnie, położonym w województwie pomorskim. 
                Z każdym rokiem nasza firma udowadnia, że przyszłość przemysłu może być bardziej ekologiczna i odpowiedzialna.
              </div>
              <a href={nextConfig.basePath+"/o-nas"}>Dowiedz się więcej <BsFillArrowRightCircleFill /></a>
            </div>
          </div>
        </div>

        <div className={styles.company_activities_wrapper}>
          <div className={styles.company_activities}>
            <div className={styles.company_activities_description}>
              <div className={styles.top}>
                <h1>Profil Działalności</h1>
              </div>
              <div className={styles.bottom}>
                Do produkcji naszych produktów używamy własnoręcznie wytworzonego regranulatu <b>LDPE</b>.
                Dbamy o to by był on wysokiej jakości co przekłada się na jakość naszych produktów.<br />
                Produkujemy między innymi:<br />
                <ul>
                  <li>Taśmę foliową</li>
                  <li>Rękaw foliowy</li>
                  <li>Półrękaw foliowy</li>
                  <li>Worki foliowe</li>
                </ul>
              </div>
              <a href={nextConfig.basePath+"/oferta"}>Poznaj szczegóły naszej oferty <BsFillArrowRightCircleFill /></a>
            </div>
            <Gallery />
          </div>
        </div>

        <div className={styles.contact_wrapper}>
          <div className={styles.contact}>
            <div className={styles.contact_data}>
              <h1>
                Zainteresowany?<br />
              </h1>
              a może<br/>
              <h1>Masz pytanie?</h1>
              <a href={nextConfig.basePath+"/kontakt"}>Skontaktuj się z nami <BsFillArrowRightCircleFill /></a>
            </div>
            <TbMessageCircleQuestion className={styles.contact_svg}/>
          </div>
        </div>

        <LocationEmbeded>
          Tu jesteśmy
        </LocationEmbeded>
      </div>  
      <Footer />
    </>
  )
}
