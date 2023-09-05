import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getFilteredContacts } from 'redux/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const handleDeleteContacts = data => {
    dispatch(deleteContact(data));
  };

  return (
    <div className={css.wrapperContactList}>
      <ul className={css.contactList}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={css.contactListItem}>
              {contact.name} : {contact.number}
              <button
                type="button"
                className={css.contactListItemBtn}
                onClick={() => handleDeleteContacts(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
