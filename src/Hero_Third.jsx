import './Hero_third.css'

export default function Hero_Third() {
  return (
    <>
    <div className="second">
       <div className="second_second">
        <img src="https://global.aorus.com/upload/Admin/images/AORUS%2015.jpg" alt="" />
    </div>
       <div className="second_first">
        <i className="fa-brands fa-rocketchat"></i>
       {/* <FontAwesomeIcon icon="fa-brands fa-rocketchat" /> */}
        <h1>Share team inboxes</h1>
        <p>Wheather you have a team of 2 or 200, our shared teams inboxes keep everyone on the same page and in the loop.</p>
        <div className="option">
            <p> <i className="fa-solid fa-check-double"></i> Leverage automation to move fast</p>
            <p> <i className="fa-solid fa-check-double"></i> Always give customers a human to chat to</p>
            <p> <i className="fa-solid fa-check-double"></i> Automate customer support and close leads faster</p>
        </div>
      </div>
</div>
<div className="paragraph">
  <div className="header">
    <h1>Start your 30-day free trial</h1>
    <p>Get up and running in less than 5 minutes.</p>
  </div>
  <div className="buttons">
    <button className="first">
      learn more
    </button>
    <button className="second">Get started</button>
  </div>
</div>

</>
  )
}
