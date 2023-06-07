function Modal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors text-[#1e2329] dark:text-textDarkMode ${
        open ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white dark:bg-[#474d57] rounded-xl shadow p-6 transition-all ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg hover:text-primary">
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
