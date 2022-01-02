import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
};

export const FormikYupPage = () => {
    
    const { handleSubmit, getFieldProps, errors, touched } = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values: any) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15,'Must be 15 characters or less')
                .required('Is required'),
            lastName: Yup.string()
                .max(15,'Must be 15 characters or less')
                .required('Is required'),
            email: Yup.string()
                .required('Is required')
                .email()
        })
    });
    
    return (
        <div>
            <h1>Formik Yup Tutorial</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" { ...getFieldProps('firstName')} />
                { touched.firstName && errors.firstName && <span>{errors.firstName}</span> }
                

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" { ...getFieldProps('lastName')} />
                { touched.lastName && errors.lastName && <span>{errors.lastName}</span> }

                <label htmlFor="email">Email address:</label>
                <input type="mail" { ...getFieldProps('email')} />
                { touched.email && errors.email && <span>{errors.email}</span> }

                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}
