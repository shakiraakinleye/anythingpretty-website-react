import { useContext } from "react";
import { DeliveryContext } from "../scripts/DataContext";
import { ClassDisabled } from "../scripts/utility";
import { convertPriceToLocalCurrency } from "../scripts/utility";

function DeliveryOptions() {
  const deliveryLocations = useContext(DeliveryContext);
  const arr = Object.entries(deliveryLocations)

  return ( 
    arr.map((option, index) => {
        return (
        <option key={index} value={option[1].value}>
            {option[0]} --&gt; {convertPriceToLocalCurrency(option[1].value)}
        </option>
        );
  })
  )
}

export function SelectDelivery({onChange}) {
  const classDisabled = ClassDisabled();

  return (
    <div>
      <label htmlFor="shipping" className="hidden">
        Select A Shipping Destination
      </label>

      <select
        id="shipping"
        className={
          "w-full py-2 px-4 border border-black sm:py-3 " + classDisabled
        }
        onChange={onChange}
      >
        <option value="0">Select A Shipping Destination</option>
        <DeliveryOptions />
      </select>
    </div>
  );
}
