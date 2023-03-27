import React from 'react';
import styled from 'styled-components';
import { filterContact } from 'redux/sliceContacts';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state);

  const toFilteInput = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <form action="input">
      <FilterInput type="text" value={filter} onChange={toFilteInput} />
    </form>
  );
};
export default Filter;

const FilterInput = styled.input`
  width: 300px;
  padding: 10px 40px;
  border-radius: 20px;
  border: transparent;
  margin-bottom: 30px;
`;
