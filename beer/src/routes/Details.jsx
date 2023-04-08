import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detailpage(){
    let parameters = useParams();
    const [brewery, setBrewery] = useState({});

    useEffect(() => {
        getSpecificData();
    }, [])

    const getSpecificData = async () => {
        const data = await fetch(`https://api.openbrewerydb.org/v1/breweries/${parameters.id}`)
        const JSONdata = await data.json();
        setBrewery(JSONdata);
    }

    return (
        <>
            <h1> {brewery.name}</h1>
            <h1> State: {brewery.state} </h1>
            <h1>Phone: {brewery.phone} </h1>
            <h1>Postal Code: {brewery.postal_code}</h1>
        </>
    );
  };
  