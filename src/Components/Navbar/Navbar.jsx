import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const { gettotalCartitem } = useContext(ShopContext);
    const [openMenu, setOpenMenu] = useState(false);

    const navItems = [
        { name: 'shop', to: '/' },
        { name: 'Men', to: '/mens' },
        { name: 'Women', to: '/womens' },
        { name: 'Kids', to: '/kids' }
    ];

    const closeMenu = () => {
        setOpenMenu(false);
    };

    return (
        <>
            <div className='navbar'>
                <div className='nav-logo'>
                    <img src={logo} alt='' />
                    <p>SHOPPER</p>
                </div>
                <ul className='nav-menu'>
                    {navItems.map((item, i) => (
                        <li key={i} onClick={() => setMenu(item.name)}>
                            <Link to={item.to} style={{ textDecoration: "none" }}>{item.name}</Link>
                            {menu === item.name ? <hr /> : <></>}
                        </li>
                    ))}
                </ul>
                <div className='nav-login-cart'>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                    <Link to='/cart'>
                        <img src={cart_icon} alt='' />
                    </Link>
                    <div className='nav-cart-count'>{gettotalCartitem()}</div>
                </div>
                <GiHamburgerMenu className='Menu-bar' onClick={() => setOpenMenu(true)} />
            </div>
            <div className='responsive-menu' style={{ display: openMenu ? "block" : "none" }}>
                <ul className='nav-menu2'>
                    <div className='nav-logo2'>
                        <img src={logo} alt='' />
                        <p>SHOPPER</p>
                    </div>
                    {navItems.map((item, i) => (
                        <li key={i} onClick={() => { setMenu(item.name); closeMenu(); }}>
                            <Link to={item.to} style={{ textDecoration: "none" }}>{item.name}</Link>
                            {menu === item.name ? <hr /> : <></>}
                        </li>
                    ))}
                </ul>
                <div className='login2'>
                    <Link className='button2' to='/login'>
                        <button>Login</button>
                    </Link>
                </div>
                <MdClose className='close-botton' onClick={() => setOpenMenu(false)} />
            </div>
        </>
    );
};

export default Navbar;
