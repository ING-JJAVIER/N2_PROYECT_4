import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardTitle from '@/components/CardTitle';

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error al cargar el archivo JSON", error);
      });
  }, []);

  return (
    <div>
      {
        data.map((item, index) => {
          const titles = item
          const imageUrl = item.images?.['Poster Art']?.url;

          return <CardTitle
            key={index}
            titles={titles}
            imageUrl={imageUrl}
          />
        })
      }
    </div>
  );
};

export default Api;
