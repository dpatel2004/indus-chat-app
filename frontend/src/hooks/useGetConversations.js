import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
// import { useEffect } from 'react';
import { useState } from 'react';


const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            const local = localStorage.getItem('chat-user')
            const localData = JSON.parse(local)

            try {
                const res = await fetch(`http://localhost:5000/api/users/${localData._id}`);
                const data = await res.json();
                if (data.error){
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        };
        getConversations();
    }, []);
    return{ loading,conversations};
};

export default useGetConversations;