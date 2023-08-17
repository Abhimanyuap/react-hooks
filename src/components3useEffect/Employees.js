import React, { useEffect, useState } from 'react'

const Employees = () => {

    const [num,setNum] = useState(2);
    const [data,setData] = useState([]);

    useEffect(() => {

        async function getData () {

            const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${num}&idStarts=1001`);

            const res = await get.json();

            setData(res);
            console.log(res);

        }
   
        getData();

    },[num])

  return (
    <div className='employees'>
      <span>
        <button onClick={() => setNum(num+2)}>Add {num}</button>
       </span> 
      <span>
        {data.map((e,i) => {
            return (
                <div className='emp' key={i}>
                    <p>{e.firstName}</p>
                    <p>{e.lastName}</p>
                    <p>{e.email}</p>
                </div>
            )
        })}
      </span>
    </div>
  )
}

export default Employees 
