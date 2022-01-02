import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'
import { MyTextInput } from '../components/MyTextInput';

interface FormValues {
    name: string;
    email: string;
    password1: string;
    password2: string;

};

export const RegisterFormikPage = () => {

    const initialValues:FormValues = {
        name: '',
        email: '',
        password1: '',
        password2: '',

    }
    const onSubmit = (values: any) => {
        console.log(values);
    };
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2,'Minimum 2 characters')
            .max(15,'Must be 15 characters or less')
            .required('Is required'),
        email: Yup.string()
            .required('Is required')
            .email(),
        password1: Yup.string()
            .required('Is required')
            .min(6,'Minimum 6 characters')
            .max(18,'Maximum 6 characters'),
        password2: Yup.string()
            .required('Is required')
            .min(6,'Minimum 6 characters')
            .max(18,'Maximum 6 characters')
            .oneOf([Yup.ref('password1')], 'Passwords must match')
    });

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik initialValues={initialValues}onSubmit={onSubmit}validationSchema={validationSchema} >
                {
                    ({handleReset}) => (
                        <Form >
                            <MyTextInput label={'Name'} name={'name'} placeholder="Name" />
                            <MyTextInput label={'Email'} name={'email'} placeholder="Email" />
                            <MyTextInput label={'Password'} name={'password1'} placeholder="Password" />
                            <MyTextInput label={'Repeat password'} name={'password2'} placeholder="Repeat password" />

                            <button type="submit">Submit</button>
                            <button type="reset" onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }
            </Formik>
                

        </div>
    )
}
