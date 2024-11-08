
import React, {useState} from 'react';

//regex pour correspodre aux nombres décimaux entre 1 et 10
const validPhoneNumber = /^\d{0,10}$/;

export default function PhoneNumber() {

  //declare l'état courant de l'état et le setter de l'état
    const [phone, setPhone] = useState('')

    const handleChange = ({target}) => {
      const newPhone = target.value;
      const isValid = validPhoneNumber.test(newPhone);

      if(isValid){
        //mise à jour de l'état
        setPhone(newPhone);
      }
      //ignore l'evènement lorsque la nouvelle valeur est invalide
      return
    }

  return (
    <div classNaame="phone">PhoneNumber
      <label for='phone-input'>Phone : <span>{phone}</span></label>
      <input id='phone-input' value={phone} onChange={handleChange} />
    </div>
  )
}
