import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [item, setItem] = useState([]);
     
    useEffect(() => {

        async function getData() {

            const data = await fetch(url);

            const res = await data.json();

            console.log(res)

            setItem(res);
        }

        getData();
    },[])

  return [item];
}

export default useFetch
