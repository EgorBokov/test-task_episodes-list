import React from 'react';
import PropTypes from "prop-types";
import styles from './index.module.scss';

const Button = (props) => {
    const {
        children,
        episodesListLength,
        sendRequest
    } = props;

    if (episodesListLength) {
        return;
    }

    return (
        <button
            onClick={sendRequest}
            className={styles.buttonWrapper}
        >
            { children }
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    episodesListLength: PropTypes.number.isRequired,
    sendRequest: PropTypes.func.isRequired
}

export default Button;