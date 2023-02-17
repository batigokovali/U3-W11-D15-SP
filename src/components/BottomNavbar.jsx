import ReactAudioPlayer from 'react-audio-player';

const BottomNavbar = () => {
    return (
        <div className="d-flex align-items-center player-navbar mx-3">
            <div className="d-flex text-white">
                <img className="player-image" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-9T19Qax37LQ%2FT3zyKR3_B3I%2FAAAAAAAABhI%2FBp-EG0PLFRw%2Fs1600%2FVan%2BHalen%2B-%2BI%2B(1978).jpg&f=1&nofb=1&ipt=4c2eeba2a95991115b00b4430896336f68804d699ab302ca9d413a4aeb7740ed&ipo=images" alt="" />
                <div className="align-items-start">
                    <p className="mb-1">Song Title</p>
                    <p className="mb-0">Song Album</p>
                </div>
                <p className="align-self-center">Heart icon</p>
            </div>
            <div className="player mx-auto" id="">
                <ReactAudioPlayer
                    id="react-audio-player"
                    src="my_audio_file.ogg"
                    autoPlay
                    controls
                />
            </div>
            <div id="navbar-bottom-right" className="text-white d-flex">
                <p className="mb-0">icon</p>
                <p className="mb-0">icon</p>
                <p className="mb-0">icon</p>
                <p className="mb-0">icon</p>
            </div>
        </div>

    )
}

export default BottomNavbar