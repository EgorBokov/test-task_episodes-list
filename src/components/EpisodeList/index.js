import React from 'react';
import PropTypes from "prop-types";
import EpisodeItem from "../EpisodeItem";
import { PacmanLoader } from "react-spinners";
import styles from './index.module.scss';

const EpisodeList = (props) => {
    const {
        episodesList,
        isLoading,
        removeEpisode,
        removeCharacter,
        addCharacter
    } = props;

    return (
        <div className={styles.listWrapper}>
            {
                (!episodesList.length && isLoading) && <PacmanLoader color={'#000'} size={50} />
            }
            {
                episodesList.map(item => (
                    <EpisodeItem
                        removeEpisode={removeEpisode}
                        episodeNumber={item.episode_id}
                        actorsAmount={item.characters.length}
                        key={item.episode_id}
                        removeCharacter={removeCharacter}
                        addCharacter={addCharacter}
                    />
                ))
            }
        </div>
    );
};

EpisodeList.propTypes = {
    episodesList: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    removeEpisode: PropTypes.func.isRequired,
    removeCharacter: PropTypes.func.isRequired,
    addCharacter: PropTypes.func.isRequired
}

export default EpisodeList;