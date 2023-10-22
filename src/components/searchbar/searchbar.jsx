import { useState } from 'react';
import { BtnSearchBar, InpSearch, FormSearch } from './searchbar.styled';
export const Form = ({ onSubmitForm }) => {
  const [value, setValue] = useState('');
  //контрольована форма
  const handleChange = evt => {
    const { value } = evt.target;
    setValue(value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    //виклик фу з App
    onSubmitForm(value);
    setValue('');
  };

  return (
    <header>
      <FormSearch onSubmit={handleSubmit}>
        <InpSearch
          type="text"
          value={value}
          name="value"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <BtnSearchBar type="submit">
          <span>Search</span>
        </BtnSearchBar>
      </FormSearch>
    </header>
  );
};
