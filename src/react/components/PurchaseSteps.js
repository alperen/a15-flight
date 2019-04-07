import React from 'react';

const steps = [
    {
        title: 'Uçuş Seçimi',
        icon:'icon-airplane',
    },
    {
        title: 'Bilgileriniz',
        icon:'icon-calendar_text',
    },
    {
        title: 'Koltuk Bilgileriniz',
        icon:'icon-seat_recline_extra',
    },
    {
        title: 'Ödeme Bilgileriniz',
        icon:'icon-credit_card',        
    }
];

class PurchaseSteps extends React.Component {
    render() {
        const {activeStep = 0} = this.props;
        return <div className="c_purchase-steps d-flex">
           {steps.map(({title,icon},index) => { 
                return <div className={`step d-flex ${index == activeStep ? 'active' :''}`} key={index}>
                    <span className="align-items-center d-flex icon-container text-colour-botticelli justify-content-center">
                       <i className={`icon ${icon}`} />
                    </span>
                    {index == activeStep && <span className="name d-flex align-items-center text-colour-bay-of-many font-family-semibold font-size-14px">
                        {title}
                    </span>}
                </div>
           })}
        </div>
    }
}

export default PurchaseSteps;