import React from 'react';
import DatePicker from './DatePicker';
import Flight from './Flight';

const flights = [
    {
        price:'144,99 TL',
        departure:{
            time:'07.05',
            code:'HTY'
        },
        arrival:{
            time:'08.25',
            code:'ADB'
        },
        flightTime:'1sa, 20dk',
        transfer:1,
        selected: false,
    },
    {
        price:'144,99 TL',
        departure:{
            time:'07.05',
            code:'HTY'
        },
        arrival:{
            time:'08.25',
            code:'ADB'
        },
        flightTime:'1sa, 20dk',
        transfer:0,
        selected: true,
    },
    {
        price:'144,99 TL',
        departure:{
            time:'07.05',
            code:'HTY'
        },
        arrival:{
            time:'08.25',
            code:'ADB'
        },
        flightTime:'1sa, 20dk',
        transfer:1,
        selected: false,
    }
];

class Results extends React.Component {
    render() {
        const {title = '', planeDirection= ''} = this.props;

        return <div className="c_result-section">
            <div className="d-flex">
                <i className={`icon icon-airplane`} />
                <h3 className="text-colour-bay-of-many font-size-24px font-family-semibold">{title}</h3>
            </div>
            <div>
                <DatePicker />
            </div>
            <div>
                {flights.map((flight,ii) => {
                    return <Flight  {...flight} key={ii} />
                })}
            </div>
        </div>
    }
}

export default Results;