function InformationOrder() {
  return (
    <div className="col-end-5 w-5/6 bg-[#f5f5f5] dark:bg-[#0b0e11]  p-6 mt-5 rounded-xl">
      <div className="flex justify-center text-lg font-semibold pb-2 border-textColor border-b ">Information order</div>
      <div className="flex justify-between text-base  text-textColor dark:text-textDarkMode ">
        <span>Total</span>
        <span>800$</span>
      </div>
      <div className="flex justify-between text-base  text-textColor  dark:text-textDarkMode ">
        <span>Shipping & taxes</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between text-lg font-semibold pt-2 border-textColor border-t ">
        <span>Subtotal</span>
        <span>800$</span>
      </div>
    </div>
  );
}

export default InformationOrder;
