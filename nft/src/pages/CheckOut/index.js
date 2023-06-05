import FormCheckOut from './FormCheckOut';

function CheckOut() {
  return (
    <div className="flex flex-col pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode">
      <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
        <div className=" text-textColor  dark:text-textDarkMode mx-auto my-10 text-3xl font-semibold uppercase italic tracking-wider">Incredible</div>
        <div className="grid grid-cols-2">
          <div className="col-start border-r border-textColor">
            <div className=" text-textColor  dark:text-textDarkMode text-xl font-semibold">Delivery information</div>
            <FormCheckOut />
          </div>
          <div className="col-end ml-12">
            <div className=" text-textColor  dark:text-textDarkMode text-xl font-semibold">Check payment</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
