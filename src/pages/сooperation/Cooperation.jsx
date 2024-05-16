import React, { useState } from "react";
import "./сooperation.scss";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import SidebarList from "../../components/sidebarList/SidebarList";
import routes from "../../variables/routes";
import FormInput from "../../components/formInput/FormInput";
import FormButton from "../../components/buttons/formButton/FormButton";

const list = [
    { id: 1, title: "Стати дилером" },
    { id: 2, title: "Стати співробітником" },
];

const Cooperation = () => {
    const [name, setName] = useState("");
    const [vacancy, setVacancy] = useState("");
    const [phone, setPhone] = useState("");

    const breadCrumbsLinks = [{ title: "Співпаця", route: routes.COOPERATION }];
    return (
        <div className="content-wrapper">
            <div className="cooperation">
                <div className="cooperation__sidebar">
                    <BreadCrumbs links={breadCrumbsLinks} />
                    <div className="cooperation__sidebar-title">Контакти</div>
                    <div className="cooperation__sidebar-list">{<SidebarList list={list} />}</div>
                </div>
                <div className="cooperation__content">
                    <div className="cooperation__content-form">
                        <div className="cooperation__content-form-title">Стати співробітником</div>
                        <div className="cooperation__content-form-form">
                            <FormInput value={name} setValue={setName} ph={"ПБІ"} />
                            <FormInput value={vacancy} setValue={setVacancy} ph={"Посада"} />
                            <FormInput value={phone} setValue={setPhone} ph={"Номер телефону"} isPhone={true} />
                        </div>
                        <div className="cooperation__content-form-btn">
                            <FormButton title={"Відправити заявку"} onPress={() => {}} />
                        </div>
                    </div>
                    <div className="cooperation__content-list">
                        <div className="cooperation__content-list-title">Вакансії</div>
                        {list.map((listItem) => {
                            return (
                                <div
                                    key={listItem.id}
                                    onClick={() => {}}
                                    className="cooperation__content-list-item btn-animation"
                                >
                                    {listItem.title}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cooperation;
