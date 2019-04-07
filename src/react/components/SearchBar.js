import React from 'react';

class SearchBar extends React.Component {
    render() {
        return <div className="c_search-bar">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col col-6 col-md-2 section">
                        <div className="align-items-center d-flex h-100">
                            <div>
                                <i className="icon icon-airplane_landing" />
                            </div>
                            <div className="pl-2 pt-1">
                                <span>Nereden?</span>
                            </div>
                        </div>
                    </div>
                    <div className="col col-6 col-md-2 section">
                        <div className="align-items-center d-flex h-100">
                            <div>
                                <i className="icon icon-airplane_takeoff" />
                            </div>
                            <div className="pl-2 pt-1">
                                <span>Nereye?</span>
                            </div>
                        </div>
                    </div>
                    <div className="col col-6 col-md-3 section">
                    <div className="align-items-center d-flex h-100">
                            <div>
                                <i className="icon icon-account" />
                            </div>
                            <div className="pl-2 pt-1">
                                <span>Gidiş / Dönüş Tarihi Seç</span>
                            </div>
                        </div>
                    </div>
                    <div className="col col-6 col-md-2 section">
                    <div className="align-items-center d-flex h-100">
                            <div>
                                <i className="icon icon-airplane" />
                            </div>
                            <div className="pl-2 pt-1">
                                <span>Yolcu Seç</span>
                            </div>
                        </div>
                    </div>
                    <div className="align-items-center col col-8 col-md-3 d-flex justify-content-center justify-content-md-end mb-2 mb-md-0 mt-2 mt-md-0 offset-2 offset-md-0 bar-btn">
                        <a href="#" className="c_btn bg-gullGray text-white" style={{ float: 'right' }}>
                            Yeniden Ara
                            <span className="icon icon-magnify" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default SearchBar;