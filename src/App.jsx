import "./App.scss";
import { useSelector } from "react-redux";
import Rotes from "./Rotes.jsx";
import LoadingModal from "./components/loadingModal/LoadingModal.jsx";
import Header from "./components/header/Header.jsx";
import { useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
function App() {
    // const isSomeQueryPending = useSelector((state) =>
    //     Object.values(state.motorniApi.queries).some((query) => query.status === "pending")
    // );

    const isSomeQueryPending = false;
    const location = useLocation();

    const isMainPage = location.pathname === "/";

    return (
        <div className="global-container">
            <div className="content">
                <Header isMain={isMainPage} />
                {isSomeQueryPending ? <LoadingModal /> : null}
                <Rotes />
                {!isMainPage && <Footer />}
            </div>
        </div>
    );
}

export default App;
