import React from "react";
import { CustomLink } from "../../components/Ui";

const NotFoundPage = () => {
    return (
        <div>
            <p>
                Упс вы наверно потерялись
            </p>

            <CustomLink to='/'>
                Вернутся на главную страницу
            </CustomLink>
        </div>
    )
};

export default NotFoundPage;