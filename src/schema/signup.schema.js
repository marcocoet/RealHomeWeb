import {object, string, ref} from 'yup';

const signupSchema = object({
    username: string().required('Please enter a valid user name'),
    email: string().email('Please enter a valid email address').required('Email is required'),
    first_name: string().required('Please enter your first name'),
    last_name: string().required('Please enter your last name'),
    password: string().required('Password is required'),
    confirm_password: string().oneOf([ref('password'), null], 'Passwords must match').required('Password is required'),
})

export default signupSchema;