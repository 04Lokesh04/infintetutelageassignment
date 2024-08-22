import './index.css'

const SidePanel=()=>(
    <div className='Sidepanel'>
        <div className='logo-card'>
            <img  className='logo' src='images/Vector (6).png' alt='brand-logo'/>
            <img className='short-mark' src='images/®.png' alt='mark' />
        </div>

        <ul className='items1'>
            <li className='item'>
                <img className='item-image' src='images/dashboard-line.png' alt='icon'/>
                <p className='item-para'>Dashboard</p>
            </li>
            <li className='item'>
                <img className='item-image' src='images/copilot-line.png' alt='icon'/>
                <p className='item-para'>CRM</p>
            </li>
            <li className='item'>
                <img className='item-image' src='images/box-3-line.png' alt='icon'/>
                <p className='item-para'>MAM</p>
            </li>
            <li className='item'>
                <img className='item-image' src='images/Vector.png' alt='icon'/>
                <p className='item-para'>PAMM</p>
            </li>
            <li className='item'>
                <img className='item-image' src='images/Vector (1).png' alt='icon'/>
                <p className='item-para'>Trade</p>
            </li>
            <li className='item'>
                <img className='item-image' src='images/wallet-line.png' alt='icon'/>
                <p className='item-para'>Wallet</p>
            </li>
            <li className='item'>
                <img className='item-image' src='images/money-dollar-circle-line.png' alt='icon'/>
                <p className='item-para'>Accounts</p>
            </li>
            <li className='item'>
                <img className='item-image' src='images/Vector (2).png' alt='icon'/>
                <p className='item-para'>History</p>
            </li>
        </ul>

        <ul className='items2'>
            <li className='item'>
                <img className='item-image' src='images/notification-4-line.png' alt='icon'/>
                <p className='item-para'>Notifications</p>
            </li>

            <li className='item'>
                <img className='item-image' src='images/Vector (3).png' alt='icon'/>
                <p className='item-para'>Settings</p>
            </li>
            <li className='item'>
                <img className='item-image' src='images/headphone-line.png' alt='icon'/>
                <p className='item-para'>Help & Support</p>
            </li>
            <li className='item'>
                <img className='item-image' src='images/logout-box-line.png' alt='icon'/>
                <p className='item-para'>Log Out</p>
            </li>
            <li className='item-last'>
                <img className='item-image2' src='images/Frame 19.png' alt='icon'/>
                <div className='profile-item'>
                <p className='item-para'>Shyam Shakur</p>
                <p className='item-para2'>Shyam01.shakur@m...</p>
                </div>
            </li>
        </ul>

    </div>
)

export default SidePanel