import React from 'react';
import PropTypes from "prop-types";
import styles from './index.module.scss';

const CountButton = (props) => {
    const {
        children,
        changeCount
    } = props;

    return (
        <button onClick={changeCount} className={styles.buttonWrapper}>
            { children }
        </button>
    );
};

CountButton.propTypes = {
    children: PropTypes.string.isRequired,
    changeCount: PropTypes.func.isRequired
}

export default CountButton;