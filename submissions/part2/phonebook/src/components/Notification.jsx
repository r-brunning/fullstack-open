export const Notification = ({ message, alertType }) => {
  const getNotificationStyles = (alertType) => {
    switch (alertType) {
      case "newPerson":
        return {
          color: "green",
          backgroundColor: "lightGrey",
          fontSize: 20,
          borderColor: "green",
          borderStyle: "solid",
          borderWidth: 5,
        };
      case "alreadyDeletedAlert":
        return {
          color: "red",
          backgroundColor: "lightGrey",
          fontSize: 20,
          borderColor: "red",
          borderStyle: "solid",
          borderWidth: 5,
        };
      default:
        return {};
    }
  };

  if (!message) {
    return null;
  }

  const notificationStyles = getNotificationStyles(alertType);

  return (
    <div className="notification" style={notificationStyles}>
      {message}
    </div>
  );
};
