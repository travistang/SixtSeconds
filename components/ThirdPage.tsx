import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import InsuranceOfferTile from "./InsuranceOfferTile";
import { useState } from "react";

type Props = {
  onReturn: () => void;
  onConfirm: () => void;
}
export default function ThirdPage({ onReturn, onConfirm }: Props) {
  const [insurancePrice, setInsurancePrice] = useState(0);
  const selectInsurance = (price: number) => () => {
    if (insurancePrice === price) {
      setInsurancePrice(0);
      return;
    }
    setInsurancePrice(price);
  }
  return (
    <div className="h-full flex flex-col items-stretch gap-2">
      <div className="h-12 flex items-center gap-1">
        <button type="button" onClick={onReturn} className="btn btn-ghost">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
          <span className="text-xl">
              <b className="">Insurance Options</b>
          </span>
      </div>

      {/* Checkboxes */}
      <div className="flex flex-col gap-2 flex-1 flex-shrink-0 overflow-auto">
        <InsuranceOfferTile onSelect={selectInsurance(2)} selected={insurancePrice === 2} title="Basic Coverage" price={2} insuranceItems={[
          {
            delay: 60,
            refundPercentage: 50
          }
        ]}/>
        <InsuranceOfferTile onSelect={selectInsurance(5)} selected={insurancePrice === 5} title="Advance Coverage" price={5} insuranceItems={[
          {
            delay: 60,
            refundPercentage: 75
          },
          {
            delay: 30,
            refundPercentage: 50
          },
        ]}/>
        <InsuranceOfferTile onSelect={selectInsurance(10)} selected={insurancePrice === 10} title="Ultimate Coverage" price={10} insuranceItems={[
          {
            delay: 60,
            refundPercentage: 100
          },
          {
            delay: 30,
            refundPercentage: 75
          },
          {
            delay: 15,
            refundPercentage: 25
          },
        ]}/>
      </div>
    
      <div className="flex justify-end items-center gap-4">
        Total:
        <div className="rounded-box text-4xl font-bold text-success">{ 40 + insurancePrice }€</div>
      </div>
      <button onClick={onConfirm} className="btn btn-block btn-warning">Order now!</button>
    </div>
  );
}
