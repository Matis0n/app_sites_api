import styles from "./CategoryProject.module.scss";
import { Row, Col } from "reactstrap";
import {FC} from "react";
import {ICategories} from "../../../types/type.ts";

interface IProps{
    categories:ICategories[]
}

const CategoryProject:FC<IProps> = ({categories}) => {
    return (
        <Row>
            <Col lg="12" md="12" sm="12">
                <div className={styles.category}>
                    <div className={styles.category__container}>
                        {categories.map(items => (
                            <button key={items.id} className={styles['category__container--item']}>{items.name}</button>
                        ))}
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default CategoryProject;
