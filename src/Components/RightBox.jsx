import React from "react";
const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
  setTipAmount,
  setTotal,
}) => {
  const handleRest = () => {
    handleBill(0);
    handleTip(15);
    handlePeople(1);
    setTipAmount(0);
    setTotal(0);
  };
  return (
    <div>
      {/* Add tip Amount and total here */}
      <p>Tip Amount</p>
      <h1 className="tipAmount">{tipAmount}</h1>
      <p>Total</p>
      <h1 className="TotalAmount">{total}</h1>

      {/* Add button to RESET */}
      <button className="Reset" onClick={handleRest}>
        RESET
      </button>
    </div>
  );
};

export default RightBox;
