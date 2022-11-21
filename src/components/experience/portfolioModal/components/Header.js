const Header = ({ children }) => {
  return (
    <div className='modal-header-container'>
      <div className='modal-logo'>{children}</div>
    </div>
  );
};

export default Header;
