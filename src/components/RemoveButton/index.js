import React from 'react';
import styles from './index.module.scss';

const RemoveButton = (props) => {

    const {
        children,
        removeEpisode
    } = props;

    return (
        <button onClick={removeEpisode} className={styles.buttonWrapper}>
            { children }
        </button>
    );
};

export default RemoveButton;