import React, { useEffect, useState } from "react";
import "./directions.scss";
import routes from "../../variables/routes";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import SidebarList from "../../components/sidebarList/SidebarList";
import BrandSlider from "../../components/sliders/brandSlider/BrandSlider";
import { useGetPageQuery } from "../../redux/services/motorniAPI";
import { useNavigate, useParams } from "react-router-dom";
import BrandsSlider from "../../components/sliders/slides/brandsSlider/BrandsSlider.jsx";
import { Helmet } from "react-helmet";
import BrandsList from "../../components/brandsList/BrandsList.jsx";
import BgIcon from "../../assets/images/BG/bg-icon.svg";
const Directions = () => {
    const breadCrumbsLinks = [{ title: "Напрямки", route: routes.DIRECTIONSLINK }];

    const naviage = useNavigate();

    const { id } = useParams();

    const [directionId, setDirectionId] = useState(id);

    const { data: directions } = useGetPageQuery("directions?relations=*&sort=sort&order=asc");
    const { data: direction } = useGetPageQuery(`directions/${id}?relations=*`);

    useEffect(() => {
        setDirectionId(id);
    }, [id]);

    useEffect(() => {
        naviage(routes.DIRECTIONSLINK + directionId);
    }, [directionId]);

    return (
        <>
            {directions && direction && (
                <div className="content-wrapper">
                    <Helmet>
                        <title>{`${direction?.meta_title ? direction?.meta_title : "motorni"}`}</title>
                        <meta
                            name="description"
                            content={`${direction?.meta_description ? direction?.meta_description : "motorni"}`}
                        />
                    </Helmet>
                    <div className="directions">
                        <div className="directions__sidebar">
                            <BreadCrumbs links={breadCrumbsLinks} />
                            <div className="directions__sidebar-title">Напрямки</div>
                            <div className="directions__sidebar-list">
                                {
                                    <SidebarList
                                        list={directions?.data}
                                        active={directionId}
                                        setActive={setDirectionId}
                                        link={routes.DIRECTIONSLINK}
                                    />
                                }
                            </div>
                        </div>
                        <div className="divider">
                            <img src={BgIcon} alt="" className="bg-icon" />
                        </div>
                        <div className="directions__content">
                            {/* slide 1 */}
                            {/* <ContentSlider slides={slides} isVertical={true} style={{ height: "450px" }}>
                        <Slide text={"Моторні на ринку України вже більше 25 років. Ми змінювались, трансформувались та зростали. Наразі ми маємо три напрямки діяльності, широку сітку дилерів та сервісних центрів, а також потужну та злагоджену команду! Однак ми не зупиняємось на досягнутому та рухаємось вперед."} />
                    </ContentSlider> */}

                            {/* slide2 */}
                            <div className="directions__content-title">{direction?.description}</div>
                            <BrandsSlider slides={direction?.brands} style={{ with: "max-content" }} />
                            <BrandsList brands={direction?.brands} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Directions;
