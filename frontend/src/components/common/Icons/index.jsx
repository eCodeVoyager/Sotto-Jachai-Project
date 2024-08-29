const DashboardIcon = ({ className }) => {
  return (
    <>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.375 5.875V0.625H16.375V5.875H9.375ZM0.625 9.375V0.625H7.625V9.375H0.625ZM9.375 16.375V7.625H16.375V16.375H9.375ZM0.625 16.375V11.125H7.625V16.375H0.625ZM2.375 7.625H5.875V2.375H2.375V7.625ZM11.125 14.625H14.625V9.375H11.125V14.625ZM11.125 4.125H14.625V2.375H11.125V4.125ZM2.375 14.625H5.875V12.875H2.375V14.625Z"
          fill="#4D5959"
          className={className}
        />
      </svg>
    </>
  );
};
const MyContentsIcon = ({ className }) => {
  return (
    <>
      <svg
        width="17"
        height="19"
        viewBox="0 0 17 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.33333 18.3333V14.6667H2.75L0 11.9167L2.75 9.16667H7.33333V7.33333H0.916667V1.83333H7.33333V0H9.16667V1.83333H13.75L16.5 4.58333L13.75 7.33333H9.16667V9.16667H15.5833V14.6667H9.16667V18.3333H7.33333ZM2.75 5.5H12.9938L13.9104 4.58333L12.9938 3.66667H2.75V5.5ZM3.50625 12.8333H13.75V11H3.50625L2.58958 11.9167L3.50625 12.8333Z"
          fill="#4D5959"
          className={className}
        />
      </svg>
    </>
  );
};
export { DashboardIcon, MyContentsIcon };
