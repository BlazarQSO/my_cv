import { useParams } from 'react-router-dom';

export const ContactPage = () => {
  const { contactId } = useParams();

  return <div>Contact {contactId}</div>;
};
