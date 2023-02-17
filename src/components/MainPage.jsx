import { Container, Row, Col } from "react-bootstrap";
import BottomNavbar from "./BottomNavbar";
import LeftNavbar from "./LeftNavbar";

const MainPage = () => {
    return (
        <Container fluid >
            <Row className="d-flex">
                <Col lg={2} id="left-navbar">
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col id="main-content">
                </Col>
            </Row>
            <Row>
                <Col id="bottom-navbar">
                    <BottomNavbar></BottomNavbar>
                </Col>
            </Row>

        </Container>
    )
}

export default MainPage