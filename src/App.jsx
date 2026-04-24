import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./App.scss";
import Rotes from "./Rotes.jsx";
import BgIcon from "./assets/images/BG/bg-icon.svg"; //BgIcon
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import LoadingModal from "./components/loadingModal/LoadingModal.jsx";
import ErrorModal from "./components/modals/errorModal/ErrorModal.jsx";
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
                <Toaster />
                <ErrorModal />
                <Header isMain={isMainPage} />
                {isSomeQueryPending ? <LoadingModal /> : null}
                <div key={'/' + location.pathname.split('/')[1]} className="page-transition">
                    <Rotes />
                </div>
            </div>
            {!isMainPage && <Footer />}
        </div>
    );
}

export default App;
