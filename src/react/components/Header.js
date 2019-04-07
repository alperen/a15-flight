import React from 'react';

class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            menuToggled: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu(){
        console.log('toogle menu');
    }

    render() {
        return <div className="c_header">
            <div className="container d-flex align-items-center">
                <div>
                    <img
                        src="./images/logo.svg"
                        alt="Atolye 15 Logo" />
                </div>
                <div className="d-none d-md-flex flex-fill justify-content-end c_menu-items">
                    <a href="#" className="text-white font-size-14px font-family-semibold"> Anasayfa </a>
                    <a href="#" className="text-white font-size-14px font-family-semibold"> Kampanyalar </a>
                    <a href="#" className="text-white font-size-14px font-family-semibold"> Bilet İşlemleri </a>
                    <a href="#" className="text-white font-size-14px font-family-semibold"> Yardım </a>
                    <a href="#" className="text-white font-size-14px"> 
                        <i className="icon icon-magnify" />
                    </a>
                </div>
                <div className="flex-fill d-block d-md-none">
                    <div className="text-right">
                       <button className="bg-transparent border-0" onClick={this.toggleMenu}>
                            <i className="icon icon-magnify text-right text-white" />
                       </button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Header;