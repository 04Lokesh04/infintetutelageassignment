import './index.css'

const QuickLinks=()=>(
    <div className='quick-links'>
        <h1 className='heading1'>Quick links</h1>
        <ul className='linkslist'>
            <li className='link'>
                <img className='link-image' src='images/arrow-left-down-line.png' alt='icon'/>
                <p className='link-para'>Deposit</p>
            </li>
            <li className='link'>
                <img className='link-image' src='images/arrow-right-up-line.png' alt='icon'/>
                <p className='link-para'>Withdraw</p>
            </li>
            <li className='link'>
                <img className='link-image' src='images/settings-4-line.png' alt='icon'/>
                <p className='link-para'>Settings</p>
            </li>
            <li className='link'>
                <img className='link-image' src='images/user-follow-line.png' alt='icon'/>
                <p className='link-para'>Verification</p>
            </li>
            <li className='link'>
                <img className='link-image' src='images/star-s-line.png' alt='icon'/>
                <p className='link-para'>Bonuses</p>
            </li>
            <li className='link'>
                <img className='link-image' src='images/line-chart-line.png' alt='icon'/>
                <p className='link-para'>MT5</p>
            </li>
            <li className='link'>
                <img className='link-image' src='images/arrow-left-right-line.png' alt='icon'/>
                <p className='link-para'>Transfer</p>
            </li>
            <li className='link'>
                <img className='link-image' src='images/history-line.png' alt='icon'/>
                <p className='link-para'>History</p>
            </li>
            <li className='link'>
                <img className='link-image' src='images/user-2-line.png' alt='icon'/>
                <p className='link-para'>Partner</p>
            </li>
            <li className='link'>
                <img className='link-image' src='images/token-swap-line.png' alt='icon'/>
                <p className='link-para'>Exchange</p>
            </li>
            <li className='link'>
                <img className='link-image' src='images/bar-chart-grouped-line.png' alt='icon'/>
                <p className='link-para'>Analytics</p>
            </li>
        </ul>
    </div>
)

export default QuickLinks