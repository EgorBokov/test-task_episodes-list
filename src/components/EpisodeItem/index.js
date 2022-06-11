import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import RemoveButton from "../RemoveButton";
import CountButton from "../CountButton";
import { getAmountEnding } from "../../tools/tools";
import styles from './index.module.scss';

const EpisodeItem = (props) => {

    const {
        episodeNumber,
        actorsAmount,
        removeEpisode,
        removeCharacter,
        addCharacter
    } = props;

    const endingAmount = useMemo(() => {
        return getAmountEnding(actorsAmount, ['Персонаж', 'Персонажа', 'Персонажей']);
    }, [actorsAmount]);

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.episodeInfo}>
                <p>Эпизод №{ episodeNumber }</p>
                <div className={styles.buttonArea}>
                    <CountButton changeCount={() => removeCharacter(episodeNumber)}>-</CountButton>
                    <p style={{ margin: '0 10px'}}>{ actorsAmount }</p>
                    <CountButton changeCount={() => addCharacter(episodeNumber)}>+</CountButton>
                    <p style={{ marginLeft: 10}}>{ endingAmount }</p>
                </div>
            </div>
            <RemoveButton removeEpisode={() => removeEpisode(episodeNumber)}>Удалить</RemoveButton>
        </div>
    );
};

EpisodeItem.propTypes = {
    episodeNumber: PropTypes.number.isRequired,
    actorsAmount: PropTypes.number.isRequired,
    removeEpisode: PropTypes.func.isRequired,
    removeCharacter: PropTypes.func.isRequired,
    addCharacter: PropTypes.func.isRequired
}

export default EpisodeItem;