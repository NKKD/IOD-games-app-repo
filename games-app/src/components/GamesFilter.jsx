import { useRef, useState } from "react";
import ToggleThemeButton from "./ToggleTheme.jsx";
import '../css/games-filter.css'

export default function GamesFilter({ genres, publishers, platforms, onFilterChange }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [publisher, setPublisher] = useState("");
    const [platform, setPlatform] = useState("");

    const titleRef = useRef();
    const genreRef = useRef();
    const publisherRef = useRef();
    const platformRef = useRef();

    function handleTitleSearch() {
        const titleText = titleRef.current.value;
        setTitle(titleText);
        applyFilters();
    }

    function handleGenreChange() {
        const genreText = genreRef.current.value;
        setGenre(genreText);
        applyFilters();
    }

    function handlePublisherChange() {
        const publisherText = publisherRef.current.value;
        setPublisher(publisherText);
        applyFilters();
    }

    function handlePlatformChange() {
        const platformText = platformRef.current.value;
        setPlatform(platformText);
        applyFilters();
    }

    function applyFilters() {
        const title = titleRef.current.value;
        const genre = genreRef.current.value;
        const publisher = publisherRef.current.value;
        const platform = platformRef.current.value;
        onFilterChange(title, genre, publisher, platform);
    }

    function resetFilterControls() {
        setTitle("");
        setGenre("");
        setPublisher("");
        setPlatform("");
        titleRef.current.value = "";
        genreRef.current.value = "";
        publisherRef.current.value = "";
        platformRef.current.value = "";
    }

    function removeFilters() {
        resetFilterControls();
        applyFilters();
    }

    return (
        <div className="row justify-content-center filter-container">
            <span style={{
                width: '20%',
                margin: 0,
            }}>
                <ToggleThemeButton />
            </span>
            <div className="col-md-8">
                <input
                    type="text"
                    ref={titleRef}
                    className="game-search-box"
                    value={title}
                    onChange={handleTitleSearch}
                    placeholder="Enter a title"
                />
                <button className="remove-button" onClick={removeFilters}>Remove filters</button>
            </div>

            <div className="col-md-8">
                <span className="filter-text">Filters:</span>

                {/* Genre dropdown list */}
                <select
                    ref={genreRef}
                    onChange={handleGenreChange}
                    className="dropdown genre-dropdown"
                >
                    <option value="">All Genres</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>

                {/* Platform dropdown list */}
                <select
                    ref={platformRef}
                    onChange={handlePlatformChange}
                    className="dropdown platform-dropdown"
                >
                    <option value="">All platforms</option>
                    {platforms.map((platform) => (
                        <option key={platform} value={platform}>
                            {platform}
                        </option>
                    ))}
                </select>

                {/* Publisher dropdown list */}
                <select
                    ref={publisherRef}
                    onChange={handlePublisherChange}
                    className="dropdown publisher-dropdown"
                >
                    <option value="">All publishers</option>
                    {publishers.map((publisher) => (
                        <option key={publisher} value={publisher}>
                            {publisher}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
