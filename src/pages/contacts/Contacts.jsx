import React, { useState } from "react";
import routes from "../../variables/routes";
import SidebarList from "../../components/sidebarList/SidebarList";
import ContentSlider from "../../components/contentSlider/ContentSlider";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import "./contacts.scss";
import VacancyItem from "../../components/vacancy/vacancyItem/VacancyItem";
import FormInput from "../../components/formInput/FormInput";
import FormButton from "../../components/buttons/formButton/FormButton";

const list = [
    { id: 1, title: "м.Київ" },
    { id: 2, title: "м.Київ" },
    { id: 3, title: "м.Київ" },
    { id: 4, title: "м.Київ" },
    { id: 5, title: "м.Київ" },
];

const text =
    "Моторні на ринку України вже більше 25 років. Ми змінювались, трансформувались та зростали. Наразі ми маємо три напрямки діяльності, широку сітку дилерів та сервісних центрів...";

const Slide = ({ text }) => {
    return (
        <div className="contact-slide">
            <VacancyItem />
            <VacancyItem />
            <VacancyItem />
        </div>
    );
};

const slides = [
    { id: 1, slide: <Slide text={text} /> },
    { id: 2, slide: <Slide text={text} /> },
    { id: 3, slide: <Slide text={text} /> },
];

const Contacts = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [masage, setMassage] = useState("");

    const breadCrumbsLinks = [{ title: "Контакти", route: routes.CONTACTS }];
    return (
        <div className="content-wrapper">
            <div className="contacts">
                <div className="contacts__sidebar">
                    <BreadCrumbs links={breadCrumbsLinks} />
                    <div className="contacts__sidebar-title">Контакти</div>
                    <div className="contacts__sidebar-form">
                        <div className="contacts__sidebar-form-form">
                            <FormInput value={name} setValue={setName} ph={"ПБІ"} />
                            <FormInput value={mail} setValue={setMail} ph={"Пошта"} />
                            <FormInput value={phone} setValue={setPhone} ph={"Номер телефону"} isPhone={true} />
                            <FormInput value={masage} setValue={setMassage} ph={"Повідомлення"} isPhone={true} />
                        </div>
                        <div className="contacts__sidebar-form-btn">
                            <FormButton title={"Відправити заявку"} onPress={() => {}} />
                        </div>
                    </div>
                </div>
                <div className="contacts__content">
                    <ContentSlider slides={slides} style={{ height: "max-content" }}>
                        <Slide text={text} />
                    </ContentSlider>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
