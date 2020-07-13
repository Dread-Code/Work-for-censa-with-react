import { useState, useEffect } from "react";
import { fetchApi } from '../helpers/fetchApi'
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        fetchApi(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [ category ]);

    return state;

}