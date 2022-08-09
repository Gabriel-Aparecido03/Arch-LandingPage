import './style.css'

interface PropsItemSlide {
    image: any,
    isVisible : boolean
    title:string
    text:string
}

export function ItemSlide({image,isVisible,title,text}:PropsItemSlide) {
    return (
        <div className="item-slide" style={{display:isVisible?'flex':'none'}}>
            <img src={image} alt="" />
            <div className="text-content-slide-item">
                <h2>{title}</h2>
                <p>{text}</p>
                <button>See Our Portfolio</button>
            </div>
        </div>
    )
}