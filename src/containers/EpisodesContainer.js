import React, { useState } from 'react';
import axios from 'axios';
import Button from "../components/Button";
import EpisodeList from "../components/EpisodeList";

const EpisodesContainer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [episodesList, setEpisodesList] = useState([]);

    const getEpisodes = () => {
        setIsLoading(true);
        setTimeout(() => {
            axios.get('https://breakingbadapi.com/api/episodes\n').then(({ data }) => { // таймаут для искусственного создания задержки, чтобы отображался спиннер загрузки
                setEpisodesList(data);
            }).then(() => setIsLoading(false));
        }, 1000);
    };

    const removeEpisode = (id) => {
        setEpisodesList(episodesList.filter(item => item.episode_id !== id));
    }

    const sortFromUp = () => {
        const tempArr = episodesList.sort((a, b) => b.characters.length - a.characters.length );
        setEpisodesList([...tempArr]);
    }

    const sortFromDown = () => {
        const tempArr = episodesList.sort((a, b) => a.characters.length - b.characters.length );
        setEpisodesList([...tempArr]);
    }

    const removeCharacter = (id) => {
        const listAfterRemove = episodesList.map(item => {
            if (item.episode_id === id) {
                item.characters.pop();
                return item;
            } else {
                return item;
            }
        });
        setEpisodesList([...listAfterRemove]);
    }

    const addCharacter = (id) => {
        const listAfterRemove = episodesList.map(item => {
            if (item.episode_id === id) {
                item.characters.unshift('Mock Character');
                return item;
            } else {
                return item;
            }
        });
        setEpisodesList([...listAfterRemove]);
    }

    return (
        <div style={{ padding: '0 10px'}}>
            <h1>Список эпизодов Breaking Bad</h1>
            <Button sendRequest={getEpisodes} episodesListLength={episodesList.length}>Загрузить эпизоды</Button>
            {
                episodesList.length
                    ?
                        <>
                            <button className="sort-button" onClick={sortFromUp}>Сортировать по возрастанию количества персонажей</button>
                            <button className="sort-button" onClick={sortFromDown}>Сортировать по убыванию количества персонажей</button>
                        </>
                    : null
            }
            <EpisodeList
                removeCharacter={removeCharacter}
                addCharacter={addCharacter}
                removeEpisode={removeEpisode}
                isLoading={isLoading}
                episodesList={episodesList}
            />
        </div>
    );
};

export default EpisodesContainer;