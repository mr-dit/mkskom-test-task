import style from "./SidebarButton.module.scss"
import {useState} from "react";

const SidebarButton = ({name, count, isActive = false}) => {
    const [active, setActive] = useState(isActive)


    return (
        <button className={`${style.item} ${active ? style.itemActive : ''}`} onClick={() => setActive(!active)}>
            <div className={style.icon}>
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.59 7.59C13.21 7.21 12.7 7 12.17 7H7C5.9 7 5.01 7.9 5.01 9L5 21C5 22.1 5.9 23 7 23H23C24.1 23 25 22.1 25 21V11C25 9.9 24.1 9 23 9H15L13.59 7.59Z"
                        fill="#C3CAD9"
                    />
                </svg>

                <div className={style.text}>{name}</div>
            </div>

            <div className={style.count}>{count}</div>
        </button>
    )
}

export default SidebarButton