import { useState } from 'react';
import Modal from '../../components/Modal';

function Ranking() {
  const [open, setOpen] = useState(false);
  console.log('render');
  return (
    <div className="flex min-h-screen flex-col mt-20 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode">
      <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
        <div className=" text-textColor font-semibold  dark:text-textDarkMode my-10 text-3xl">Ranking Collections</div>
        <button onClick={() => setOpen(true)}>open</button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <h1>Modal</h1>
          <h2>Popup</h2>
        </Modal>
      </div>
    </div>
  );
}

export default Ranking;
