import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function MethodPayment({ formValue, setValid }) {
  const [radio, setRadio] = useState('1');
  const onChange = (e) => {
    setRadio(e.target.value);
  };
  console.log(formValue);
  const handleBack = () => {
    setValid(false);
    console.log('set');
  };
  return (
    <>
      <div className="col-end-5 w-11/12 bg-[#f5f5f5] dark:bg-[#0b0e11] p-6 mt-5 rounded-xl">
        <div className="text-lg font-semibold pb-2 border-textColor border-b ">Method payment</div>
        <div className="text-base  text-textColor my-2 dark:text-textDarkMode">
          <div className="flex items-center mb-2">
            <input
              id="cod"
              type="radio"
              name="pay"
              value="1"
              onChange={(e) => onChange(e)}
              className="mr-3"
              defaultChecked
            />
            <label htmlFor="cod">Cash On Delivery(COD)</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="online" name="pay" value="2" onChange={(e) => onChange(e)} className="mr-3" />
            <label htmlFor="online">Online Payment</label>
          </div>
        </div>
        {radio === '1' && (
          <Button
            primary
            className={'w-full justify-center items-center whitespace-nowrap h-12 py-[6px] dark:text-textColor my-6'}
          >
            Method Payment
          </Button>
        )}
        {radio === '2' && (
          <div className="my-6">
            <PayPalScriptProvider
              options={{
                'client-id': 'ATdIMK863PUHVxaIZlrr8WU2Gh3RZaFlzVPiWM6n8XjlGS_WSm3G5ySM4yDvpK9gX19MG3F1EHGCVQ9X',
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: '100',
                          currency_code: 'USD',
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    console.log(details);
                    alert('Successfully');
                  });
                }}
                onCancel={(data) => {
                  alert('Cancelled');
                }}
                onError={(data) => {
                  alert('Error: ' + data);
                }}
              />
            </PayPalScriptProvider>
          </div>
        )}
      </div>
      <button className="text-[#d0980b] decoration-solid underline text-lg font-medium italic" onClick={handleBack}>
        <FontAwesomeIcon icon={faArrowLeftLong} className="mr-1" />
        Back to CheckOut
      </button>
    </>
  );
}

export default MethodPayment;
