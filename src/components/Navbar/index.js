import './index.css'

const Navbar=()=>(
    <nav className='Navbar'>
        <h1 className='nav-heading'>Dashboard</h1>
        <div className='input-container'>
            <div className='input-card'>
                <img className='nav-search' src='images/Vector (7).png' alt='search' />
                <input className='nav-input'
                placeholder='Search...'
                type='search' />
            </div>
            <img className='nav-notification' src='images/notification-3-line.png' alt='notification'/>
        </div>
    </nav>
)

export default Navbar