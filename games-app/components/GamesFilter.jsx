import { useRef, useState } from "react";

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
        <>
            <div>
                <input
                    type="text"
                    ref={titleRef}
                    className="game-search-box"
                    value={title}
                    onChange={handleTitleSearch}
                    placeholder="Enter a title"
                />
                <button onClick={removeFilters}>Remove filters</button>
            </div>

            <div>
                <span>Filters:</span>

                {/* Genre dropdown list */}
                <select
                    ref={genreRef}
                    onChange={handleGenreChange}
                    className="genre-dropdown"
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
                    className="platform-dropdown"
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
                    className="publisher-dropdown"
                >
                    <option value="">All publishers</option>
                    {publishers.map((publisher) => (
                        <option key={publisher} value={publisher}>
                            {publisher}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}
