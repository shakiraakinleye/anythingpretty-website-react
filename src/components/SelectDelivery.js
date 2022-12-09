import { useContext } from "react";
import { DeliveryContext } from "../scripts/DataContext";
import { ClassDisabled } from "../scripts/utility";
import { convertPriceToLocalCurrency } from "../scripts/utility";

function DeliveryOptions() {
  const deliveryLocations = useContext(DeliveryContext)
  const LocationsArray = Object.entries(deliveryLocations)

  return ( 
    LocationsArray.map((location, index) => {
        return (
        <option key={index} value={location[1].value}>
            {location[0]} --&gt; {convertPriceToLocalCurrency(location[1].value)}
        </option>
        );
  })
  )
}

export function SelectDelivery({onChange, cartCond}) {
  const {classDisabled} = ClassDisabled(cartCond);

  return (
    <div>
      <label htmlFor="shipping" className="hidden">
        Select A Shipping Destination
      </label>

      <select
        id="shipping"
        className={
          classDisabled + " w-full py-2 px-4 border border-black sm:py-3 " 
        }
        onChange={onChange}
      >
        <option value="0">
          Select A Shipping Destination
        </option>

        <DeliveryOptions />
      </select>
    </div>
  );
}

