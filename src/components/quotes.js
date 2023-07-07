import React, { useEffect, useState } from 'react';

function Quotes() {
  const [data, setData] = useState([]); 
  const dataURL = 'https://api.api-ninjas.com/v1/quotes';
  const keyAPI = 'nydBGDrsvveo1WS8DaxRHg==cvlsf9eU72JeSvDS';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const request = await fetch(dataURL, {
        method: 'GET',
        headers: { 'X-Api-Key': keyAPI },
      });
      const response = await request.json();
      console.log(response[0]);
      setData(response[0]);
      setIsLoading(false);
    };
    fetchData();
  }, [setData,setIsLoading]);

  if(isLoading) return (
    <div className='loading'>Loading...</div>
  );

  return (
    <div className="section-quotes">
        <h3>{`Author: ${data.author}`}</h3>
        <p>
          {`Category: ${data.category}`}
        </p> 
        <p>{data.quote}</p> 
        
    </div>
  )
}

export default Quotes;
