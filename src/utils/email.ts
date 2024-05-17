import emailjs from '@emailjs/browser'

import { TFormData } from '../components/Contacts'

const env = import.meta.env

interface ISendEmailJs {
  data: TFormData
}

const SendEmailJs = async ({ data }: ISendEmailJs) => {
  const serviceId = env.VITE_EMAILJS_SERVICE_ID
  const templateId = env.VITE_EMAILJS_TEMPLATE_ID
  const userId = env.VITE_EMAILJS_USER_ID

  try {
    await emailjs.send(serviceId, templateId, data, userId)
    return true
  } catch (err) {
    return false
  }
}

export default SendEmailJs
