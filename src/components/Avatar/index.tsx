import { LinkedinLogo, TwitterLogo } from "phosphor-react";


interface propsAvatar {
    avatar : string
    name : string
    job : string
}

export function Avatar({name,job,avatar}:propsAvatar) {
    return(
        <div className="leader-item">
            <img src={avatar} />
            <p>{name}</p>
            <span>{job}</span>
            <div className="icons">
                <LinkedinLogo />
                <TwitterLogo />
            </div>
        </div>
    )
}