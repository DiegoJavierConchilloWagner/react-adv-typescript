
import { useFormik, FormikErrors } from 'formik';
import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
};

export const FormikBasicPage = () => {

    const validate = ( values: FormValues ):FormikErrors<FormValues> => {

        const errors:FormikErrors<FormValues> = {};

        if ( !values.firstName ) {
            errors.firstName = 'Required';
        } else if ( values.firstName.length >= 15 ) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if ( !values.lastName ) {
            errors.lastName = 'Required';
        } else if ( values.lastName.length >= 15 ) {
            errors.lastName = 'Must be 15 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }
    
    const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values: any) => {
            console.log(values);
        },
        validate
    });
    
    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                { touched.firstName && errors.firstName && <span>{errors.firstName}</span> }
                

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
                { touched.lastName && errors.lastName && <span>{errors.lastName}</span> }

                <label htmlFor="email">Email address:</label>
                <input type="mail" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                { touched.email && errors.email && <span>{errors.email}</span> }

                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}
