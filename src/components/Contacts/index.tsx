import React, { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import UserContext from '../context/AppContext';

type TFormData = {name: string, phone: string, email: string, subject: string, description: string}

const Contacts: React.FC   = () => {
  
  const context = useContext(UserContext)
  const MContacts = context.state.messages.Contacts 
  
  const [successMessage, setSuccessMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();

  const serviceID = 'service_dwcig0p';
  const templateID = 'template_cnrxm1m';
  const userID = 'user_71i8cGIfIVtKX7hse4aEV';

  const onSubmit = (data:TFormData , formElement: any) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );

    formElement.target.reset();
  };

  const sendEmail = (serviceID: string, templateID: string, variables: Object | undefined, userID: string | undefined) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          MContacts.form.formSucess
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <section id='contacts' className='contacts'>
      <div className='text-center'>
        <h1>
          {MContacts.title} <span className='dot'>.</span>
        </h1>
        <p>
          {MContacts.text}
        </p>
        <span className='success-message'>{successMessage}</span>
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              {/* NAME INPUT */}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={MContacts.form.name}
                  name='name'
                  ref={register({
                    required: MContacts.form.nameRequired,
                    maxLength: {
                      value: 20,
                      message: MContacts.form.nameMsg,
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={MContacts.form.phone}
                  name='phone'
                  ref={register({
                    required: MContacts.form.phoneRequired,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: MContacts.form.phoneMsg,
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.phone && errors.phone.message}
              </span>
              {/* EMAIL INPUT */}
              <div className='text-center'>
                <input
                  type='email'
                  className='form-control'
                  placeholder={MContacts.form.email}
                  name='email'
                  ref={register({
                    required: MContacts.form.emailRequired,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: MContacts.form.phoneMsg,
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={MContacts.form.sub}
                  name='subject'
                  ref={register({
                    required: MContacts.form.subRequired,
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className='col-md-6 col-xs-12'>
              {/* DESCRIPTION */}
              <div className='text-center'>
                <textarea              
                  className='form-control'
                  placeholder={MContacts.form.description}
                  name='description'
                  ref={register({
                    required: MContacts.form.descriptionRequired,
                  })}
                ></textarea>
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.description && errors.description.message}
              </span>
              <button className='btn-main-offer contact-btn' type='submit'>
                {MContacts.button}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
