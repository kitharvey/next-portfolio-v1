import React from "react"
import { Formik, Form, Field, ErrorMessage, FastField } from "formik"
import * as Yup from "yup"
import emailjs from "emailjs-com"
import Recaptcha from "react-google-recaptcha"

const Contact: React.FC = () => {
  return (
    <div id="page" className="contact">
      <div className="contact-wrapper">
        <div className="accounts">
          <p>Follow me on</p>
          <div className="links">
            <a href="https://github.com/kitharvey" target="__blank">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/kitharvey/" target="__blank">
              LinkedIn
            </a>
            <a href="https://twitter.com/kithrvy/" target="__blank">
              Twitter
            </a>
          </div>
        </div>

        <div className="email-wrapper">
          <div className="email">
            <p>
              Feel free to email me via{" "}
              <span>
                <a href="mailto:kitharveycaubalejo@gmail.com" target="__blank">
                  kitharveycaubalejo@gmail.com
                </a>
              </span>
            </p>
            <p>Or fill in the contact form down below</p>
          </div>
          <Formik
            initialValues={{
              fromName: "",
              fromEmail: "",
              fromMessage: "",
              recaptcha: "",
              success: false,
            }}
            validationSchema={Yup.object({
              fromEmail: Yup.string()
                .min(3, "Too Short!")
                .email("Invalid email format")
                .required("Required!"),
              fromName: Yup.string().min(3, "Too Short!").required("Required!"),
              fromMessage: Yup.string().required("Required!"),
              recaptcha: Yup.string().required("Robots are not welcome yet!"),
            })}
            onSubmit={(_values, { setSubmitting, resetForm, setFieldValue }) => {
              emailjs
                .sendForm(
                  "service_brvh3kh",
                  "template_7k881xs",
                  "contact-form",
                  "user_avuoOUOCaAy7kZB3KZqmb"
                )
                .then(
                  () => {
                    setSubmitting(false)
                    setFieldValue("success", true)
                    resetForm()
                  },
                  () => {
                    setSubmitting(false)
                    setFieldValue("success", false)
                  }
                )
            }}
          >
            {({ errors, touched, setFieldValue }) => (
              <div className="sign-in-form-main">
                <Form className="contact-form-container" id="contact-form">
                  <label htmlFor="fromName">Name:</label>
                  <Field
                    className="sign-in-inputs"
                    type="text"
                    name="fromName"
                    id="fromName"
                    placeholder="Name *"
                    style={{
                      borderColor: errors.fromName && touched.fromName ? "#1DA1F2" : " #999999",
                    }}
                  />
                  <div className="form-error">
                    <ErrorMessage name="fromName" component="p" />
                  </div>
                  <label htmlFor="fromEmail">Email:</label>
                  <Field
                    className="sign-in-inputs"
                    type="email"
                    name="fromEmail"
                    id="fromEmail"
                    placeholder="Email *"
                    style={{
                      borderColor: errors.fromEmail && touched.fromEmail ? "#1DA1F2" : " #999999",
                    }}
                  />
                  <div className="form-error">
                    <ErrorMessage name="fromEmail" component="p" />
                  </div>
                  <label htmlFor="fromMessage">Message:</label>
                  <Field
                    as="textarea"
                    className="sign-in-inputs"
                    type="text"
                    name="fromMessage"
                    id="fromMessage"
                    placeholder="Message *"
                    style={{
                      borderColor:
                        errors.fromMessage && touched.fromMessage ? "#1DA1F2" : " #999999",
                    }}
                  />
                  <div className="form-error">
                    <ErrorMessage name="fromMessage" component="p" />
                  </div>

                  <FastField
                    className="recaptcha"
                    component={Recaptcha}
                    sitekey="6Le0lzsaAAAAAKwnM9LPSUAbMluQyKR7C5qIyu1q"
                    name="recaptcha"
                    onChange={(value: string) => setFieldValue("recaptcha", value)}
                  />
                  <div className="form-error">
                    <ErrorMessage name="recaptcha" component="p" />
                  </div>
                  <div className="sign-in-form-footer">
                    <button className="sign-in-submit" type="submit">
                      Send
                    </button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Contact
