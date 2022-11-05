import {useContext} from 'react';
import {AppContext} from '../context/ReachContext';

export const useReach = () =>{
    return useContext(AppContext);
}