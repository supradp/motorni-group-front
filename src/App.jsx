import "./App.scss";
import { useSelector } from "react-redux";
import Rotes from "./Rotes.jsx";
import LoadingModal from "./components/loadingModal/LoadingModal.jsx";
import Header from "./components/header/Header.jsx";
import { useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import ErrorModal from "./components/modals/errorModal/ErrorModal.jsx";
import BgIcon from "./assets/images/BG/bg-icon.svg"; //BgIcon
function App() {
    const isSomeQueryPending = useSelector((state) =>
        Object.values(state.motorniAPI.queries).some((query) => query.status === "pending")
    );

    // const isSomeQueryPending = false;
    const location = useLocation();

    const isMainPage = location.pathname === "/";

    return (
        <div className="global-container">
            <img src={BgIcon} alt="" className="main-bg-icon" />
            <div
                className="content"
                style={isMainPage ? { maxWidth: "none" } : { paddingTop: "74px", minHeight: "calc(100vh - 184px)" }}
            >
                <ErrorModal />
                <Header isMain={isMainPage} />
                {isSomeQueryPending ? <LoadingModal /> : null}
                <Rotes />
            </div>
            {!isMainPage && <Footer />}
        </div>
    );
}

export default App;
