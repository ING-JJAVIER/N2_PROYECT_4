import React, { useState, useEffect } from 'react';
import { apiSeries } from '@/utilities/apiSeries';
import { apiMovie } from '@/utilities/apiMovie';
import CardTitleS from '@/components/CardTitleS';
import CardTitleM from '@/components/CardTitleM';

export function dataBase() {
    const [dataSerie, setDataSerie] = useState([]);
    const [dataMovie, setDataMovie] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const [seriesData, moviesData] = await Promise.all([apiSeries(), apiMovie()]);
                setDataSerie(seriesData);
                setDataMovie(moviesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    return (
        <div>
            {
               dataSerie.length > 0 && dataSerie.map((item, index) => {
                    const titleS = item.title
                    const urlImageS = item.images?.['Poster Art'].url || '/home/cine.jpg'
                    if (!urlImageS) return null;
                    return (
                        <CardTitleS
                            key={index}
                            titleS={titleS}
                            urlImageS={urlImageS}
                        />
                    );
                })
            }

            {
                 dataMovie.length > 0 && dataMovie?.map((i, index) => {
                    const titleM = i.title
                    const urlImageM = i.images?.['Poster Art'].url || '/home/cine.jpg'
                    if (!urlImageM) return null;
                    return (
                        <CardTitleM
                            key={index}
                            titleM={titleM}
                            urlImageM={urlImageM}
                        />
                    );
                })
            }

        </div>
    );
}
