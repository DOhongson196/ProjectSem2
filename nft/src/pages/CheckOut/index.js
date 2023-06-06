import FormCheckOut from './FormCheckOut';
import MethodPayment from './MethodPayment';
import { useState } from 'react';
import InformationOrder from './InformationOrder';

function CheckOut() {
  const [formValue, setFormValue] = useState({});
  const [valid, setValid] = useState(false);
  return (
    <div className="flex flex-col pb-20 min-h-[820px] bg-[#FFFFFF] dark:bg-bgDarkMode  text-textColor dark:text-textDarkMode ">
      <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
        <div className="  mx-auto my-10 text-3xl font-semibold uppercase italic tracking-wider">Incredible</div>

        <div className="grid grid-cols-2">
          <div className="col-start border-r border-textColor ">
            {!valid ? (
              <FormCheckOut setFormValue={setFormValue} setValid={setValid} />
            ) : (
              <MethodPayment formValue={formValue} setValid={setValid} />
            )}
          </div>
          <div className="col-end ml-12 ">
            <InformationOrder />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
