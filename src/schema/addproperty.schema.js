import {object, string, number} from 'yup';

const addpropertySchema = object({
    address: string().required('Please enter a valid adress'),
    type_id: string().required('Please enter a valid user name'),
    bedrooms: number().min(0).required('Please enter the amount of bedrooms'),
    bathrooms: number().min(0).required('Please enter the amount of bathrooms'),
    minPrice: number().min(0).required('Please enter the amount'),
    maxPrice: number().min(0).required('Please enter the amount'),
})

export default addpropertySchema;