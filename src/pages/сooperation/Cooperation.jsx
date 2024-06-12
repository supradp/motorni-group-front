import React, { useEffect, useState } from "react";
import "./сooperation.scss";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import SidebarList from "../../components/sidebarList/SidebarList";
import routes from "../../variables/routes";
import FormInput from "../../components/formInput/FormInput";
import FormButton from "../../components/buttons/formButton/FormButton";
import { useGetPageQuery, useSendFormMutation } from "../../redux/services/motorniAPI";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { setErrorMassage } from "../../redux/slices/statusSlice";

const list = [
    { id: "dealers", slug: "dealers", title: "Стати дилером" },
    { id: "vacancies", slug: "vacancies", title: "Стати співробітником" },
];

const Cooperation = () => {
    const breadCrumbsLinks = [{ title: "Співпраця", route: routes.COOPERATION }];

    const { id } = useParams();
    const naviagate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [vacancy, setVacancy] = useState("");
    const [phone, setPhone] = useState("");
    const [cv, setCv] = useState("");
    const [activeCategory, setActiveCAtegory] = useState(id);

    const { data: page } = useGetPageQuery(`single/${activeCategory}`);

    const metaTitle = page?.data?.single?.meta?.meta_title;
    const activeCategoryName = list.find((listItem) => listItem.slug === activeCategory)?.title || "";
    const isVacancies = activeCategory === "vacancies";

    const [sendForm, { isSuccess: isSendFormSuccess, data: formData, isLoading: isSendFormLoading, isError, error }] =
        useSendFormMutation();

    const sendFormHandler = async (e) => {
        e.preventDefault();
        if (!name || !vacancy || !phone) {
            dispatch(setErrorMassage("Заповність усі обов'язкові поля!"));
        } else {
            const formData = new FormData();
            formData.append("cv", e.target.file.files[0]);
            formData.append("name", name);
            formData.append("position", vacancy);
            formData.append("phone", phone);

            try {
                await sendForm({
                    url: isVacancies ? "form_vacancies" : "form_dealers",
                    body: formData,
                    headers: isVacancies ? {} : { "Content-Type": "application/json", Accept: "application/json" },
                }).unwrap();
            } catch (error) {
                console.log(error);
            }
        }
    };

    const sendDealerFormHandler = async (e) => {
        e.preventDefault();
        if (!name || !vacancy || !phone) {
            dispatch(setErrorMassage("Заповність усі обов'язкові поля!"));
        } else {
            const FormData = {
                name: name,
                phone: phone,
                cooperation: vacancy,
            };
            try {
                await sendForm({
                    url: "form_dealers",
                    body: FormData,
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                }).unwrap();
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        if (isSendFormSuccess) {
            setName("");
            setVacancy("");
            setPhone("");
            dispatch(setErrorMassage("Заявку відправлено"));
        } else if (isError && error) {
            console.log(error);
        }
    }, [isSendFormSuccess, isError]);

    useEffect(() => {
        naviagate(routes.COOPERATIONLINK + activeCategory);
    }, [activeCategory]);

    return (
        <div className="content-wrapper">
            <Helmet>
                <title>{`${metaTitle ? metaTitle : "motorni"}`}</title>
            </Helmet>
            <div className="cooperation">
                <div className="cooperation__sidebar">
                    <BreadCrumbs links={breadCrumbsLinks} />
                    <div className="cooperation__sidebar-title">Співпраця</div>
                    <div className="cooperation__sidebar-list">
                        {<SidebarList list={list} active={activeCategory} setActive={setActiveCAtegory} />}
                    </div>
                </div>
                <div className="divider"></div>
                <div className="cooperation__content">
                    <form
                        onSubmit={isVacancies ? sendFormHandler : sendDealerFormHandler}
                        className="cooperation__content-form"
                    >
                        <div className="cooperation__content-form-title">{activeCategoryName}</div>
                        <div className="cooperation__content-form-form">
                            <FormInput value={name} setValue={setName} ph={"ПІП"} />
                            {isVacancies && <FormInput value={vacancy} setValue={setVacancy} ph={"Посада"} />}
                            <FormInput
                                value={phone}
                                setValue={setPhone}
                                ph={"Номер телефону"}
                                isPhone={true}
                                type={"tel"}
                            />
                            {isVacancies && (
                                <>
                                    <FormInput
                                        value={cv}
                                        setValue={setCv}
                                        ph={"Резюме"}
                                        isPhone={true}
                                        type={"file"}
                                        id={"file"}
                                    />
                                    <label for="file">Натисність для завантаження резюме</label>
                                </>
                            )}
                        </div>
                        <div className="cooperation__content-form-btn">
                            <FormButton title={"Відправити заявку"} type={"submit"} />
                        </div>
                    </form>
                    {/* <div className="cooperation__content-list">
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
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Cooperation;
