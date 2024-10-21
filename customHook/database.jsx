import React, { useState, useEffect } from 'react';
import { api } from '@/utilities/api';
import CardTitle from '@/components/CardTitle';

export default function DataBase() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await api();
                setData(result.entries);
            } catch (error) {

                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

    return (
        <div>
            {
                    data.entries.slice(0, 2).map((item, index) => {
                        const titles = item;
                        const imageUrl = item.images?.['Poster Art']?.url;

                        return (
                            
                            <CardTitle
                                key={index}
                                titles={titles}
                                imageUrl={imageUrl}
                            />
                        );
                    })
                }

        </div>
    );
}
