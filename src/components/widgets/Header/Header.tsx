import {useState} from 'react';
import logo from "../../chared/img/logo.svg";
import styles from "./Header.module.scss";
import {Container} from "reactstrap";
import burgerIcon from '../../chared/img/burger.svg';
import NavBar from "../NavBar/NavBar.tsx";

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <header className={styles.header}>
            <Container className={styles.header__item}>
                <img className={styles.header__logo} src={logo} alt="logo"/>
                <NavBar isOpenMenu={isOpenMenu} toggleMenu={toggleMenu}/>
                <img onClick={toggleMenu} className={styles.header__burger} src={burgerIcon} alt="burgerIcon"/>
            </Container>
        </header>
    );
}

export default Header;
