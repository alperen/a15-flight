import React from 'react';

class DatePicker extends React.Component {
    render() {
        return <div className="c_date-picker">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col col-1 button left">
                        <div className="align-items-center d-flex h-100 justify-content-center">
                            <span className="icon icon-chevron_left pl-0 font-size-24px"></span>
                        </div>
                    </div>
                    <div className="col col-10">
                        <div className="row dates h-100">
                            <div className="col col-4 date-block">
                                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                    <span className="date font-size-16px text-colour-bay-of-many font-family-semibold">26 Eyl, Cmt</span>
                                    <span className="price font-size-14px font-family-semibold">192.11 TL</span>
                                </div>
                            </div>
                            <div className="col col-4 date-block is-active">
                                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                    <span className="date font-size-16px text-colour-bay-of-many font-family-semibold">27 Eyl, Pzr</span>
                                    <span className="price font-size-14px font-family-semibold">244.99 TL</span>
                                </div>
                            </div>
                            <div className="col col-4 date-block">
                                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                    <span className="date font-size-16px text-colour-bay-of-many font-family-semibold">28 Eyl, Pzt</span>
                                    <span className="price font-size-14px font-family-semibold">999.24 TL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-1 button right">
                        <div className="align-items-center d-flex h-100 justify-content-center">
                            <span className="icon icon-chevron_right pl-0 font-size-24px"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default DatePicker;