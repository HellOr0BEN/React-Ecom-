import Router from "../../Router/Router";
import Footer from "./Footer";
import Header from "./Header";


const Layout = () => {
    return(
        <>
            <Header />
            <Router/>
            <Footer/>
        </>
    );
}

export default Layout;