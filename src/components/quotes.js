import React, { useEffect, useState } from 'react';

function Quotes() {
  const [data, setData] = useState([]); // will use to fetch data,
  const dataURL = 'https://api.api-ninjas.com/v1/quotes';
  const keyAPI = 'nydBGDrsvveo1WS8DaxRHg==cvlsf9eU72JeSvDS';

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(dataURL, {
        method: 'GET',
        headers: { 'X-Api-Key': keyAPI },
      });
      const response = await request.json();
      console.log(response[0]);
      setData(response[0]);
    };
    fetchData();
  }, [setData]);// useEffect(myfunction, [dependencies])

  return (
    <div className="section-quotes">
        <h3>{`Author: ${data.author}`}</h3>
        <p>
          {`Category: ${data.category}`}
        </p> 
        <p>{data.quote}</p> 
    </div>
  );
}

export default Quotes;
