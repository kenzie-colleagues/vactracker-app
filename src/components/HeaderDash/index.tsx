import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import { CartContext } from '../../providers/CartContext/CartContext';

//import SearchForm from './SearchForm';

const HeaderDash = () => {
  const {userLogout} = useContext(UserContext)
  const {setModalCartShoppingList} = useContext(CartContext)
return (
<header>
  <div>
    <div >
      <nav >
  
        <div className='buttons'>
          <button
            type='button'
            onClick={() => 
              setModalCartShoppingList(true)
            }
          >
            <MdShoppingCart  />
          </button>
          <button type='button'
          onClick={() =>{userLogout()}}
          >
            <MdLogout />
          </button>
        </div>
      </nav>
    </div>
  </div>
</header>
)
}
export default HeaderDash;