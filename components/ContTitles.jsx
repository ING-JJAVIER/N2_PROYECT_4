import React from 'react'
import CardSeries from './CardSeries'
import CardMovies from './CardMovies'

export default function ContTitles() {
    return (
        <>

            <div className='flex justify-center w-full mb-8'>
                <div className='flex w-10/12'>

                    <div className='flex flex-col'>
                        <CardSeries />
                    </div>

                    <div className='flex flex-col '>
                        <CardMovies />
                    </div>

                </div>
            </div>
        </>
    )
}
