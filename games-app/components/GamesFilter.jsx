import { useRef, useState } from "react";
export default function GamesFilter({genres, publishers,onFilterChange}) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [publisher, setPublisher] = useState("")

    const titleRef = useRef();
    const genreRef = useRef();
    const publisherRef = useRef();


    function handleTitleSearch(e) {
        const titleText = e.target.value;
        setTitle(titleText);
        applyFilters();
    }

    function handleGenreChange(e) {
        const genreText = e.target.value;
        setGenre(genreText);
        applyFilters();
    }

    function handlePublisherChange(e) {
        const publisherText = e.target.value;
        setPublisher(publisherText);
        applyFilters();
    }

    function applyFilters() {
        let title = titleRef.current.value
        let genre = genreRef.current.value
        // let publisher = publisherRef.current.value
        onFilterChange(title, genre, publisher);
    }

    function resetFilterContorls(){
        setTitle("")
        setGenre("")
        setPublisher("")
        genreRef.current.value = ""
        titleRef.current.value = ""
        publisherRef.current.value = ""
    }

    function removeFilters() {
        resetFilterContorls();
        applyFilters();
    }

    let genreOptionJsx = genres.map(genre=>{
        return (
                <option value={genre}>{genre}</option>
            )  
        });
    
    genreOptionJsx.unshift(<option value="">ALL</option>)



    // let publisherOptionJsx = publishers.map(publisher=>{
    //     return (
    //             <option value={publisher}>{publisher}</option>
    //         )  
    //     });
    
    // publisherOptionJsx.unshift(<option value="">ALL</option>)


    return (
        <>
            <div>
                <input 
                    type="text"
                    ref={titleRef}
                    className="game-search-box"
                    value={title} 
                    onChange={(e)=> {handleTitleSearch(e)}} 
                    placeholder="Enter a title">
                </input>
                <button onClick={()=>{removeFilters()}}>Remove filters</button>
            </div>
            <div>
                Filters:
                <select 
                    ref={genreRef}
                    onChange={(e)=> {handleGenreChange(e)}}>
                    {genreOptionJsx}
                </select>
            </div>
            {/* <div>
                Filters:
                <select 
                    ref={publisherRef}
                    onChange={(e)=> {handlePublisherChange(e)}}>
                    {publisherOptionJsx}
                </select>
            </div> */}
        </>
    );
}