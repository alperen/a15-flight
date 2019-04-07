import React from 'react';
import ResultSection from './ResultSection';

class Results extends React.Component {
    render() {
        return <div className="c_results">
            <div className="container">
                <div className="row">

                    <div className="col col-12 col-md-6 p-3">
                        <ResultSection title='Gidiş Uçuşları' planeDirection='right' />
                    </div>

                    <div className="col col-12 col-md-6 p-3">
                        <ResultSection title='Dönüş Uçuşları' planeDirection='left' />
                    </div>

                </div>
            </div>
        </div>
    }
}

export default Results;