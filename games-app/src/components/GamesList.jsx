import { useEffect,useState} from "react";
import GamesService from "../services/games-service.js";
import GamesFilter from "./GamesFilter.jsx";
import "../css/game-list.css"
import ToggleThemeButton from "./ToggleTheme.jsx";

const gamesService = new GamesService("http://localhost:3000")

export default function GamesList() {
    const [games, setGames] = useState([]);
    const [allGames, setAllGames] = useState([]);
    const [genres, setGenres] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [publishers, setPublishers] = useState([]);
    const [errorMessage,setErrorMessage] = useState(null);



    useEffect(
        () => {
            gamesService.getGames()
            .then(gamesJsonData=>{
                setGames(gamesJsonData);
                setAllGames(gamesJsonData);
                setGenres(getUniqueGenresList(gamesJsonData))
                setPlatforms(getUniquePlatformsList(gamesJsonData))
                setPublishers(getUniquePublisherList(gamesJsonData))
            })
            .catch(error=>{
                setErrorMessage("Sorry, unable to connect to server. Please try again later!")
            })
        },
        []);

    const getUniqueGenresList = function (games) {
        const allGenresList = games.map(game=>game.genre);
        const uniqueGenresList = [...new Set(allGenresList)];
        return uniqueGenresList;
    }


    const getUniquePublisherList = function (games) {
        const allPublisherList = games.map(game=>game.publisher);
        const uniquePublishersList = [...new Set(allPublisherList)]
        console.log(uniquePublishersList)
        return uniquePublishersList
    }

    const getUniquePlatformsList = function (games) {
        const allPlatformsList = games.map(game=>game.platform);
        const uniquePlatformsList = [...new Set(allPlatformsList)];
        console.log(uniquePlatformsList)
        return uniquePlatformsList;
    }

    const applyFilters = function(title, genre, publisher,platform){
        let filteredGames = allGames.filter(game =>
                (game.title.toLowerCase().includes(title.toLowerCase())) &&
                (genre === "" || game.genre.includes(genre)) &&
                (publisher === "" || game.publisher.includes(publisher)) &&
                (platform === "" || game.platform.includes(platform))
        );
            setGames(filteredGames)
    }

    function getPlatformIcon(platform) {
        if(platform.includes("Windows"))
            return "w"
        if(platform.includes("Browser"))
            return "b"
        return "#"
        
    }

    let gamesListJsx = games.map(game => {return (
        <div className="game-list-component col-lg-3 col-md-4 col-sm-12 col-xl-2 m-2 " style={{ width: '18rem' }}>
            <img className="card-img-top" src={game.thumbnail} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text">{game.short_description}</p>
                <p>
                    <span className="fw-bold">Genre: </span>
                    <span className="genre">{game.genre}</span>
                </p>
                <a className="game-url" href="#" className="btn btn-success">Play Game</a>
            </div>
        </div>

    )})

    return (
        <>
            {errorMessage && <h1>{errorMessage}</h1>}
            {!errorMessage && 
            <GamesFilter 
                genres = {genres}
                publishers={publishers}
                platforms={platforms}
                onFilterChange={applyFilters}>
            </GamesFilter>}
            <div className="games-list-container row justify-content-center">
                {gamesListJsx}
            </div>

        </>
    )
}












