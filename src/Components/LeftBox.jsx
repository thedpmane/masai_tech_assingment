import React from "react";
const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  return (
    <div>
      {/* Add input for bill */}
      <p>Bill</p>
      <input
        value={bill}
        className="bill_input"
        onChange={(e) => handleBill(e.target.value)}
        type="number"
      />
      {/* Add buttons for % of tip */}
      <p>selet Tip %</p>
      <div>
        <button onClick={handleTip}>5%</button>
        <button onClick={handleTip}>10%</button>
        <button onClick={handleTip}>15%</button>
        <button onClick={handleTip}>25%</button>
        <button onClick={handleTip}>50%</button>
        <button className="custom" onClick={handleTip}>
          50%
        </button>
      </div>
      {/* Add input for no.of peoples */}
      <p>Number of People</p>
      <input
        className="people"
        onChange={(e) => handlePeople(e.target.value)}
        type="number"
        value={people}
        name=""
        id=""
      />
    </div>
  );
};

export default LeftBox;
