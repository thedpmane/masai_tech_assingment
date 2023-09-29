import { useEffect, useState } from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const BillPage = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(1);
  const [total, setTotal] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  const handleBill = (v) => {
    return setBill(Number(v));
  };
  const handleTip = (e) => {
    return setTip(Number(e.target.innerText.split("%")[0]));
  };

  const handlePeople = (v) => {
    return setPeople(Number(v));
  };

  useEffect(() => {
    let billforoneperson = bill / people;
    let singlepersontipamount = (billforoneperson * tip) / 100;

    let totaltip = singlepersontipamount + billforoneperson;
    if (people >= 1 && bill > 0) {
      setTipAmount(singlepersontipamount);
    }
    if (tipAmount) {
      setTotal(totaltip);
    }
  }, [bill, people, tip]);

  return (
    <div className="billbox" style={{ display: "flex", gap: "20%" }}>
      {/* Add LeftBox and RightBox component here */}
      <LeftBox
        handleTip={handleTip}
        handleBill={handleBill}
        handlePeople={handlePeople}
      />
      <RightBox
        total={total}
        tipAmount={tipAmount}
        handleBill={handleBill}
        handlePeople={setPeople}
        handleTip={setTip}
        setTotal={setTotal}
        setTipAmount={setTipAmount}
      />
    </div>
  );
};

export default BillPage;
