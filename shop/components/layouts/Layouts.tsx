import Header from '../modules/Header/Header';

const Layouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <div className=''></div>
    </>
  );
};

export default Layouts;
