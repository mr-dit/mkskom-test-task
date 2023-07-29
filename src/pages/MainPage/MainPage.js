import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import style from "./MainPage.module.scss"

const MainPage = () => {
    return(
        <div className={style.page}>
            <Header></Header>

            <div className={style.content}>
                <Menu/>

            </div>


        </div>
    )
}

export default MainPage