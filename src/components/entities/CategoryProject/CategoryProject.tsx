import styles from "./CategoryProject.module.scss";
import {Row, Col} from "reactstrap";
import {FC} from "react";
import {CategoriesType} from "../../../types/type.ts";

type PropsType = {
    categories: CategoriesType[]
}

const CategoryProject: FC<PropsType> = ({categories}) => {
    return (
        <Row>
            <Col lg="12" md="12" sm="12">
                <div className={styles.category}>
                    <div className={styles.category__container}>
                        {categories.map(category => (
                            <button key={category.id} className={styles['category__container--item']}>{category.name}</button>
                        ))}
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default CategoryProject;
