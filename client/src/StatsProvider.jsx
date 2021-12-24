import React, { useState,createContext } from 'react';
import axios from 'axios';

const ClassContext = createContext();

const ClassProvider = ({children}) => {
    const defaultStats = {
        loading:true,
        error:false,
        profileData:null,
        errorRes:null
    }

    const [stats, setStats] = useState(defaultStats)

    const fetchStats = async (platform,gamertag) => {
        try {
            const res = await axios.get(`/api/v1/profile/${platform}/${gamertag}`);
            setStats({loading: false, profileData: res.data.data})
        } catch (err) {
            setStats({loading: false, errorRes: err.response.data.message, error: true})
        }
    }

    const resetStats = () => {
        setStats(defaultStats)
    }

    return(
        <ClassContext.Provider value={{stats,fetchStats,resetStats}}>
            {children}
        </ClassContext.Provider>
    )
}

export {ClassContext,ClassProvider}