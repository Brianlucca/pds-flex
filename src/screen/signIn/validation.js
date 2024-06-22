import * as yup from 'yup'
const validationForm = () => {
  return yup.object().shape({
    username: yup.string().required('The username is mandatory'),
    password: yup
      .string()
      .min(8, 'Password should be at least 8 chars long.')
      .required('Password is required'),
  })
}

export default validationForm
