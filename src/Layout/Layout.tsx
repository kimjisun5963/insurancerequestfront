import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import React from "react";
import 'globalthis/auto';

const Layout = (props : {children: React.ReactNode}) => {
    return (
        <div>
            <Header/>

            <main>
                {props.children}
            </main>

            <Footer/>
        </div>
    );
}

export default Layout;