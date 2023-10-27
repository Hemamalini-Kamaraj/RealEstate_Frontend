import React from 'react';

const TextField = ({ label, ...props }) => {

    return (
        <div className="form-group">
            <label htmlFor={props.id} className="labelStyle">{label}</label>
            <div className='personalDetails'>
                <input className='formInputs'
                    {...props}
                />
            </div>
        </div>
    )
}

export default TextField;