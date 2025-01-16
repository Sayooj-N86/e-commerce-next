'use client';
import React, { useEffect, useState } from 'react'

const useClient = () => {
    const [isClient , setisClient] = useState(false);
    useEffect( () => {
        if (!isClient){
            setisClient(true);
        }
    }, [isClient]);
  return isClient;
}

export default useClient