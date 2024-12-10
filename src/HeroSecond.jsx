import './Herosecond.css'

export default function HeroSecond() {
  return (
    <>
    <div className="second_one">
       
        <div className="second_s">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuvpk-SoYh7lWDco_TujDTVmYhg6_wzM8QA&s" alt="" />
        </div>
        <div className="second_first">
            <i className="fa-solid fa-ranking-star"></i>
           {/* <FontAwesomeIcon icon="fa-brands fa-rocketchat" /> */}
            <h1>Deliver instant answer </h1>
            <p>An all-in-one customer service plactfrom that helps you balance everything your customers need to be happy.</p>
            <div className="option">
                <p> <i className="fa-solid fa-check-double"></i> Keep  your custmore in the loop with live chat</p>
                <p> <i className="fa-solid fa-check-double"></i>Embed help articles right on your websites</p>
                <p> <i className="fa-solid fa-check-double"></i> Customers nevers have to leave the page to find an answer</p>
            </div>
        </div>
    </div>

<div className="para">
    <div className="main_para">
        <h1>Start your 30-days free trial</h1>
        <p>Get up and runnging in less than 5 minutes</p>
    </div>
    <div className="buttons">
        <button>Learn more</button>
        <button>Get started</button>
    </div>
</div>


<div className="second_two">
<div className="second_first">
   {/* <FontAwesomeIcon icon="fa-brands fa-rocketchat" /> */}
    <h1>Join 4000 +startups growing with Untitled</h1>
    <p>Start your 30-days free trial today.</p>
    <div className="option">
        <button>Learn More </button>
        <button>Get started</button>
    </div>
</div>
<div className="second_s">
    <img src="https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D" alt="" />
</div>
</div>
</>
  )
}
