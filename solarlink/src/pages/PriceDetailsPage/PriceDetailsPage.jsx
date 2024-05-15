import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function PriceDetailsPage() {
  const {id} = useParams();
    return (

        <div>price {id}</div>
    );
}

export default PriceDetailsPage;
