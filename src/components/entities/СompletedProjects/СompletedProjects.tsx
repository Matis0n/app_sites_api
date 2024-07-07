import styles from "./СompletedProjects.module.scss"
import TisksIcon from "../../chared/IconComponent/TisksIcon.tsx";
import TisksIconMobile from "../../chared/IconComponent/TisksIconMobile.tsx";
import {Row, Col} from "reactstrap";
import {ProjectsType} from "../../../types/type.ts";
import {FC} from "react";

type IProps = {
    projects: ProjectsType[]
}

const CompletedProjects: FC<IProps> = ({projects}) => {
    return (
        <Row>
            <Col lg="12" md="12" sm="12">
                <div className={styles.category}>
                    <div className={styles.category__container}>
                        {
                            projects.map(project => (
                                <div key={project.id} className={styles.category__item}>
                                    <div className={styles.category__gradient}></div>
                                    <img className={styles.category__logo} src={project.image} alt='foto'/>
                                    <div className={styles.category__block}>
                                        <span className={styles['category__block--text']}>{project.title}</span>
                                    </div>
                                    <div className={styles.category__icon}><TisksIcon/></div>
                                    <div className={styles.category__mobile}>
                                        <h1 className={styles['category__mobile--text']}>
                                            Онлайн гипермаркет. Для компании были разработаны сайт и мобильное
                                            приложение и т.д.
                                        </h1>
                                        <div className={styles['category__mobile--icon']}><TisksIconMobile/></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default CompletedProjects