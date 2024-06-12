import styles from "./Footer.module.scss";
import logo from './../../assets/img/logo.svg';
import {Col, Container, Row} from "reactstrap";

const contactList = ['+7 999 123 45 67', 'hello@cyberia.studio', 'ул.Ярных, д.35, оф.10'];
const linkList = ['Агентство', 'Услуги', 'Кейсы'];
const listLinkTwo = ['Блог', 'Контакты'];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row>
                    <Col lg='12' md='12' sm='12'>
                        <div className={styles.footer__content}>
                            <div className={styles.footer__info}>
                                <img src={logo} alt="Cyberia" className={styles.footer__logo}/>
                                <h1 className={styles.footer__text}> Веб-разработка и усиление IT-команд</h1>
                            </div>
                            <div className={styles.footer__contact}>
                                {contactList.map(item => (
                                    <span key={item} className={styles['footer__contact--item']}>{item}</span>
                                ))}
                            </div>
                            <div className={styles.footer__nav}>
                                {linkList.map(item => (
                                    <span key={item} className={styles['footer__nav--item']}>{item}</span>
                                ))}
                            </div>
                            <div className={styles.footer__nav}>
                                {listLinkTwo.map(item => (
                                    <span key={item} className={styles['footer__nav--item']}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
