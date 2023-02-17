import ReactAudioPlayer from 'react-audio-player';
import { useDispatch, useSelector } from 'react-redux'
import { BsDisplay, BsViewList, BsArrowsFullscreen, BsHeart, BsSuitHeartFill } from 'react-icons/bs'
import { addToFavoritesAction, removeFromFavoritesAction } from '../redux/actions';
import { CiBeerMugFull } from 'react-icons/ci'

const BottomNavbar = () => {
    const dispatch = useDispatch();
    const selectedSongInReduxStore = useSelector((state) => state.selected.newContent)
    const favoriteSongsInReduxStore = useSelector((state) => state.favorites.content)

    return (
        selectedSongInReduxStore ? (
            <div className="d-flex align-items-center player-navbar mx-3" >
                <div className="d-flex text-white" id="song-info">
                    <img className="player-image" src={selectedSongInReduxStore[0].album.cover} alt="" />
                    <div className="d-flex flex-column align-items-start justify-content-center">
                        <p className="mb-0 mx-3">{selectedSongInReduxStore[0].title_short}</p>
                        <p className="mb-0 mx-3 album-name text-truncate">{selectedSongInReduxStore[0].album.title}</p>
                    </div>
                    {favoriteSongsInReduxStore.some((song) => selectedSongInReduxStore[0].id === song.id) ?
                        (<p className="align-self-center mb-0 heart-icon"><BsSuitHeartFill onClick={() => {
                            dispatch(removeFromFavoritesAction(selectedSongInReduxStore[0].id))
                        }} /></p>
                        ) : (
                            <p className="align-self-center mb-0"><BsHeart onClick={() => {
                                dispatch(addToFavoritesAction(selectedSongInReduxStore[0]))
                            }} /></p>)}
                </div>
                <div className="player mx-auto" id="">
                    <ReactAudioPlayer
                        id="react-audio-player"
                        src={selectedSongInReduxStore[0].preview}
                        controls
                    />
                </div>
                <div id="navbar-bottom-right" className="text-white d-flex">
                    <p className="mb-0 mx-2"><BsViewList></BsViewList></p>
                    <p className="mb-0 mx-2"><BsDisplay></BsDisplay></p>
                    <p className="mb-0 mx-2"><BsArrowsFullscreen /></p>
                </div>
            </div >
        ) : (<div className="d-flex align-items-center player-navbar mx-3">
            <div className="d-flex text-white" id="song-info">
                <img className="player-image" src="" alt="" />
                <div className="d-flex flex-column align-items-start justify-content-center">
                    <p className="mb-0 mx-3">Song Title</p>
                    <p className="mb-0 mx-3 album-name text-truncate">Album Title</p>
                </div>
                <p className="align-self-center mb-0"><CiBeerMugFull /></p>
            </div>
            <div className="player mx-auto" id="">
                <ReactAudioPlayer
                    id="react-audio-player"
                    src=""
                    controls
                />
            </div>
            <div id="navbar-bottom-right" className="text-white d-flex">
                <p className="mb-0 mx-2"><BsViewList></BsViewList></p>
                <p className="mb-0 mx-2"><BsDisplay></BsDisplay></p>
                <p className="mb-0 mx-2"><BsArrowsFullscreen /></p>
            </div>
        </div>)
    )
}

export default BottomNavbar