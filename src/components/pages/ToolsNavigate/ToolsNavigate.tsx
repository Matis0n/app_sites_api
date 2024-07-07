import {Container} from "reactstrap";
import styles from './ToolsNavigate.module.scss'
const ToolsNavigate=()=>{
    return(
        <Container>
            <div className={styles.tools}>
                <div className={styles.tools__item}>
                    <h1 className={styles['tools__item--text']}>Главная / Кейсы</h1>
                </div>
            </div>
        </Container>
    );
}

export default ToolsNavigate