import { useEffect,useState } from "react"

import ParamourMobileImage from '../../assets/home/mobile/image-hero-paramour.jpg'
import FederalMobileImage from '../../assets/home/mobile/image-hero-federal.jpg'
import SerapahMobileImage from '../../assets/home/mobile/image-hero-seraph.jpg'
import TrinityMobileImage from '../../assets/home/mobile/image-hero-trinity.jpg'

import ParamourTabletImage from '../../assets/home/tablet/image-hero-paramour.jpg'
import FederalTabletImage from '../../assets/home/tablet/image-hero-federal.jpg'
import SerapahTabletImage from '../../assets/home/tablet/image-hero-seraph.jpg'
import TrinityTabletImage from '../../assets/home/tablet/image-hero-trinity.jpg'

import ParamourDesktopImage from '../../assets/home/desktop/image-hero-paramour.jpg'
import FederalDesktopImage from '../../assets/home/desktop/image-hero-federal.jpg'
import SerapahDesktopImage from '../../assets/home/desktop/image-hero-seraph.jpg'
import TrinityDesktopImage from '../../assets/home/desktop/image-hero-trinity.jpg'

import { ItemSlide } from "../ItemSlide"

import './style.css'

export function Slide() {const [imageParamour,setImageParamour] = useState(ParamourMobileImage)
    const [imageFederal,setImageFederal] = useState(FederalMobileImage)
    const [imageSeraph,setImageSeraph] = useState(SerapahMobileImage)
    const [imageTrinity,setImageTrinity] = useState(TrinityMobileImage)
    const [pos,setPos] = useState(0)

    const objProjects = [
        {image:imageParamour,tilte:'Project Paramour',text:'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture'},
        {image:imageSeraph,tilte:'Seraph Station',text:'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architectureThe Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.'},
        {image:imageFederal,tilte:'Federal II Tower',text:'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.'},
        {image:imageTrinity,tilte:'Trinity Bank Tower',text:'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.'},
    ]

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
            }

            else if(wdth >= 760) {
                setImageParamour(ParamourTabletImage)
                setImageFederal(FederalTabletImage)
                setImageSeraph(SerapahTabletImage)
                setImageTrinity(TrinityTabletImage)
            }
            else {
                setImageParamour(ParamourMobileImage)
                setImageFederal(FederalMobileImage)
                setImageSeraph(SerapahMobileImage)
                setImageTrinity(TrinityMobileImage)
            }
        })
      }, [screenSize])

    return(
        <div className="slide-container">
            {objProjects.map((value,key)=>(
                <ItemSlide 
                    image={value.image} 
                    isVisible={key === pos ? true : false}
                    text={value.text}
                    title={value.tilte}
                />
            ))}
            <div className="buttons-slides">
                <button onClick={()=>{setPos(0)}}>1</button>
                <button onClick={()=>{setPos(1)}}>2</button>
                <button onClick={()=>{setPos(2)}}>3</button>
                <button onClick={()=>{setPos(3)}}>4</button>
            </div>
        </div>
    )
}