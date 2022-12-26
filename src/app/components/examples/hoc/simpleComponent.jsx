import React from "react";
import PropTypes from "prop-types";
import CardWrapper from "../../common/Card";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            <CardWrapper>
                {isAuth ? (
                    <button className="btn btn-primary" onClick={onLogOut}>
                        Выйти из системы
                    </button>
                ) : (
                    <button className="btn btn-secondary" onClick={onLogin}>
                        войти
                    </button>
                )}
            </CardWrapper>
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};
export default SimpleComponent;
