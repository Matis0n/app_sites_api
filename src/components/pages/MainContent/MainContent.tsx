import styles from './MainContent.module.scss'
import {Container} from "reactstrap";
import CategoryProjectContainer from "../../entities/CategoryProject/CategoryProjectContainer.tsx";
import CompletedProjectsContainer from "../../entities/СompletedProjects/СompletedProjectsContainer.tsx";
import ValidationFormContainer from "../../entities/ValidationForm/ValidationFormContainer.tsx";


const MainContent = () => {
    return (
        <div className={styles.content}>
            <Container>
                <div className={styles.content__item}>
                    <h1 className={styles['content__item--text']}>Кейсы</h1>
                </div>
                <CategoryProjectContainer />
                <CompletedProjectsContainer />
                <ValidationFormContainer />
            </Container>
        </div>
    );
}
export default MainContent