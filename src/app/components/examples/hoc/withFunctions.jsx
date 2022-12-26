import React from "react";
import SimpleComponent from "./simpleComponent";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.clear();
    };
    return (
        <>
            <SimpleComponent
                {...props}
                isAuth={isAuth}
                onLogOut={onLogOut}
                onLogin={onLogin}
            />
        </>
    );
};

export default withFunctions;
