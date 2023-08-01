import style from "./MainPage.module.scss";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import UserMenu from "../../components/UserMenu/UserMenu";
import Sidebar from "../../components/Sidebar/Sidebar";
import Gallery from "../../components/Gallery/Gallery";
import {useState} from "react";

const MainPage = () => {
    const [albumId, setAlbumId] = useState('1');

    const handleAlbumIdSubmit = (value) => {
        setAlbumId(value);
    };

    return(
        <div className={style.page}>
            <Header onAlbumIdSubmit={handleAlbumIdSubmit}></Header>
            <div className={style.content}>
                <Menu/>
                <UserMenu/>
                <div className={style.frame}>
                    <Sidebar/>
                    <Gallery albumId={albumId}/>
                </div>
            </div>


        </div>
    )
}

export default MainPage