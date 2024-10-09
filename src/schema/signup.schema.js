import {object, string, ref} from 'yup';

const signupSchema = object({
    username: string().required('Please enter a valid user name'),
    email: string().email('Please enter a valid email address').required('Email is required'),
    password: string().required('Password is required'),
    passwordConfirmation: string().oneOf([ref('password'), null], 'Passwords must match').required('Password is required'),
})

export default signupSchema;