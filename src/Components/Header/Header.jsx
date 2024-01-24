import './Header.css'
import {useNavigate, Link} from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <header id="site-header">
            <img 
                src="../../public/wand.png" 
                alt="Wand"
                onMouseOver={(e) => e.target.setAttribute('src', '../../public/wand-disappear.gif')}
                onMouseOut={(e) => e.target.setAttribute('src', '../../public/wand.png')}
                onClick={() => navigate('/')}
                id="header-img"
            />
            <h1 id="site-title">Build your Campaign!</h1>
            <nav>
                <button id="auth-button">Login/Register</button>
            </nav>
        </header>
    )
}

export default Header