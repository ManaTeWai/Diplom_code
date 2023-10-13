import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';



export default function Checkbox() {

  const [agreement, setAgreement] = useState(false);

  const access = (event) => {
    setAgreement(event.target.checked);
  }



  return (
    <>
      <div id="checkbox">
        <input
          type="checkbox"
          name="agreement"
          onChange={access}
        />

        <label for="agreement">
        &nbsp;Я даю согласие на обработку моих персональных данных
        </label>

        <br /><br />

        
      </div>
      <div className='Btn_disabled_space'>
        <Button className="Checkedbtn cb1 create" type='submit' name='create' id='create' formMethod="POST" disabled={!agreement}>Отправить заявку</Button>
        
      </div>
    </>
  );
}
