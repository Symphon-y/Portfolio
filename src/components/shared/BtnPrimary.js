const BtnPrimary = ({ children, className, onClick, ...props }) => {
  className = className ? 'btn_primary ' + className : 'btn-primary';

  return (
    <button onClick={onClick} {...props} className={className}>
      {children}
    </button>
  );
};

export default BtnPrimary;
