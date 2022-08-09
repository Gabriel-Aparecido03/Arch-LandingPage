interface Props {
    text :string
}
import './style.css'
export function SideMark({text}:Props) {
    return (
        <div className="side-mark">
            <span>{text}</span>
        </div>
    )
}