import React from "react";
import "./vacancyItem.scss";

const VacancyItem = () => {
    return (
        <div className="vacancy-item">
            <div className="vacancy-item__title">Водій-експедитор</div>
            <div className="vacancy-item__desc">
                <div className="vacancy-item__desc-txt">
                    Спеціаліст, який займається доставкою вантажів та товарів за певним маршрутом з використанням
                    автотранспорту. Він відповідає за завантаження, розвантаження, перевезення та доставку вантажів у
                    строк та в цілості. Водій-експедитор повинен мати гарне знання дорожніх...
                </div>
                <div className="vacancy-item__desc-salary">17 000 грн / міс.</div>
            </div>
        </div>
    );
};

export default VacancyItem;
