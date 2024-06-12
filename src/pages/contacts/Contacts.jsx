import React, { useEffect, useState } from "react";
import routes from "../../variables/routes";
import SidebarList from "../../components/sidebarList/SidebarList";
import ContentSlider from "../../components/contentSlider/ContentSlider";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import "./contacts.scss";
import VacancyItem from "../../components/vacancy/vacancyItem/VacancyItem";
import FormInput from "../../components/formInput/FormInput";
import FormButton from "../../components/buttons/formButton/FormButton";
import { useGetPageQuery, useSendFormMutation } from "../../redux/services/motorniAPI";
import { useDispatch } from "react-redux";
import { setErrorMassage } from "../../redux/slices/statusSlice";
import ContactItem from "../../components/contacts/contactItem/ContactItem";
import { SwiperSlide } from "swiper/react";
import { Helmet } from "react-helmet";

const text =
    "Моторні на ринку України вже більше 25 років. Ми змінювались, трансформувались та зростали. Наразі ми маємо три напрямки діяльності, широку сітку дилерів та сервісних центрів...";

const Slide = ({ slides }) => {
    return (
        <div className="contact-slide">
            {slides.map((slide, index) => {
                return <ContactItem key={index} slideData={slide} />;
            })}
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
    const [message, setMessage] = useState("");

    const [sliderContactsList, setSliderContactsList] = useState([]);

    const dispatch = useDispatch();

    const breadCrumbsLinks = [{ title: "Контакти", route: routes.CONTACTS }];
    const { data: contacts } = useGetPageQuery("single/contacts");

    const contactsList = contacts?.data?.single?.offices?.offices;

    function splitArrayIntoChunks(arr, chunkSize) {
        let result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            let chunk = arr.slice(i, i + chunkSize);
            result.push(chunk);
        }
        return result;
    }

    const [sendForm, { isSuccess: isSendFormSuccess, data: formData, isLoading: isSendFormLoading, isError, error }] =
        useSendFormMutation();

    const sendFormHandler = async (e) => {
        e.preventDefault();
        if (!name || !mail || !phone) {
            dispatch(setErrorMassage("Заповність усі обов'язкові поля!"));
        } else {
            const FormData = {
                name: name,
                email: mail,
                phone: phone,
                message: message,
            };
            try {
                await sendForm({ url: "form_contacts", body: FormData }).unwrap();
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        if (isSendFormSuccess) {
            setName("");
            setMail("");
            setPhone("");
            setMessage("");
            dispatch(setErrorMassage("Заявку відправлено"));
        } else if (isError && error) {
            console.log(error);
        }
    }, [isSendFormSuccess, isError]);

    useEffect(() => {
        if (contacts?.data?.single?.offices?.offices) {
            setSliderContactsList(splitArrayIntoChunks(contactsList, 3));
        }
    }, [contacts]);

    return (
        <>
            {contacts && (
                <div className="content-wrapper">
                    <Helmet>
                        <title>{`${"motorni" ? "motorni" : "motorni"}`}</title>
                    </Helmet>
                    <div className="contacts">
                        <div className="contacts__sidebar">
                            <BreadCrumbs links={breadCrumbsLinks} />
                            <div className="contacts__sidebar-title">Контакти</div>
                            <form onSubmit={sendFormHandler} className="contacts__sidebar-form">
                                <div className="contacts__sidebar-form-form">
                                    <FormInput value={name} setValue={setName} ph={"ПІП"} type={"text"} />
                                    <FormInput value={mail} setValue={setMail} ph={"Електронна пошта"} type={"email"} />
                                    <FormInput
                                        value={phone}
                                        setValue={setPhone}
                                        ph={"Номер телефону"}
                                        isPhone={true}
                                        type={"tel"}
                                    />
                                    <FormInput
                                        value={message}
                                        setValue={setMessage}
                                        ph={"Повідомлення"}
                                        type={"text"}
                                    />
                                </div>
                                <div className="contacts__sidebar-form-btn">
                                    <FormButton title={"Відправити заявку"} type={"submit"} />
                                </div>
                            </form>
                        </div>
                        <div className="divider"></div>
                        <div className="contacts__content">
                            <ContentSlider
                                slides={slides}
                                style={{ height: "max-content" }}
                                isActiveNav={sliderContactsList.length > 1}
                            >
                                {sliderContactsList.map((slides, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Slide slides={slides} />
                                        </SwiperSlide>
                                    );
                                })}
                            </ContentSlider>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Contacts;
