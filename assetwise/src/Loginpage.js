import {Link} from 'react-router-dom';

const Loginpage = () => {
    return ( 
        <div className="login-page container d-flex justify-content-center align-items-center min-vh-100">

        <div className ="row border rounded-5 p-3 bg-white shadow box-area">

      
            <div className="candlestickbg boxy col-md-7 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                <img className="candlestickimage rounded-5" src={require('./images/candlestickgraph.jpg')}  alt="cleaning background image" />
            </div>
    

            <div className="login-details boxy col-md-5 right-box">
                <div className="logo d-flex justify-content-end">
                    <img className="logoimage rounded-4" src={require('./images/assetwiselogo2.png')} alt="logo" />
                </div>
                <div className="header">
                    <h2>Hello,Again</h2>
                    <p className="mb-3">Please enter your details</p>
                </div>
                <div className="body">
                    <form action="/dashboard">
                        <label>
                        <div className="input-group mb-3 ">
                             <input type="text" className="email form-control form-control-lg bg-light fs-6 " placeholder="Email address"/>
                        </div>
                        </label>
                        
                        <label>
                        <div className="input-group mb-2">
                            <input type="password" className="pswd form-control form-control-lg bg-light fs-6 " placeholder="Password"/>
                        </div>
                        </label>

                        <label className='rememberBox'>
                        <div className="input-group mb-5 d-flex justify-content-between">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="formCheck"/>
                                <label for="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                            </div>
                            <div className="forgot">
                                <small><a href="#">Forgot Password?</a></small>
                            </div>
                        </div>
                        </label>

                        <div className="input-group mb-3">
                            <button className="btn btn-lg btn-primary w-100 fs-6">Login</button>
                        </div>
    
                      

    
                        <div className="row">
                            <small>Don't have account? <Link to="/signup">Sign Up</Link></small>
                        </div>
                    </form>
                </div>
            </div>
    

        </div>
        
    </div>
     );
}
 
export default Loginpage;