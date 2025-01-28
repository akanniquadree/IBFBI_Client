import React from "react";
import "./Donate.css";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
export default function Donate() {
  return (
    <>
      <div className="DonateCont">
        <div className="DonateWrap">
          <div className="DonateHeading">
            <div className="DonateHeadingList">
              <h6>Why Donate?</h6>
              <p>
                Millions around the world struggle daily to meet basic needs.
                Your support can bring hope and opportunity to those in need. By
                contributing, you're not just giving money – you're giving
                someone a chance to thrive.
              </p>
            </div>
            <div className="DonateHeadingList">
              <h6>What Your Donation Does</h6>
              <ul>
                <li>
                  <b>Provides Food:</b> Ensure no child goes to bed hungry.
                </li>
                <li>
                  <b>Saves Lives:</b> Give children the tools they need for a
                  brighter future.
                </li>
                <li>
                  <b>Supports Education: </b> Fund medical care for those who
                  can't afford it.
                </li>
              </ul>
            </div>
            <div className="DonateHeadingList">
              <h6>Join Our Mission</h6>
              <p>
                Your generosity powers our mission to create lasting change.
                Together, we can bring smiles, hope, and brighter days to those
                who need it most.
              </p>
              <p>Every contribution counts. Together, we can change lives.</p>
            </div>
          </div>
          {/* Money Donations */}
          <div className="DonateMethod">
            <div className="DonateMethodImage">
              <h5>Money Donations</h5>
              <img src="/Images/programEdu.jpg" alt="" />
            </div>
            <div className="DonateMoneyList">
              <h6>1. Online Donation</h6>
              <p>Coming soon ....</p>
            </div>
            <Stack
              direction={{ sm: "column", md: "row" }}
              spacing={{ sm: 4, md: 5 }}
            >
              <div className="DonateMoneyList">
                <h6>2. ⁠Local Bank Transfer</h6>
                <p>
                  You can make donations through direct transfers to our bank
                  account.
                </p>
                <p>Please find details below:</p>
                <ul>
                  <li>
                    <span>Account Name:</span> Ibadan Food Bank Initiative
                  </li>
                  <li>
                    <span>Account Number: </span>
                    9180496011 (NGN)
                  </li>
                  <li>
                    <span>Bank: </span> First City Monument Bank
                  </li>
                </ul>
              </div>
              <div className="DonateMoneyList">
                <h6>3. ⁠Cheques</h6>
                <p>
                  Write a cheque to “Ibadan Food Bank Initiative” and make
                  payments into:
                </p>
                <p>Please find details below:</p>
                <ul>
                  <li>
                    <span>Account Name:</span> Ibadan Food Bank Initiative
                  </li>
                  <li>
                    <span>Account Number: </span>
                    9180496011 (NGN)
                  </li>
                  <li>
                    <span>Bank: </span> First City Monument Bank
                  </li>
                </ul>
                <p>
                  Write a cheque to “Ibadan Food Bank Initiative” and have it
                  delivered to:
                </p>
                <p>Address: 5, Orelere Street, Ikolaba, Agodi, Ibadan.</p>
              </div>
            </Stack>
          </div>
          {/* Items Donation */}
          <div className="DonateMethod">
            <div className="DonateMethodImage">
              <h5>Items Donations</h5>
              <img src="/Images/donateTwo.jpg" alt="" />
            </div>
            <div className="DonateMoneyList">
              <h6>Donate Items, Make a Difference</h6>
              <p>Do you have items to share? Your donations can bring hope and relief to those in need.</p>
              <p>We accept:</p>

                <ul>
                  <li>
                    <span>Foodstuff</span> (e.g., rice, beans, noodles, oil, egg, and the likes)
                  </li>
                  <li>
                    <span>Clothing </span>
                    (new or gently used)
                  </li>
                  <li>
                    <span>Shoes </span> (in good condition)
                  </li>
                  <li>
                    <span>Household Items </span> (e.g., bedding, utensils, so on..)
                  </li>
                  <li>
                    <span>Educational Materials </span> (e.g., books, stationery)
                  </li>
                  <li>
                    <span>Any Other Materials </span> that can help someone in need
                  </li>
                </ul>
            <span style={{fontWeight:600}}>Drop-Off Location:</span>
            <p>Bring your donations to our collection center:</p>
            <span>Admin and Operations Office: 5, Orelere Street, Ikolaba, Agodi, Ibadan, Oyo State.</span>
            <p>Your generosity makes a real difference. Together, let’s bring smiles and hope to countless lives. Thank you for your support!</p>
            <p>For inquiries or directions, <Link to='/contact' style={{color:'red', textDecoration:'underline'}}> contact us</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
