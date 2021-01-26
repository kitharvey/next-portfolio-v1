import React from 'react'
import { Formik, Form, Field, ErrorMessage, FastField } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'
import Recaptcha from 'react-google-recaptcha';

interface ContactProps {

}

const Contact: React.FC<ContactProps> = ({}) => {
        return (
            <Formik
                        initialValues = {{
                            fromName: "",
                            fromEmail: "",
                            fromMessage: "",
                            recaptcha: '',
                            success: false,
                        }}
                        validationSchema = {Yup.object({
                            fromEmail: Yup.string()
                            .min(3, 'Too Short!')
                            .email("Invalid email format")
                            .required("Required!"),
                            fromName: Yup.string()
                            .min(3, 'Too Short!')
                            .required("Required!"),
                            fromMessage: Yup.string().required("Required!"),
                            recaptcha: Yup.string().required('Robots are not welcome yet!'),
                        })}
                        onSubmit ={(values, { setSubmitting, resetForm, setFieldValue }) => {
                            const data = JSON.stringify(values, null, 2)
                            emailjs.sendForm('service_brvh3kh', 'template_7k881xs', "contact-form", 'user_avuoOUOCaAy7kZB3KZqmb')
                            .then((result) => {
                                console.log(result.text);
                                setSubmitting(false);
                                setFieldValue('success', true);
                                setTimeout(() => resetForm(), 6000);
                            }, (error) => {
                                setSubmitting(false);
                                setFieldValue('success', false);
                                alert('Something went wrong, please try again!') // eslint-disable-line
                                console.log(error.text);
                            });

                            console.log(data )
                            }}
                        >
                        {({ errors, touched, setFieldValue }) => (
                            <div className='sign-in-form-main' id="contact">
                                <p className="uppercase-text">get in touch</p>
                                <Form className="contact-form-container" id="contact-form"  >
                                    <Field
                                        className="sign-in-inputs"
                                        type = 'text'
                                        name = 'fromName'
                                        placeholder = 'Name *'
                                        style={{
                                            borderColor: errors.fromName && touched.fromName ? 'tomato' : ' #999999'
                                        }}
                                    />
                                    <div className="form-error" >
                                        <ErrorMessage name="fromName" component="p"/>
                                    </div>
                                    
                                    <Field
                                        className="sign-in-inputs"
                                        type = 'email'
                                        name = 'fromEmail'
                                        placeholder = 'Email *'
                                        style={{
                                            borderColor: errors.fromEmail && touched.fromEmail ? 'tomato' : ' #999999'
                                        }}
                                    />
                                    <div className="form-error" >
                                        <ErrorMessage name="fromEmail" component="p"/>
                                    </div>
                                    
                                    <Field
                                        as="textarea"
                                        className="sign-in-inputs"
                                        type = 'text'
                                        name = 'fromMessage'
                                        placeholder = 'Message *'
                                        style={{
                                            borderColor: errors.fromMessage && touched.fromMessage ? 'tomato' : ' #999999'
                                        }}
                                    />
                                    <div className="form-error" >
                                        <ErrorMessage name="fromMessage" component="p"/>
                                    </div>

                                    <FastField
                                        component={Recaptcha}
                                        sitekey="6Le0lzsaAAAAAKwnM9LPSUAbMluQyKR7C5qIyu1q"
                                        name="recaptcha"
                                        onChange={(value: any) => setFieldValue('recaptcha', value)}
                                    />
                                    <div className="form-error" >
                                        <ErrorMessage name="recaptcha" component="p"/>
                                    </div>
                                    <div className="sign-in-form-footer" >
                                        <button className="sign-in-submit" type="submit" >Send</button>
                                    </div>
                                </Form>
                            </div>
                        )}
                        </Formik>
        );
}


export default Contact