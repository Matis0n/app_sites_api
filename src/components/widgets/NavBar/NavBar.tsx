import styles from "./NavBar.module.scss";
import closeIcon from '../../chared/img/close.svg';
import {FC} from "react";

const category = ["Агентство", "Услуги", "Кейсы", "Блог", "Контакты"];

interface IProps {
    isOpenMenu: boolean
    toggleMenu: () => void
}

const NavBar: FC<IProps> = ({isOpenMenu, toggleMenu}) => {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.nav__menu} ${isOpenMenu ? styles['nav__menu--show'] : ''}`}>
                <img className={styles.nav__close} src={closeIcon} alt="close" onClick={toggleMenu}/>
                <div className={styles.nav__category}>
                    {category.map(item => (
                        <div key={item} className={styles['nav__category--item']}>
                            <ul>
                                <li>{item}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                <hr className={styles.nav__separator}/>
                <div className={styles.nav__contact}>
                    <p className={styles['nav__contact--paragraph']}>Контакты:</p>
                    <p className={styles['nav__contact--paragraph']}>+7 999 123 45 67</p>
                    <p className={styles['nav__contact--paragraph']}>hello@cyberia.studio</p>
                    <p className={styles['nav__contact--paragraph']}>ул.Ярных, д.35, оф.10</p>
                </div>
                <hr className={styles.nav__separator}/>
            </div>
        </nav>
    );
}

export default NavBar;
