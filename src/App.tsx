import Header from "./components/widgets/Header/Header";
import ToolsNavigate from "./components/entities/ToolsNavigate/ToolsNavigate";
import MainContent from "./components/pages/MainContent/MainContent.tsx";
import Footer from "./components/widgets/Footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <>
                <ToolsNavigate/>
            </>
            <>
                <MainContent/>
            </>
            <Footer/>
        </>
    );
}

export default App;
