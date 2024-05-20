import React from "react";
import "./directions.scss";
import routes from "../../variables/routes";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import ContentSlider from "../../components/contentSlider/ContentSlider";
import SidebarList from "../../components/sidebarList/SidebarList";
import BrandIcon from "../../assets/images/icons/brand-icon.svg";
import DirectionsSlide from "../../components/sliders/slides/directionsSlide/DirectionsSlide";
import BrandSlider from "../../components/sliders/brandSlider/BrandSlider";

const list = [
    { id: 1, title: "Сільгосптехніка" },
    { id: 3, title: "Iнструмент та технiка" },
    { id: 4, title: "Електромобiлi" },
    { id: 5, title: "Вело-мото технiка" },
];

const brandsList = [
    { id: 1, image: BrandIcon },
    { id: 2, image: BrandIcon },
    { id: 3, image: BrandIcon },
    { id: 4, image: BrandIcon },
    { id: 5, image: BrandIcon },
    { id: 6, image: BrandIcon },
    { id: 7, image: BrandIcon },
];

const Slide = ({ text }) => {
    return <div className="directions-slide">{text}</div>;
};

const slides = [
    { id: 1, slide: <Slide /> },
    { id: 2, slide: <Slide /> },
    { id: 3, slide: <Slide /> },
];

const Directions = () => {
    const breadCrumbsLinks = [{ title: "Напрямки", route: routes.DIRECTIONSLINK }];
    return (
        <div className="content-wrapper">
            <div className="directions">
                <div className="directions__sidebar">
                    <BreadCrumbs links={breadCrumbsLinks} />
                    <div className="directions__sidebar-title">Напрямки</div>
                    <div className="directions__sidebar-list">{<SidebarList list={list} />}</div>
                </div>
                <div className="directions__content">
                    {/* slide 1 */}
                    {/* <ContentSlider slides={slides} isVertical={true} style={{ height: "450px" }}>
                        <Slide text={"Моторні на ринку України вже більше 25 років. Ми змінювались, трансформувались та зростали. Наразі ми маємо три напрямки діяльності, широку сітку дилерів та сервісних центрів, а також потужну та злагоджену команду! Однак ми не зупиняємось на досягнутому та рухаємось вперед."} />
                    </ContentSlider> */}

                    {/* slide2 */}
                    <ContentSlider slides={slides} isVertical={false} style={{ height: "max-content" }}>
                        <DirectionsSlide
                            brands={brandsList}
                            title={
                                "Бізнес-напрямок представляє найбільший вибір товарів для прибирання у домі та за його межами, для приготування і зберігання їжі, а також для найрізноманітніших побутових потреб."
                            }
                        />
                    </ContentSlider>
                    <BrandSlider />
                </div>
            </div>
        </div>
    );
};

export default Directions;
