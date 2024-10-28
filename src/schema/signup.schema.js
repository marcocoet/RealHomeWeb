import {object, string, ref} from 'yup';

const signupSchema = object({
    username: string().trim().required('Please enter a valid user name'),
    email: string().email('Please enter a valid email address').required('Email is required'),
    first_name: string().trim().required('Please enter your first name'),
    last_name: string().trim().required('Please enter your last name'),
    password: string().required('Password is required').min(8, 'Password must be at least 8 characters long').matches(/[a-zA-Z]/, 'Password must contain both letters and numbers'),
    confirm_password: string().oneOf([ref('password'), null], 'Passwords must match').required('Password is required'),
})

export default signupSchema;