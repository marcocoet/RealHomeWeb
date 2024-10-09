import {object, string, number} from 'yup';

const addpropertySchema = object({
    type: string().required('Please enter a valid user name'),
    address: string().required('Please enter a valid adress'),
    bedrooms: number().required('Please enter the amount of bedrooms'),
    bathrooms: number().required('Please enter the amount of bathrooms'),
    email: string().email('Please enter a valid email address').required('Email is required'),
    username: string().required('Please enter an existing username'),
    
})

export default addpropertySchema;