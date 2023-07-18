import { required } from "joi";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"

function PhoneNumberValidation() {
    const [PhoneNumber, setPhoneNumber] =useState('');
    const [valid, setValid] = useState(true);

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
    };

    return(
        <div>
            <label className="text-form">
                <p>Enter your mobile number:</p>
                <PhoneInput
                country={'co'}
                value={PhoneNumber} 
                onChange={handleChange}
                inputProps={{required:true,}}
                />
            </label>
            {! valid && <p></p>}
        </div>
    )
}
export default PhoneNumberValidation;