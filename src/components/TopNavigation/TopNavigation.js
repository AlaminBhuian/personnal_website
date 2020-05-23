import React, {Component, Fragment} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import "../../asset/css/custom.css"

class TopNavigation extends Component {

    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle"
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({
                navBarTitle:"navTitleScroll"
            })
        }
        else if(window.scrollY<100){
            this.setState({
                navBarTitle:"navTitle"
            })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll);
    }

    render() {
        return (
            <Fragment>
                <Navbar fixed={"top"} collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand className={this.state.navBarTitle} href="#home">Alamin Bhuiyan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">HOME</Nav.Link>
                            <Nav.Link href="#deets">SERVICES</Nav.Link>
                            <Nav.Link href="#deets">COURSES</Nav.Link>
                            <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link href="#deets">CONTACT</Nav.Link>
                            <Nav.Link href="#deets">ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </Fragment>
        );
    }
}

export default TopNavigation;