import "./App.scss";
import { useSelector } from "react-redux";
import Rotes from "./Rotes.jsx";
import LoadingModal from "./components/loadingModal/LoadingModal.jsx";
import Header from "./components/header/Header.jsx";

function App() {
    // const isSomeQueryPending = useSelector((state) =>
    //     Object.values(state.motorniApi.queries).some((query) => query.status === "pending")
    // );

    const isSomeQueryPending = false;

    return (
        <div className="global-container">
            <div className="content">
                <Header />
                {isSomeQueryPending ? <LoadingModal /> : null}
                <Rotes />
            </div>
        </div>
    );
}

export default App;
