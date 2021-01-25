import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'

interface ContactProps {

}

const Contact: React.FC<ContactProps> = ({}) => {
    // const submitHandler = (event: any) => {
    //     event.preventDefault()
    //     console.log(event.target )
    //     // emailjs.sendForm('service_brvh3kh', 'template_7k881xs', event.target, 'user_avuoOUOCaAy7kZB3KZqmb')
    //     //                     .then((result) => {
    //     //                         console.log(result.text);
    //     //                     }, (error) => {
    //     //                         console.log(error.text);
    //     //                     });
    // }
        return (
            <Formik
                        initialValues = {{
                            fromName: "",
                            fromEmail: "",
                            fromMessage: "",
                        }}
                        validationSchema = {Yup.object({
                            fromEmail: Yup.string()
                            .min(3, 'Too Short!')
                            .email("Invalid email format")
                            .required("Required!"),
                            fromName: Yup.string()
                            .min(3, 'Too Short!')
                            .required("Required!"),
                            fromMessage: Yup.string()
                            .required("Required!"),
                        })}
                        onSubmit ={(values) => {
                            const data = JSON.stringify(values, null, 2)
                            emailjs.sendForm('service_brvh3kh', 'template_7k881xs', "get-in-touch", 'user_avuoOUOCaAy7kZB3KZqmb')
                            .then((result) => {
                                console.log(result.text);
                            }, (error) => {
                                console.log(error.text);
                            });
                            console.log(data )
                            }}
                        >
                        {({ errors, touched }) => (
                            <div className='sign-in-form-main' id="get-in-touch">
                                <p className="uppercase-text">get in touch</p>
                                <Form className="contact-form-container" >
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