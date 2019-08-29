import React, { Component } from 'react';

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {scrolled: false}
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        this.setState({
            scrolled: scrolled > 0,
        })
    }

    render() {
        console.log(this.state)
        return (
            <div id="navbar" className={this.state.scrolled ? "navbar scroll" : "navbar"}>
                <a className="main-link" href="/#" className="btn"><div><b>MD</b>+<b>ML</b></div></a>
                <a href="/about" className="btn">About</a>
                <a target="_blank" href="https://repl.it/logout" className="btn">Login</a>
            </div>
        )
    }
}