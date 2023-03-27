import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/sliceContacts';
import styled from 'styled-components';

export const ContactList = () => {
  const dispatch = useDispatch();

  const { contacts, filter } = useSelector(state => state);

  const data = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const onDeleteBtn = event => {
    dispatch(deleteContact(event.currentTarget.id));
  };

  if (data.length > 0) {
    return (
      <ul>
        {data.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              {name} : {number}
              <DeleteBtn id={id} type="button" onClick={onDeleteBtn}>
                delete
              </DeleteBtn>
            </ContactItem>
          );
        })}
      </ul>
    );
  }
};

const ContactItem = styled.li`
  margin-bottom: 20px;
`;
const DeleteBtn = styled.button`
  margin-left: 20px;
  border-radius: 20px;
  border: transparent;
  padding: 10px 25px;
  background-color: burlywood;
`;
