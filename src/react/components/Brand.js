import React from 'react';
import PurchaseSteps from './PurchaseSteps';

class Brand extends React.Component {
    render() {
        return <div className="c_brand">
            <div className="justify-content-center container d-flex h-100 flex-column">

                <div>
                    <PurchaseSteps activeStep={0} />
                </div>

                <div className="amount-text text-white text-right font-size-16px font-family-semibold d-none d-md-block">
                    Toplam Tutar
                </div>

                <div className="row">
                    <div className="col-12 col-md-8 mt-3 mt-md-0">
                        <div className="destination d-flex flex-column flex-md-row">
                            <div className="departure font-family-semibold text-white font-size-48px">
                                Ankara (ESB)
                           </div>
                            <div className="pass-icon d-flex align-items-center">
                                <span className="dot pl-2">··</span>
                                <span className="pl-2 pr-2"> <i className="icon-airplane text-white rotate-90deg" /> </span>
                                <span className="dot pr-2">··</span>
                            </div>
                            <div className="arrival font-family-semibold text-white font-size-48px">
                                İzmir (ADB)
                           </div>
                        </div>
                        <div className="information font-family-semibold text-white font-size-14px">
                            <span>27 Eyl, Pzr - 08 Eki, Pts</span>
                            <span className="dot">·</span>
                            <span>1 Yetişkin</span>
                            <span className="dot">·</span>
                            <span>Gidiş - Dönüş</span>
                        </div>
                    </div>
                    <div className="col-4 d-none d-md-block">
                        <div className="amount text-right text-white font-size-48px font-family-semibold">
                            <span>321.99 TL</span>
                        </div>
                        <div className="d-flex justify-content-end">
                            <a href="#" className="c_btn">
                                Devam Et
                                <span className="icon icon-chevron_right" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="d-block d-md-none mt-2">
                    <div className="row">
                        <div className="col col-6">
                            <div className="amount-text text-white mt-0 font-size-16px font-family-semibold">
                                Toplam Tutar
                            </div>
                            <div className="amount text-right text-white font-size-40px font-family-semibold mb-0">
                                <span>321.99 TL</span>
                            </div>
                        </div>
                        <div className="col col-6">
                            <div className="d-flex h-100 align-items-center">
                                <a href="#" className="c_btn d-block">
                                    Devam Et
                                    <span className="icon icon-chevron_right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Brand;