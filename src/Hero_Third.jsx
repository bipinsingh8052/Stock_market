import './Hero_third.css'

export default function Hero_Third() {
  return (
    <div className="second">
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
    <div className="second_second">
        <img src="https://www.showell.com/hs-fs/hubfs/Website/Product%20images%20(NEW)/Laptop-and-iphone.png?width=600&height=480&name=Laptop-and-iphone.png" alt="" />
    </div>
</div>
  )
}
