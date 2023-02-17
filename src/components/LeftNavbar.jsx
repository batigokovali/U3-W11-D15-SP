import { Container, Row, Col, Button } from "react-bootstrap";

const LeftNavbar = () => {
    return (
        <>
            <div className="text-white d-flex flex-column align-items-start mx-2">
                <p>...</p>
                <p>Home</p>
                <p>Search</p>
                <p className="mb-5">Your Library</p>
                <p>Create Playlist</p>
                <p>Liked Songs</p>
                <br id="left-navbar-br"></br>
            </div>
            <div className="scroller text-white mx-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident soluta at blanditiis atque possimus ipsam odit, enim assumenda dolores? Magni ratione consequatur nulla sit deleniti impedit, explicabo nemo. Dolores, consequatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quam explicabo doloribus deserunt cupiditate architecto totam beatae mollitia accusamus. Dolore ipsum autem natus animi nihil incidunt officiis tempora sint officia.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi non vitae natus eaque delectus, odit consectetur atque adipisci assumenda labore! Eaque, sunt eum ea odio error tenetur alias nisi.
            </div>
        </>
    )
}

export default LeftNavbar