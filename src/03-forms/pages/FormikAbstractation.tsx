import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    terms?: boolean;
    jobType?: string;
};

export const FormikAbstractation = () => {
    
        const initialValues:FormValues = {
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: ''
        }
        const onSubmit = (values: any) => {
            console.log(values);
        };
        const validationSchema = Yup.object({
            firstName: Yup.string()
                .max(15,'Must be 15 characters or less')
                .required('Is required'),
            lastName: Yup.string()
                .max(15,'Must be 15 characters or less')
                .required('Is required'),
            email: Yup.string()
                .required('Is required')
                .email(),
            terms: Yup.boolean()
                // .oneOf([true], 'terms must be true')
                .isTrue('terms must be true'),
            jobType: Yup.string()
                .required('Is required')
                .notOneOf(['devops'], 'Option is not accepted')
        });

    
    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik initialValues={initialValues}onSubmit={onSubmit}validationSchema={validationSchema} >
                {
                    (Formik) => (
                        <Form >
                            <MyTextInput label={'First Name'} name={'firstName'} placeholder="First Name" />
                            <MyTextInput label={'Last Name'} name={'lastName'} placeholder="Last Name" />
                            <MyTextInput label={'Email'} name={'email'} placeholder="Email" />

                            <MySelect label={'Job Type'} name={'jobType'} >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="devops">Devops</option>
                            </MySelect>

                            <MyCheckbox label={'Terms and Conditions'} name={'terms'} />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
