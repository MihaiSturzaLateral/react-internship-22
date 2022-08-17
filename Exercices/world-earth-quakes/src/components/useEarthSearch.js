import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const useEarthSearch = (query,page) => {
  useEffect(() => {
    axios({
        method: 'GET',
        url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson',
        param: {q: query,page}
    }).then(res=>{
        console.log(res.data)
    })
  }, [query]);

  return <div></div>;
};

export default useEarthSearch;
