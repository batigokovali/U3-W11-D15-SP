import { Row } from "react-bootstrap";
import { useSelector } from 'react-redux'
import Album from "./Album";

const MainContent = () => {
    const seachResultsFromTheReduxStore = useSelector((state) => state.search.stock)

    return (
        <Row className="ml-5 mt-3 ">
            <h1 className="text-start mb-5 text-white">Hey, you. You’re finally awake. You were trying to listen some music, right? </h1>
            {seachResultsFromTheReduxStore ? (seachResultsFromTheReduxStore.map((albumData, i) => (<Album key={albumData.id} i={i} data={albumData} />)))
                : (<h1 className="text-center mt-5">You haven't searched anything!</h1>)}
        </Row>
    )
}

export default MainContent