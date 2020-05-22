import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import "../../asset/css/custom.css"
import "../../asset/css/bootstrap.min.css"

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">SOFTWARE ENGINEER</h1>
                                    <h4 className="topSubTitle">React Developer</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>

                            </Row>

                        </Container>

                    </div>

                </Container>

            </Fragment>
        );
    }
}

export default TopBanner;