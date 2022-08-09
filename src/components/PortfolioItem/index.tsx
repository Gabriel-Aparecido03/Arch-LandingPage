interface Props {
    image : any
    text : string
    index : string
}

import './style.css'

export function PorfolioItem({image,text,index}:Props) {
    
    return (
        <div className="featured-item" style={{backgroundImage:`url(${image})`}}>
            <div className="text-content">
                <span>{index}</span>
                <h4>{text}</h4>
                <p>View All Projects</p>
            </div>
        </div>
    )
}