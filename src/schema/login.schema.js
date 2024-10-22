import {object, string, } from 'yup';

const loginSchema = object({
    username: string().required('Please enter a valid user name'),
    
    password: string().required('Password is required'),
    
})

export default loginSchema;