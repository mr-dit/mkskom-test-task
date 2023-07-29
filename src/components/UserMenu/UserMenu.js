import style from "./UserMenu.module.scss"
import person from "../../icons/person.svg"
import moreHoriz from "../../icons/moreHoriz.svg"
import man from "../../icons/man.jpeg"
import dashboard from "../../icons/dashboard.svg"
import invoice from "../../icons/invoice.svg"
import cloud from "../../icons/cloud.svg"
import fire from "../../icons/fire.svg"
import group from "../../icons/group.svg"
import message from "../../icons/message.svg"
import settings from "../../icons/settings.svg"

import Button from "../UI/Button/Button";
import User from "../User/User";
import UserMenuListItem from "../UserMenuListItem/UserMenuListItem";
import Social from "../Social/Social";

const UserMenu = () => {
    return (
        <div className={style.menuUser}>
            <div className={style.menuUserHead}>
                <Button svgPath={person} size={"small"}/>
                <Button svgPath={moreHoriz} size={"small"}/>
            </div>
            <div>
                <User img={man}></User>
            </div>
            <div className={style.menuUserButtons}>
                <div className={style.menuUserList}>
                    <div className={style.menuUserListItem}>
                        <UserMenuListItem svgPath={dashboard} text={"Dashboard"}/>
                        <UserMenuListItem svgPath={dashboard} text={"Notes"}/>
                    </div>
                    <div className={style.menuUserListItem}>
                        <UserMenuListItem svgPath={invoice} text={"Invoice"}/>
                        <UserMenuListItem svgPath={cloud} text={"Files"}/>
                    </div>
                    <div className={style.menuUserListItem}>
                        <UserMenuListItem svgPath={fire} text={"Events"}/>
                        <UserMenuListItem svgPath={group} text={"Teams"}/>
                    </div>
                    <div className={style.menuUserListItem}>
                        <UserMenuListItem svgPath={message} text={"Message"}/>
                        <UserMenuListItem svgPath={settings} text={"Settings"}/>
                    </div>
                </div>
                <div className={style.menuUserFooter}>
                    <Social/>
                </div>
            </div>
        </div>)
}

export default UserMenu