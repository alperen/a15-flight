import React, { Component } from 'react';

class Flight extends Component {

    render() {
        const {
            price,
            departure,
            arrival,
            flightTime,
            transfer,
            selected
        } = this.props;

        return <div className={`c_flight-card`}>
            <div className="row">
                <div className="col col-3 d-flex justify-content-center align-items-center">
                    <img src="./images/pegasus.png" alt="Pegasus" className="img-fluid" />
                </div>
                <div className="col col-9">
                    <div className="d-flex justfiy-content-center align-items-center">
                        <div className="flex-fill">
                            <div className="price font-size-24px font-family-semibold text-colour-bay-of-many text-right">
                                <span>{price}</span>
                            </div>
                        </div>
                        <div className="d-none d-md-block">
                            <a href="#" className={`c_btn flight-card-btn position-fix ${selected ? 'bg-blue' : ''}`}>
                                {selected && 'Bilet Seçildi'}
                                {!selected && 'Bileti Seç'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dotted-line" />
            <div>
                <div className="row">
                    <div className="col col-12 col-md-11">
                        <div className="row heads font-size-14px font-family-semibold text-colour-gullGray">
                            <div className="col col-6 col-md-3">
                                <span>{departure.code}</span>
                            </div>
                            <div className="col col-6 col-md-3">
                                <span>{arrival.code}</span>
                            </div>
                            <div className="col col-3 d-none d-md-block">
                                <span>Süre</span>
                            </div>
                            <div className="col col-3 d-none d-md-block">
                                <span>Transfer</span>
                            </div>

                        </div>
                        <div className="row details font-size-24px font-family-semibold text-colour-bay-of-many">
                            <div className="col col-6 col-md-3">
                                <span>{departure.time}</span>
                            </div>
                            <div className="col col-6 col-md-3">
                                <span>{arrival.time}</span>
                            </div>
                            <div className="col col-3 d-none d-md-block">
                                <span>{flightTime}</span>
                            </div>
                            <div className="col col-3 d-none d-md-block">
                                {transfer == 0 && <span>Aktarmasız</span>}
                                {transfer != 0 && <span className="text-colour-radical">{transfer} Aktarmalı</span>}
                            </div>
                        </div>
                    </div>
                    <div className="align-items-center col col-1 d-none d-md-flex see-detail">
                        <i className="icon icon-chevron_right text-colour-gullGray" />
                    </div>
                </div>
            </div>
            <div className="mt-2 d-block d-md-none font-size-14px font-family-semibold text-colour-gullGray">
                <div className="row">
                    <div className="col col-6">
                        <div>
                            <span>Süre: </span>
                            <span className="text-colour-bay-of-many">{flightTime}</span>
                        </div>
                        <div>
                            <span>Transfer: </span>
                            <span>
                                {transfer == 0 && <span className="text-colour-bay-of-many">Aktarmasız</span>}
                                {transfer != 0 && <span className="text-colour-radical">{transfer} Aktarmalı</span>}
                            </span>
                        </div>
                    </div>
                    <div className="col col-6 align-items-center d-flex justify-content-center d-flex h-100">
                    <a href="#" className={`c_btn flight-card-btn position-fix ${selected ? 'bg-blue' : ''}`}>
                                {selected && 'Bilet Seçildi'}
                                {!selected && 'Bileti Seç'}
                            </a>
                    </div>
                </div>
            </div>
            <div className="flight-direction align-items-center d-none d-md-flex">
                <span className="dot pl-1">··</span>
                <span className=""> <i className="icon-airplane rotate-90deg" /> </span>
                <span className="dot pr-1">··</span>
            </div>
        </div>
    }
}

export default Flight;