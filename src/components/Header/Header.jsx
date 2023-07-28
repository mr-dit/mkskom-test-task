import style from "./Header.module.scss"
import SVGButton from "../UI/Button/Button";
import burger from "../../icons/burger.svg"
import search from "../../icons/search.svg"
import navigation from "../../icons/navigation.svg"
import notification from "../../icons/notification.svg"
import cancel from "../../icons/cancel.svg"
import Input from "../UI/Input/Input";

const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <SVGButton svgPath={burger}></SVGButton>
                    Constructor
                </div>
                <div className={style.menu}>
                    <ul className={style.menuList}>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">User Policy</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                    <svg className="icon" width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.33337 13C8.23337 13 7.33337 13.9 7.33337 15C7.33337 16.1 8.23337 17 9.33337 17C10.4334 17 11.3334 16.1 11.3334 15C11.3334 13.9 10.4334 13 9.33337 13ZM21.3334 13C20.2334 13 19.3334 13.9 19.3334 15C19.3334 16.1 20.2334 17 21.3334 17C22.4334 17 23.3334 16.1 23.3334 15C23.3334 13.9 22.4334 13 21.3334 13ZM15.3334 13C14.2334 13 13.3334 13.9 13.3334 15C13.3334 16.1 14.2334 17 15.3334 17C16.4334 17 17.3334 16.1 17.3334 15C17.3334 13.9 16.4334 13 15.3334 13Z" fill="#C3CAD9"/>
                    </svg>
                </div>

                <Input leftIcon={search} rightIcon={navigation}
                       placeholder={'Search Transactions and Documents'}></Input>

                <div className={style.right}>
                    <div className={style.user}>
                        <svg className="icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15 5C9.48 5 5 9.48 5 15C5 20.52 9.48 25 15 25C20.52 25 25 20.52 25 15C25 9.48 20.52 5 15 5ZM15 8C16.66 8 18 9.34 18 11C18 12.66 16.66 14 15 14C13.34 14 12 12.66 12 11C12 9.34 13.34 8 15 8ZM15 22.2C12.5 22.2 10.29 20.92 9 18.98C9.03 16.99 13 15.9 15 15.9C16.99 15.9 20.97 16.99 21 18.98C19.71 20.92 17.5 22.2 15 22.2Z" fill="#C3CAD9"/>
                        </svg>
                        Clayton Santos
                    </div>

                    <SVGButton svgPath={notification}/>
                    <SVGButton svgPath={cancel}/>
                </div>

            </div>

        </header>
    );
};

export default Header;
