import Button from "../UI/Button/Button";
import explore from "../../icons/explore.svg";
import star from "../../icons/star.svg";
import messenger from "../../icons/messenger.svg";
import trending from "../../icons/trending.svg";
import publicon from "../../icons/publicon.svg";
import city from "../../icons/city.svg";
import addCircle from "../../icons/addCircle.svg";
import man from "../../icons/man.jpeg";
import lady1 from "../../icons/lady1.png";
import lady2 from "../../icons/lady2.png";
import man2 from "../../icons/man2.png";

import style from "./Menu.module.scss";


const Menu = () => {
    return (
        <div className={style.menu}>
            <div className={style.menuButton}>
                <Button svgPath={explore}/>
                <Button svgPath={star}/>
                <Button svgPath={messenger}/>
                <Button svgPath={trending}/>
                <Button svgPath={publicon}/>
                <Button svgPath={city}/>
            </div>

            <div className={style.menuUsers}>
                <div className={style.menuUsersItem}>
                    <img className={style.menuUsersIcon} src={man}  alt=""/>
                </div>
                <div className={style.menuUsersItem}>
                    <img className={style.menuUsersIcon} src={lady1} alt=""/>
                </div>
                <div className={style.menuUsersItem}>
                    <img className={style.menuUsersIcon} src={lady2} alt=""/>
                </div>
                <div className={style.menuUsersItem}>
                    <img className={style.menuUsersIcon} src={man2} alt=""/>
                </div>

                <Button svgPath={addCircle}/>
            </div>
        </div>

    )
}

export default Menu