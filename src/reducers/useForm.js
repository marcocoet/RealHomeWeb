import {useSelector } from 'react-redux';

export default function useForm(name = '') {
    const form = useSelector(({forms }) => forms[name]);

    if (!form)
        return {};

    return { ...form };
}