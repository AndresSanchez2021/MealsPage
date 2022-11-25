import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useLoadData = (url) => {

    const [state, setState] = useState("")
    
    const loadData=()=>{
        axios.get(url).then((response)=>{
            setState(response.data)
        })
    }
        
    return [state, loadData]
}
