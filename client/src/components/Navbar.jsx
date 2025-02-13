import React, { useContext } from 'react'
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';
import About3 from '../assets/siri.png';
import { GeneralContext } from '../context/GeneralContext';

const Navbar = () => {

    const navigate = useNavigate();
    const usertype = localStorage.getItem('userType');

    const {logout} = useContext(GeneralContext);

  return (
    <>
        <div className="navbar">

        {usertype === 'customer' ? 
        
        <>
            <div className='ban'>
                    <img src ={About3} className='sirii' alt="" />
                    <h2 className='title'>SIRI Bank</h2>
                    </div>

            <div className="nav-options" >

                <p onClick={()=>navigate('/home')}><b>Home</b></p>
                <p onClick={()=>navigate('/deposits')}><b>Deposits</b></p>
                <p onClick={()=>navigate('/loans')}><b>Loans</b></p>
                <p onClick={()=>navigate('/transactions')}><b>Transactions</b></p>
                <p onClick={logout}><b>Logout</b></p>

            </div>
        </>
            :  usertype === 'admin' ?

                    <>
                    <div className='bann'>
                    <img src ={About3} className='siriii' alt="" />
                    <h2 className='titlee'>SIRI Bank_Admin</h2>
                    </div>
                        {/* <h3 ><b>SIRI Bank</b> (Admin)</h3> */}
                        <div className="nav-options" >

                            <p onClick={()=>navigate('/admin')}>Home</p>
                            <p onClick={()=>navigate('/all-users')}>Users</p>
                            <p onClick={()=>navigate('/all-deposits')}>Deposits</p>
                            <p onClick={()=>navigate('/all-loans')}>Loans</p>
                            <p onClick={()=>navigate('/all-transactions')}>Transactions</p>
                            <p onClick={logout}>Logout</p>
                        </div> 
                    </>
            
                :

                    ""

        }



            

        </div>
    
    </>
  )
}

export default Navbar