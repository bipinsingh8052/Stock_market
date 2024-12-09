import './Navbar.css'

export default function Navbar() {
  return (
    <header>
        
        <nav>
             <input type="checkbox"  />
            <h1>Untitled</h1>
            <div className="buttn">
                <button style={{border:"none",outline:"none", backgroundColor:"transparent" }} className="login" >Log in</button>
                <button className="signup" > Sign up</button>
            </div>
        </nav>
        <div className="herosection">
            <div className="innersection">
                <h1>Customer Service software for customer-First teams</h1>
                <p>The best customer service software for customer-first teams. Industry-leading email and live chat support.</p>
                <div className="input">
                    <input type="text" placeholder="Enter your email.." />
                    <button>Get started</button>
                </div>
                <span>We can about your data in our <a href="/">privacy policy.</a></span>
            </div>
        </div>
    </header>
  )
}
