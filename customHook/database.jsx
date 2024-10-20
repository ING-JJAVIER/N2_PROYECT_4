import React, { useState, useEffect } from 'react';
import api  from '@/utilities/api';
import CardTitle from '@/components/CardTitle';

export default function DataBase() {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {c
                const result = await api();
               
                setData(result);
            } catch (error) {
               
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {
                data.entries.slice(0, 20).map((item, index) => {
                    const titles = item;
                    const imageUrl = item.images?.['Poster Art']?.url;

                    console.log('Titles:', titles);

                    if (!titles || !titles.title) {
                        console.error('Title is undefined:', titles);
                        return <div key={index}>Title data is missing or invalid.</div>;
                    }

                    return (
                        <CardTitle
                            key={index}
                            titles={titles}
                            imageUrl={imageUrl}
                        />
                    );
                })}
        </div>
    );
}
