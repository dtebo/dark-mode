import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = initialValue => {
    const [value, setValue] = useLocalStorage(initialValue);

    useEffect(() => {
        let body = document.querySelector('body');

        if(value){
            body.classList.add('dark-mode');
        }
        else{
            body.classList.remove('dark-mode');
        }

    }, [value]);

    return [value, setValue];
};