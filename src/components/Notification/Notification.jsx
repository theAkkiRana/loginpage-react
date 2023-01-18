import Alert from 'react-bootstrap/Alert';

export default function Notification({ notification }){
  return (
    <>
        <Alert key={notification.variant} variant={notification.variant} data-testid="notification-alert">
          {notification.message}
        </Alert>
    </>
  );
}