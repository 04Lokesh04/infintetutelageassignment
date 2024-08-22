import './/index.css'
import SidePanel from '../SidePanel'
import Navbar from '../Navbar'
import QuickLinks from '../QuickLinks'
const Home=()=>{
    return (
        <div className='main'>
            <SidePanel />
            <div className='home-container'>
                <Navbar />
                <div className='Home-Contents'>
                    <div className='part1'>
                        <QuickLinks />
                        <div className='graph-container'>
                            <div className='graph-header'>
                                <h1 className='graph-heading'>Overview</h1>
                                <div className='graph-download'>
                                    <img className='download-image' src='images\Vector (5).png' alt='download'/>
                                    <p className='graph-para'> Download report</p>
                                </div>
                            </div>
                            <div className='buttons'>
                                <button className='graph-button' type='button'>Monthly</button>
                                <button className='graph-button2' type='button'>Yearly</button>
                            </div>
                            <img className='graph-image' src='images/Frame 1000001443.png' alt='Barchart' />
                        </div>
                    </div>
                    <div className='part2'>
                        <div className='statscard1'>
                            <h1 className='statsheading'>Trading Accounts</h1>
                            <div className='account'>
                                <p className='accountpara1'>Master Account</p>
                                <div className='section1'>
                                    <p className='accountpara2'>CTrader</p>
                                    <p className='accountpara3'>#273728</p>
                                </div>
                                <div className='section2'>
                                    <p className='accountpara4'>0.00 <span className='accountpara5'>USD</span></p>
                                    <img className='account-image' src='images/arrow-right-up-line.png' alt='icon'/>
                                </div>

                            </div>

                            <div className='account'>
                                <p className='accountpara1'>Master Account</p>
                                <div className='section1'>
                                    <p className='accountpara2'>CTrader</p>
                                    <p className='accountpara3'>#273728</p>
                                </div>
                                <div className='section2'>
                                    <p className='accountpara4'>0.00 <span className='accountpara5'>USD</span></p>
                                    <img className='account-image' src='images/arrow-right-up-line.png' alt='icon'/>
                                </div>

                            </div>

                        </div>
                        <div className='statscard1'>
                            <h1 className='statsheading'>Open Trades</h1>
                            <div className='trade-card'>
                                <div className='trade-section1'>
                                    <div className='tradeparas'>
                                        <p className='tradepara1'>GBPUSD</p>
                                        <p className='tradepara2'>Long</p>
                                    </div>
                                    <p className='tradepara3'>0.12</p>
                                </div>
                                <p className='tradepara4'><span className='tradepara5'>+56.00</span>USD</p>
                            </div>

                            <div className='trade-card'>
                                <div className='trade-section1'>
                                    <div className='tradeparas'>
                                        <p className='tradepara1'>USDJPY</p>
                                        <p className='tradepara2'>Long</p>
                                    </div>
                                    <p className='tradepara3'>0.12</p>
                                </div>
                                <p className='tradepara4'><span className='tradepara6'>-0.09</span>USD</p>
                            </div>

                            <div className='trade-card'>
                                <div className='trade-section1'>
                                    <div className='tradeparas'>
                                        <p className='tradepara1'>EURUSD</p>
                                        <p className='tradepara22'>Short</p>
                                    </div>
                                    <p className='tradepara3'>0.12</p>
                                </div>
                                <p className='tradepara4'><span className='tradepara6'>-1.09</span>USD</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
