import { Header } from "../../components/Header";
import { ItemSlide } from "../../components/ItemSlide";

import ParamourMobileImage from '../../assets/home/mobile/image-hero-paramour.jpg'
import FederalMobileImage from '../../assets/home/mobile/image-hero-federal.jpg'
import SerapahMobileImage from '../../assets/home/mobile/image-hero-seraph.jpg'
import TrinityMobileImage from '../../assets/home/mobile/image-hero-trinity.jpg'
import SmallMobileTeamImage from '../../assets/home/mobile/image-small-team.jpg'

import ParamourTabletImage from '../../assets/home/tablet/image-hero-paramour.jpg'
import FederalTabletImage from '../../assets/home/tablet/image-hero-federal.jpg'
import SerapahTabletImage from '../../assets/home/tablet/image-hero-seraph.jpg'
import TrinityTabletImage from '../../assets/home/tablet/image-hero-trinity.jpg'
import SmallTabletTeamImage from '../../assets/home/tablet/image-small-team.jpg'

import ParamourDesktopImage from '../../assets/home/desktop/image-hero-paramour.jpg'
import FederalDesktopImage from '../../assets/home/desktop/image-hero-federal.jpg'
import SerapahDesktopImage from '../../assets/home/desktop/image-hero-seraph.jpg'
import TrinityDesktopImage from '../../assets/home/desktop/image-hero-trinity.jpg'
import SmallDesktopTeamImage from '../../assets/home/desktop/image-small-team.jpg'
import welcomeDesktopImage from '../../assets/home/desktop/image-welcome.jpg'

import DelSolMobileImage from '../../assets/portfolio/mobile/image-del-sol.jpg'
import DelSolTabletImage from '../../assets/portfolio/tablet/image-del-sol.jpg'
import DelSolDesktopImage from '../../assets/portfolio/desktop/image-del-sol.jpg'

import TowerMobile from '../../assets/portfolio/mobile/image-228b.jpg'
import TowerTablet from '../../assets/portfolio/tablet/image-228b.jpg'
import TowerDesktop from '../../assets/portfolio/desktop/image-228b.jpg'

import PrototypeMobile from '../../assets/portfolio/mobile/image-prototype.jpg'
import PrototypeTablet from '../../assets/portfolio/tablet/image-prototype.jpg'
import PrototypeDesktop from '../../assets/portfolio/desktop/image-prototype.jpg'


import './style.css'
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { PorfolioItem } from "../../components/PortfolioItem";
import { Slide } from "../../components/Slide";
import { SideMark } from "../../components/SideMark";

export function Home() {

    const [imageParamour,setImageParamour] = useState(ParamourMobileImage)
    const [imageFederal,setImageFederal] = useState(FederalMobileImage)
    const [imageSeraph,setImageSeraph] = useState(SerapahMobileImage)
    const [imageTrinity,setImageTrinity] = useState(TrinityMobileImage)

    const [imageSmall,setImageSmall] = useState(SmallMobileTeamImage)

    const [imageDelSol,setImageDelSol] = useState(DelSolMobileImage)
    const [imageTower,setImageTower] = useState(TowerMobile)
    const [imagePrototype,setImagePrototype] = useState(PrototypeMobile)


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
                setImageParamour(ParamourDesktopImage)
                setImageFederal(FederalDesktopImage)
                setImageSeraph(SerapahDesktopImage)
                setImageTrinity(TrinityDesktopImage)

                setImageSmall(SmallDesktopTeamImage)

                setImageDelSol(DelSolDesktopImage)
                setImagePrototype(PrototypeDesktop)
                setImageDelSol(DelSolDesktopImage)
            }

            else if(wdth >= 760) {
                setImageParamour(ParamourTabletImage)
                setImageFederal(FederalTabletImage)
                setImageSeraph(SerapahTabletImage)
                setImageTrinity(TrinityTabletImage)

                setImageSmall(SmallTabletTeamImage)

                setImageDelSol(DelSolTabletImage)
                setImagePrototype(PrototypeTablet)
                setImageDelSol(DelSolTabletImage)
            }
            else {
                setImageParamour(ParamourMobileImage)
                setImageFederal(FederalMobileImage)
                setImageSeraph(SerapahMobileImage)
                setImageTrinity(TrinityMobileImage)

                setImageSmall(SmallMobileTeamImage)

                setImageDelSol(DelSolMobileImage)
                setImagePrototype(PrototypeMobile)
                setImageDelSol(DelSolMobileImage)
            }
        })
      }, [screenSize])

    return(
        <div className="home-container">
            <SideMark text="HOME" />
            <header>
                <Header/>
            </header>
            <main className="home-container-main">
                <section className="home-container-showing-all-project">
                    <Slide />
                </section>
                <section className="home-container-welcome">
                    <h4 className="fade-title">Welcome</h4>
                    <div className="text-content">
                        <div className="text">
                            <h1>Welcome to Arch Studio</h1>
                            <p>We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.</p>
                            <p>We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.</p>
                        </div>
                        <div className="image-content">
                            <img src={welcomeDesktopImage} alt="" />
                        </div>
                    </div>
                </section>
                <section className="home-container-component-about-us">
                    <div className="image-content">
                        <img src={SmallMobileTeamImage} alt="" />
                    </div>
                    <div className="text-content">
                        <span>Small Team,big ideas</span>
                        <button>About us</button>
                    </div>
                </section>
                <section className="home-container-featured">
                    <div className="home-container-featured-nav">
                        <h2>Featured</h2>
                        <button>See all</button>
                    </div>
                    <div className="home-container-featured-content">
                            <PorfolioItem 
                                text="Project Del Sol"
                                image={imageDelSol}
                                index={'1'}
                            />
                            <PorfolioItem 
                                text="Project Del Sol"
                                image={imageTower}
                                index={'2'}
                            />
                            <PorfolioItem 
                                text="Project Del Sol"
                                image={imagePrototype}
                                index={'3'}
                            />
                        <button>See All</button>
                    </div>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}