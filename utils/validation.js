import * as Yup from 'yup'

export const logInSchema = Yup.object().shape({
  email: Yup.string().required('Required email').email('Please enter the correct email address'),
  password: Yup.string()
    .required('Please enter your login password')
    .min(6, 'Minimum password length 6 digits'),
})

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter the account name')
    .min(3, 'The minimum account name is three'),
  email: Yup.string()
    .required('Required account email')
    .email('Please enter the correct email address'),
  password: Yup.string()
    .required('Please enter your login password')
    .min(6, 'Minimum password length 6 digits'),
  confirmPassword: Yup.string()
    .required('Please enter the confirmation password again')
    .oneOf([Yup.ref('password'), null], '确认密码有误'),
})

export const categorySchema = Yup.object().shape({
  name: Yup.string().required('The category name cannot be empty'),
  slug: Yup.string().required('The path name cannot be empty'),
  image: Yup.string()
    .required('Enter the image address')
    .url('Invalid image address')
    .matches(/\.(gif|jpe?g|png|webp)$/i, 'The image address must be a valid image URL'),
})

export const bannerSchema = Yup.object().shape({
  title: Yup.string().required('The name cannot be empty'),
  image: Yup.object().shape({
    url: Yup.string()
      .required('Please enter the picture address')
      .url('Invalid address')
      .matches(/\.(gif|jpe?g|png|webp)$/i, 'The image address must be a valid image URL'),
  }),
})

export const sliderSchema = Yup.object().shape({
  title: Yup.string().required('The name cannot be empty'),
  image: Yup.object().shape({
    url: Yup.string()
      .required('Please enter the picture address')
      .url('Invalid address')
      .matches(/\.(gif|jpe?g|png|webp)$/i, 'The image address must be a valid image URL'),
  }),
})

export const reviewSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title cannot be empty')
    .min(4, 'Title must not be less than 4 characters'),
  comment: Yup.string()
    .required('Comment cannot be empty')
    .min(4, 'Comment should not be less than 4 Characters'),
})

export const addressSchema = Yup.object().shape({
  country: Yup.object().shape({
    name: Yup.string().required('Please select the country.'),
  }),
  city: Yup.object().shape({
    name: Yup.string().required('Please select the city'),
  }),
  state: Yup.object().shape({
    name: Yup.string().required('Please select the state'),
  }),
  address: Yup.string().required('Street name cannot be empty'),
  county: Yup.string().required('Please enter your county'),
})

export const nameSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name').min(3, 'The name must exceed 3 Characters'),
})

export const mobileSchema = Yup.object().shape({
  mobile: Yup.string().required('Mobile must be registered'),
})
