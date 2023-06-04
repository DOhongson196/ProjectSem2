function FormCheckOut() {
  return (
    <form className="mt-4 text-textColor  dark:text-textDarkMode text-sm">
      {/* fullname */}
      <div>
        <label className="font-normal cursor-text">FullName</label>
        <div className="relative mt-1 w-11/12 leading-4 h-10 rounded border border-[#B7BDC6] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
          <input className="w-full h-full px-3 outline-none bg-transparent mb-[2px]" />
        </div>
      </div>
      {/* Email */}
      <div>
        <label className="font-normal cursor-text">Email</label>
        <div className="relative mt-1 w-11/12 leading-4 h-10 rounded border border-[#B7BDC6] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
          <input className="w-full h-full px-3 outline-none bg-transparent mb-[2px]" />
        </div>
      </div>
      {/* phone */}
      <div>
        <label className="font-normal cursor-text">Phone Number</label>
        <div className="relative mt-1 w-11/12 leading-4 h-10 rounded border border-[#B7BDC6] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
          <input className="w-full h-full px-3 outline-none bg-transparent mb-[2px]" />
        </div>
      </div>
      {/* address */}
      <div>
        <label className="font-normal cursor-text">Address</label>
        <div className="relative mt-1 w-11/12 leading-4 h-10 rounded border border-[#B7BDC6] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
          <input className="w-full h-full px-3 outline-none bg-transparent mb-[2px]" />
        </div>
      </div>
    </form>
  );
}

export default FormCheckOut;
