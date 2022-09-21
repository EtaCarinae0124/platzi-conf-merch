import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAr90iFmPxMur1M2jZ4BZkNm_48dJDa53Y`

    useEffect(async () => {
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location)
    }, []);
    return map;
};

export { useGoogleAddress };