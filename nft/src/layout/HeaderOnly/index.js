import Header from '../DefaultLayout/Header';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
}

export default DefaultLayout;
