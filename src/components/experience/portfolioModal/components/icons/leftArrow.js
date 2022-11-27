const LeftArrow = ({ stroke, ...props }) => {
  return (
    <svg
      width='33'
      height='33'
      viewBox='0 0 33 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        {...props}
        className='footer-left-arrow'
        d='M20.7654 24.5641L12.8446 16.6434L20.7654 8.72266'
        stroke-width='2.64024'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default LeftArrow;
