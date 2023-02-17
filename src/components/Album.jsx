import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { BsPlayFill } from 'react-icons/bs'
import { replaceBottomAction } from "../redux/actions";

const Album = ({ data, i }) => {
    const dispatch = useDispatch();

    return (
        <Col xs={12} md={6} lg={2} className="text-white" id="album-container">
            <div id="albums" className="mb-3 pt-3 pb-4">
                <div className="mx-3">
                    <img src={data.album.cover} alt="" className="mb-2 album-image" />
                    <div className="text-truncate">
                        <p className="mb-1 text-start text-truncate">{data.title_short}</p>
                        <p className="mb-0 text-start text-truncate">{data.album.title}</p>
                        <p className="mb-0 text-start text-truncate">{data.artist.name}</p>
                    </div>
                    <div id="play-button">
                        <BsPlayFill onClick={() => {
                            dispatch(replaceBottomAction(data))
                        }}></BsPlayFill>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Album