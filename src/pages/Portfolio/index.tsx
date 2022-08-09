import { useState,useEffect } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import SeraphStationMobile from '../../assets/portfolio/mobile/image-seraph.jpg'
import EeBoxMobile from '../../assets/portfolio/mobile/image-eebox.jpg'
import FederalTowerMobile from '../../assets/portfolio/mobile/image-federal.jpg'
import ProjectDelSolMobile from '../../assets/portfolio/mobile/image-del-sol.jpg'
import LePrototypeMobile from '../../assets/portfolio/mobile/image-prototype.jpg'
import Tower228bMobile from '../../assets/portfolio/mobile/image-228b.jpg'
import GrandHotemMobile from '../../assets/portfolio/mobile/image-edelweiss.jpg'
import NetcryToweMobile from '../../assets/portfolio/mobile/image-netcry.jpg'
import HypersMobile from '../../assets/portfolio/mobile/image-hypers.jpg'
import SXIVTower from '../../assets/portfolio/mobile/image-sxiv.jpg'
import TrinityBankMobile from '../../assets/portfolio/mobile/image-trinity.jpg'
import ParamourMobile from '../../assets/portfolio/mobile/image-paramour.jpg'

import SeraphStationTablet from '../../assets/portfolio/tablet/image-seraph.jpg'
import EeBoxTablet from '../../assets/portfolio/tablet/image-eebox.jpg'
import FederalTowerTablet from '../../assets/portfolio/tablet/image-federal.jpg'
import ProjectDelSolTablet from '../../assets/portfolio/tablet/image-del-sol.jpg'
import LePrototypeTablet from '../../assets/portfolio/tablet/image-prototype.jpg'
import Tower228bTablet from '../../assets/portfolio/tablet/image-228b.jpg'
import GrandHotemTablet from '../../assets/portfolio/tablet/image-edelweiss.jpg'
import NetcryToweTablet from '../../assets/portfolio/tablet/image-netcry.jpg'
import HypersTablet from '../../assets/portfolio/tablet/image-hypers.jpg'
import SXIVTowerTablet from '../../assets/portfolio/tablet/image-sxiv.jpg'
import TrinityBankTablet from '../../assets/portfolio/tablet/image-trinity.jpg'
import ParamourTablet from '../../assets/portfolio/tablet/image-paramour.jpg'

import SeraphStationDesktop from '../../assets/portfolio/desktop/image-seraph.jpg'
import EeBoxDesktop from '../../assets/portfolio/desktop/image-eebox.jpg'
import FederalTowerDesktop from '../../assets/portfolio/desktop/image-federal.jpg'
import ProjectDelSolDesktop from '../../assets/portfolio/desktop/image-del-sol.jpg'
import LePrototypeDesktop from '../../assets/portfolio/desktop/image-prototype.jpg'
import Tower228bDesktop from '../../assets/portfolio/desktop/image-228b.jpg'
import GrandHotemDesktop from '../../assets/portfolio/desktop/image-edelweiss.jpg'
import NetcryToweDesktop from '../../assets/portfolio/desktop/image-netcry.jpg'
import HypersDesktop from '../../assets/portfolio/desktop/image-hypers.jpg'
import SXIVTowerDesktop from '../../assets/portfolio/desktop/image-sxiv.jpg'
import TrinityBankDesktop from '../../assets/portfolio/desktop/image-trinity.jpg'
import ParamourDesktop from '../../assets/portfolio/desktop/image-paramour.jpg'

import './style.css'

export function Portfolio() {
    const [seraph,setSeraph] = useState('')
    const [eebox,setEebox] = useState('')
    const [federal,setFederal] = useState('')
    const [delsol,setDelSol] = useState('')
    const [prototype,setPrototype] = useState('')
    const [tower,setTower] = useState('')
    const [grandHotel,setGrandHotel] = useState('')
    const [hypers,setHypers] = useState('')
    const [sxiv,setSxiv] = useState('')
    const [bank,setBank] = useState('')
    const [paramour,setParamour] = useState('')
    const [netcry,setNetCry] = useState('')

    const [screenSize, getDimension] = useState(760);
      const setDimension = () => {
        getDimension(window.innerWidth)
      }
      
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        let wdth = window.innerWidth
        return(() => {
            window.removeEventListener('resize', setDimension);
            if(wdth >= 980 ) {
                setSeraph(SeraphStationDesktop)
                setEebox(EeBoxDesktop)
                setFederal(FederalTowerDesktop)
                setDelSol(ProjectDelSolDesktop)
                setPrototype(LePrototypeDesktop)
                setTower(Tower228bDesktop)
                setGrandHotel(GrandHotemDesktop)
                setHypers(HypersDesktop)
                setSxiv(SXIVTowerDesktop)
                setBank(TrinityBankDesktop)
                setParamour(ParamourDesktop)
                setNetCry(NetcryToweDesktop)
            }

            else if(wdth >= 760) {
                setSeraph(SeraphStationTablet)
                setEebox(EeBoxTablet)
                setFederal(FederalTowerTablet)
                setDelSol(ProjectDelSolTablet)
                setPrototype(LePrototypeTablet)
                setTower(Tower228bTablet)
                setGrandHotel(GrandHotemTablet)
                setHypers(HypersTablet)
                setSxiv(SXIVTowerTablet)
                setBank(TrinityBankTablet)
                setParamour(ParamourTablet)
                setNetCry(NetcryToweTablet)
            }
            else {
                setSeraph(SeraphStationMobile)
                setEebox(EeBoxMobile)
                setFederal(FederalTowerMobile)
                setDelSol(ProjectDelSolMobile)
                setPrototype(LePrototypeMobile)
                setTower(Tower228bMobile)
                setGrandHotel(GrandHotemMobile)
                setHypers(HypersMobile)
                setSxiv(SXIVTower)
                setBank(TrinityBankMobile)
                setParamour(ParamourMobile)
                setNetCry(NetcryToweMobile)
            }
        })
      }, [screenSize])

    return (
        <div className="portfolio-container">
            <div className="side-mark">
                <span>PORTFOLIO</span>
            </div>
            <header>
                <Header/>
            </header>
            <main>
                <div className="portfolio-container-collection">
                    <div className="portfolio-item">
                        <div className="image-content">
                            <img src={seraph} alt="" />
                        </div>
                        <div className="text-content">
                            <h3>Seraph Station</h3>
                            <span>September 2019</span>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image-content">
                            <img src={eebox} alt="" />
                        </div>
                        <div className="text-content">
                            <h3>Eebox Building</h3>
                            <span>August 2017</span>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image-content">
                            <img src={federal} alt="" />
                        </div>
                        <div className="text-content">
                            <h3>Federal II Tower</h3>
                            <span>March 2017</span>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image-content">
                            <img src={delsol} alt="" />
                        </div>
                        <div className="text-content">
                            <h3>Project Del Sol</h3>
                            <span>January 2015</span>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image-content">
                            <img src={prototype} alt="" />
                        </div>
                        <div className="text-content">
                            <h3>Eebox Building</h3>
                            <span>October 2015</span>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image-content">
                            <img src={tower} alt="" />
                        </div>
                        <div className="text-content">
                            <h3>228B Tower</h3>
                            <span>April 2015</span>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image-content">
                            <img src={grandHotel} alt="" />
                        </div>
                        <div className="text-content">
                            <h3>Grand Edelweiss Hotel</h3>
                            <span>December 2013</span>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image-content">
                            <img src={hypers} alt="" />
                        </div>
                        <div className="text-content">
                            <h3>Hypers</h3>
                            <span>January 2012</span>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image-content">
                            <img src={sxiv} alt="" />
                        </div>
                        <div className="text-content">
                            <h3>SXIV Tower</h3>
                            <span>March 2011</span>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image-content">
                            <img src={bank} alt="" />
                        </div>
                        <div className="text-content">
                            <h3>Trinity Bank Tower</h3>
                            <span>September 2010</span>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image-content">
                            <img src={paramour} alt="" />
                        </div>
                        <div className="text-content">
                            <h3>Project Paramour</h3>
                            <span>February 2008</span>
                        </div>
                    </div>
                    
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}