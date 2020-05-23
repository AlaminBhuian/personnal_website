import React, {Component, Fragment} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import "../../asset/css/custom.css"
import profile_logo from "../../asset/image/profile_logo.png"
import profile_logo2 from "../../asset/image/profile_logo2.webp"

class TopNavigation extends Component {

    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarProfile: [profile_logo],
            navBarBackground:"navBackGround",
            navBarItem:"navItem",
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({
                navBarTitle:"navTitleScroll",
                navBarProfile: [profile_logo2],
                navBarBackground:"navBackGroundScroll",
                navBarItem:"navItemScroll",
            })
        }
        else if(window.scrollY<100){
            this.setState({
                navBarTitle:"navTitle",
                navBarProfile: [profile_logo],
                navBarBackground:"navBackGround",
                navBarItem:"navItem",
            })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll);
    }

    render() {
        return (
            <Fragment>
                <Navbar fixed={"top"} className={this.state.navBarBackground} collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand className={this.state.navBarTitle} href="#home"><img height={30} src={this.state.navBarProfile}/> Alamin Bhuiyan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">SERVICES</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">COURSES</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </Fragment>
        );
    }
}

export default TopNavigation;