import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { getSongsActionAsync } from "../redux/actions";
import { FiHome } from 'react-icons/fi'
import { VscLibrary } from 'react-icons/vsc'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { GiHeartOrgan } from 'react-icons/gi'

const LeftNavbar = () => {
    const favoriteSongsInReduxStore = useSelector((state) => state.favorites.content)
    console.log(favoriteSongsInReduxStore)

    const [query, setQuery] = useState("");
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(getSongsActionAsync(query))
    };

    return (
        <>
            <div className="text-white d-flex flex-column align-items-start mx-2 left-navbar">
                <p>...</p>
                <div className="mb-3 d-flex align-items-center">
                    <FiHome></FiHome>
                    <p className="mb-0" id="upper-left-corner-text">Home</p>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Control type="search" className="mb-3 bg-transparent text-white" value={query} onChange={handleChange} placeholder="Search" />
                </Form>
                <div className="mb-3 d-flex align-items-center w-100">
                    <VscLibrary></VscLibrary>
                    <p className="mb-0" id="upper-left-corner-text">Your Library</p>
                </div>
                <div className="mb-3 d-flex align-items-center w-100">
                    <BsFillPlusSquareFill></BsFillPlusSquareFill>
                    <p className="mb-0" id="upper-left-corner-text">Create Playlist</p>
                </div>
                <div className="mb-3 d-flex align-items-center w-100">
                    <GiHeartOrgan></GiHeartOrgan>
                    <p className="mb-0" id="upper-left-corner-text">Liked Songs</p>
                </div>
            </div>
            <div className="scroller text-white mx-2 d-flex flex-column align-items-start">
                {favoriteSongsInReduxStore ? (favoriteSongsInReduxStore.map((songData) => (<p key={songData.id}>{songData.title_short}</p>))) : (<p>Add Some Songs!</p>)}
            </div>
        </>
    )
}

export default LeftNavbar