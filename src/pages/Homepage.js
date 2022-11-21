import React from "react";

import { AdSection } from "../components/AdSection";
import { ProductSection } from "../components/ProductSection";
import { ReviewSection } from "../components/ReviewSection";

export function Homepage(){
    return(
        <div>
           <AdSection /> 
           <ProductSection /> 
           <ReviewSection /> 
        </div>
    )
}