// TODO TEST FUNCTION AND DELETE PAGE 

import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import PhoneFake from "./PhoneFake";
import { onlyCountries } from "../../config/urls.config";


export default function TestPaises() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("US");
  
    useEffect(() => {
      axios.get(onlyCountries)
        .then(async (response) => {
          if (response.data.status === 200) {
            const formatedCountries = await response.data.countries.map((country) => ({
              value: country.indicactive,
              label: country.name, 
            }));
            setCountries(formatedCountries);
            console.table('ESTOS SON LOS PAISES:', formatedCountries[0].label)
          }
        })
        .catch((error) => {
          console.error("Error al obtener la lista de países:", error);
        });
    }, []);
  
    return (
      <div>
        { countries ? <PhoneInput
          country={"Colombia"}
          value={selectedCountry}
          onChange={(value) => setSelectedCountry(value)}
          onlyCountries={countries.map((item)=>item.value)}
        />: null }
        <PhoneFake arr={countries} />
      </div>
    );
  }
  