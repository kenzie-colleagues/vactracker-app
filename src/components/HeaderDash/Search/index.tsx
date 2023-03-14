import { MdSearch } from "react-icons/md";
import { useContext, useState } from 'react';
import { CartContext } from '../../../providers/CartContext/CartContext';

const SearchForm = () => {
  const { setSearch } = useContext(CartContext);
  const [searchValue, setSearchValue] = useState('');
  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearch(searchValue);
    setSearchValue('');
  };
  return (
    <form onSubmit={submit} className="w-full h-10 flex items-center justify-center flex-row">
      <input  className=" w-11/12 h-full flex items-center justify-center flex-row rounded-lg p-3 "
        type='text'
        placeholder='Digitar pesquisa'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button  type='submit' className= 'ml-4'>
        <MdSearch />
      </button>
    </form>
  );
};
export default SearchForm;
