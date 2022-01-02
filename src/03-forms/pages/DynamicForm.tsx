import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';


const initialValues: {[key: string]: any } = {};
const requiredFields: {[key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;
    
    if ( !input.validations ) continue;

    let schema = Yup.string();

    for ( const rule of input.validations ) {
        if ( rule.type === 'required' ) {
            schema = schema.required(rule.text || 'Required')
        }

        if ( rule.type === 'minLenght' ) {
            schema = schema.min( (rule as any).value || 3, rule.text || 'Minimum 3 characters');
        }

        if ( rule.type === 'email' ) {
            schema = schema.email( rule.text || 'Must be a valid email' );
        }

        // Otras reglas
    }

    requiredFields[input.name] = schema;
};

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {

    const onSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    (formik) => (
                        <Form>
                            { 
                                formJson.map(({ type, name, pleaceholder, label, options }) => {
                                    if (type === 'input' || type === 'password' || type === 'email') {

                                        return  <MyTextInput key={name} type={ type as any } label={label} 
                                                    name={name} pleaceholder={pleaceholder} />

                                    }   else if (type === 'select') {

                                        return <MySelect key={name} label={label} name={name} >
                                            <option value={''}>Select an option</option>
                                            {
                                                options?.map( ({id,label}) => (
                                                    <option key={id} value={id}>{label}</option>
                                                ))
                                            }
                                        </MySelect>

                                    }
                                    throw new Error(`El type ${type}, no es soportado`)
                                })

                                
                            }
                            
                            <button type="submit">Submit</button>
                        </Form>

                    )
                }
            </Formik>
        </div>
    )
}
