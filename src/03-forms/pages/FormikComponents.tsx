import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    terms?: boolean;
    jobType?: string;
};

export const FormikComponents = () => {
    
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
            <h1>Formik Components</h1>

            <Formik initialValues={initialValues}onSubmit={onSubmit}validationSchema={validationSchema} >
                {
                    (Formik) => (
                        <Form >
                            <label htmlFor="firstName">First Name:</label>
                            <Field type="text" name="firstName" placeholder="FirstName"/>
                            <ErrorMessage name="firstName" component="span"/>
                            
            
                            <label htmlFor="lastName">Last Name:</label>
                            <Field type="text" name="lastName" placeholder="LastName" />
                            <ErrorMessage name="lastName" component="span"/>
            
                            <label htmlFor="email">Email address:</label>
                            <Field type="text" name="email"  placeholder="Email"/>
                            <ErrorMessage name="email" component="span"/>

                            <label>Job Type</label>
                                <Field name="jobType" as="select" >
                                    <option value="">Pick something</option>
                                    <option value="developer">Developer</option>
                                    <option value="designer">Designer</option>
                                    <option value="devops">Devops</option>
                                </Field>
                            <ErrorMessage name="jobType" component="span"/>

                            <label>
                                Terms and Conditions:
                                <Field name="terms" type="checkbox" />
                            </label>
                            <ErrorMessage name="terms" component="span"/>

            
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
