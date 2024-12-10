import './Footer_upper.css'
export default function Footer_upper() {
  return (
    <>
      <div className="header">
        <div className="first_header">
            <span>Hire faster</span>
            <h1>An seamless experience for candidates</h1>
            <p>Treat candidates with a rich careers site and a wonderful application process.</p>
        </div>
        <div className="container">
            <div className="paragraph">
                <h1>Share teams inboxes</h1>
                <p>Wheather you have a team of 2 or 200, our shared teams inboxes keep everyone on the same page and in the loop.</p>
                <span>Learn more</span>
                <h1>Deliver instant answers</h1>
                <p>An all-in-one customers service platfrom that helps you balance everything your customers need to be happy.</p>
                <span>Learn more</span>
                <h1>Manage your teams with reports</h1>
                <p>Measure what matters with Untitled s easy-to-use reports. You can filter, Export, and drilldown on the data in a couple clicks.</p>
                <span>Learn more</span>
            </div>
            <div className="img">
                <img src="https://media.istockphoto.com/id/1345912457/photo/financial-stock-market-graph-selective-focus.jpg?s=612x612&w=0&k=20&c=I-XKq4_2c3rOJPezkG5J6DNbl65OVgmGbX4yrp5T7qQ=" alt="" />
            </div>
        </div>
      </div>

      <div className="sign">
        <div className="sign_para">
            <h1>Sign up for Our newsletter</h1>
            <p>be the first to know about releses and industry news ans insights.</p>
        </div>
        <div className="input">
            <div className="main_input">
                <input type="text" placeholder='Enter your email....' />
                <button>Subscribe</button>
            </div>
            <p>We care about your data in our <span>privacy policy</span>.</p>
        </div>
      </div>
    </>
  )
}
