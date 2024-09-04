export const Notification = ({ message }) => {
  const notificationStyles = {
    background: 'lightgrey',
    color: 'green',
    fontSize: 20,
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: 5  
  }

  if (message === null) {
    return null;
  }

  return (
    <div className='error' style={notificationStyles}>
      {message}
    </div>
  );
};
