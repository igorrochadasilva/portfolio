import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../context/AppContext'
import SendEmailJs from '../../utils/email'

export type TFormData = { name: string; phone: string; email: string; subject: string; description: string }

const Contacts: React.FC = () => {
  const [showFormMessage, setShowFormMessage] = useState(false)
  const [statusSend, setStatusSend] = useState(false)

  const context = useContext(UserContext)

  const MContacts = context.state.messages.Contacts

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormData>()

  const onSubmit = async (data: TFormData) => {
    const res = await SendEmailJs({ data })

    setShowFormMessage(true)

    res ? setStatusSend(true) : setStatusSend(false)

    reset()
  }

  return (
    <section id="contacts" className="contacts">
      <div className="text-center">
        <h1>
          {MContacts.title} <span className="dot">.</span>
        </h1>
        <p>{MContacts.text}</p>
        {showFormMessage ? (
          statusSend ? (
            <span className="success-message">{MContacts.form.formSuccess}</span>
          ) : (
            <span className="error-message">Sorry something happened 😫, please try again later...</span>
          )
        ) : null}
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder={MContacts.form.name}
                  {...register('name', {
                    required: MContacts.form.nameRequired,
                    maxLength: {
                      value: 20,
                      message: MContacts.form.nameMsg,
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.name && errors.name.message}</span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder={MContacts.form.phone}
                  {...register('phone', {
                    required: MContacts.form.phoneRequired,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: MContacts.form.phoneMsg,
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.phone && errors.phone.message}</span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder={MContacts.form.email}
                  {...register('email', {
                    required: MContacts.form.emailRequired,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: MContacts.form.phoneMsg,
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.email && errors.email.message}</span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder={MContacts.form.sub}
                  {...register('subject', {
                    required: MContacts.form.subRequired,
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.subject && errors.subject.message}</span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  className="form-control"
                  placeholder={MContacts.form.description}
                  {...register('description', {
                    required: MContacts.form.descriptionRequired,
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.description && errors.description.message}</span>
              <button className="btn-main-offer contact-btn" type="submit">
                {MContacts.button}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contacts
