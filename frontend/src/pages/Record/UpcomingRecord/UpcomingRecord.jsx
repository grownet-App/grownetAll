import React from "react";

export default function UpcomingRecord() {
  return (
    <section className="">
      <div className="card-record">
        <div className="information-past">
          <div className="">
            <h4>#Order:</h4>
            <p>57896547</p>
          </div>
          <div>
            <h4>Date</h4>
            <p>29/07/2023</p>
          </div>
        </div>
        <div className="information-past o2" id="o2">
          <div>
            <h4>Amount</h4>
            <p>£200</p>
          </div>
          <button className="bttn btn-primary">View details</button>
        </div>
      </div>
    </section>
  );
}
