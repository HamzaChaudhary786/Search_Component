import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './Context'

const Movie = () => {

    const { movie } = useGlobalContext();

    return (
        <>
            <section className=' grid justify-items-center items-center bg-slate-800 '>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-8 h-fit w-fit mt-10'>
                    {
                        movie.map((item) => {
                            const {imdbID , Title , Poster} = item ;
                            const movieName = Title.substring(0 , 15);
                            return (
                                <>
                                    <NavLink to={`movie/${imdbID}`} key={imdbID}>
                                        <div className='border border-white h-[300px] w-[300px]  grid justify-center text-center text-white hover:bg-gray-200 hover:text-black   rounded-lg hover:transform hover:scale-105 ease-in-out'>
                                            <h1 className=' font-bold '>{movieName.length >= 15 ? `${movieName}...` : movieName}</h1>
                                            <img src={Poster} alt={imdbID} className='h-48 w-48 rounded hover:transform hover:scale-[1.1] ease-in-out '/>
                                        </div>
                                    </NavLink>

                                </>
                            );

                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Movie