import * as yup from 'yup'

export const registrationFormSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().optional(),
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
})

export const loginFormSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
})
