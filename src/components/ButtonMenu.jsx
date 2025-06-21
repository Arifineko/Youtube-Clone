import { useContext } from 'react';
import menuIcon from '../assets/icon/menu-icon.svg'
import { MenuContext } from '../context/MenuContext';

const ButtonMenu = () => {
    const { menu, setMenu } = useContext(MenuContext)

    return (
        <button onClick={() => setMenu(!menu)}>
            <img className='mx-3 cursor-pointer' src={menuIcon} alt="" />
        </button>
    )
}

export default ButtonMenu