import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import style from "./MainPage.module.scss"
import UserMenu from "../../components/UserMenu/UserMenu";
import Sidebar from "../../components/Sidebar/Sidebar";

const MainPage = () => {
    return(
        <div className={style.page}>
            <Header></Header>

            <div className={style.content}>
                <Menu/>
                <UserMenu/>
                <div className={style.frame}>
                    <Sidebar/>
                </div>
            </div>


        </div>
    )
}

export default MainPage