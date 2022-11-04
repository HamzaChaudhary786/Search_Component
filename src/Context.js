import React, { useContext, useEffect, useState } from "react";



const API_Url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`







const ContextApp = React.createContext();

const AppProvider = ({ children }) => {




    const [isloading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [query, setQuery] = useState("titanic");



    const getMovies = async (URL) => {                //Make a getMovie Function to Access ApI Data
        try {
            const res = await fetch(URL);
            const data = await res.json();
            console.log(data)

            if (data.Response === "True") {
                setMovie(data.Search);
            }
            else {
                setIsError(
                    {
                        show: true, msg: data.Error,
                    }
                )
            }

        }
        catch
        {
            console.log("Error Accur")

        }

    };




    useEffect(() => {                     //useEffect use to show data first time in page 

        const TimeOut =setTimeout(() => {
            getMovies(`${API_Url}&s=${query}}`);

        }, 3000)

        return( )=> clearTimeout(TimeOut);


    }, [query]);




    return (
        <>
            <ContextApp.Provider value={{ isloading, isError, movie, query, setQuery }}>
                {children}
            </ContextApp.Provider>
        </>
    )
}
const useGlobalContext = () => {
    return (

        useContext(ContextApp)
    )

}


export { AppProvider, ContextApp, useGlobalContext };