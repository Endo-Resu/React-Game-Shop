import React from 'react';
import "./home-page.css";
import GAMES from "../../utils/games/games";
import { GameItem } from "../../components/game-item"

export const HomePage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}