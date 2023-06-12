function MyOrder() {
    return (
      <div className="flex pt-40 pb-20 flex-col bg-[#FFFFFF] dark:bg-bgDarkMode">
        <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
          {/* Heading */}
        <div className="text-textColor mx-auto dark:text-textDarkMode mb-10 text-3xl font-semibold">My Order</div>
                  {/* Menu */}
        <div className="flex w-full h-10 border-b border-[#EAECEF] font-semibold text-base items-center text-textColor dark:text-[#848e9c]">
          <div className="flex items-center w-[480px] pb-4 justify-start">Product</div>
          <div className="flex items-center w-[150px] pb-4 justify-center  mr-20 cursor-pointer">
            <span className="mr-1">Price</span>
          </div>
          <div className="flex items-center w-[150px] pb-4 justify-center mr-20 cursor-pointer">
            <span className="mr-1">Quantity</span>
          </div>
          <div className="flex items-center w-[150px] pb-4 justify-center mr-20 cursor-pointer">
            <span className="mr-1">Total</span>
          </div>
          <div className="flex items-end w-[200px] pb-4 justify-center ">Order Status</div>
        </div>
        </div>
      </div>
    );
  }
  
  export default MyOrder;
  