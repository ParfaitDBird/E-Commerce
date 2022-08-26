import { createContext, useState,useEffect } from "react";

import { addCollectionAndDocuments,getCategoriesAndDocuments } from "../components/utils/firebase/firebase.utils.jsx";

// import SHOP_dATA from '../shop-data.js'

export const CategoriesContext = createContext({
    categoriesMap:[],

});



export const CategoriesProvider = ({children})=>{
    const [categoriesMap,setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async ()=>{
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    },[])
    

    // useEffect(() => {
    //     addCollectionAndDocuments('categories',SHOP_dATA)
    // }, []) this isn't done in the front-end most of the time just for example
    
    const value = {categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}