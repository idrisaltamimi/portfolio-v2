import { FormEvent, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import { mergeRefs } from 'react-merge-refs'
import { useInView } from 'react-intersection-observer'

import { envelopeLeft, envelopeRight } from '../assets'
import { Button, TextField } from '../components'
import { useHashScroll } from '../hooks'
import './Contact.scss'

const Contact = () => {
  const { t } = useTranslation()

  const form = useRef<any>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const [success, setSuccess] = useState(false)
  const [sending, setSending] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)


  const { ref, inView } = useInView({ threshold: .4 })
  useHashScroll(contactRef.current, 'contact', inView)

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) {
      !name ? setNameError(true) : setNameError(false)
      !email ? setEmailError(true) : setEmailError(false)
      !message ? setMessageError(true) : setMessageError(false)
      return
    }

    const target = e.target as HTMLFormElement
    setSending(true)

    emailjs.sendForm('service_gm27rxn', 'idris_portfolio', form.current, 'pk9fRrp1BnP5QG7kg')
      .then((result) => {
        setSuccess(true)
        setSending(false)
        target.reset()
        setName('')
        setEmail('')
        setMessage('')
        setNameError(false)
        setEmailError(false)
        setMessageError(false)
      }, (error) => {
        console.log(error)
        setSuccess(false)
        setSending(false)
      })
  }

  const endSuccess = () => setSuccess(false)
  usePopup(success, endSuccess)

  const observeClass = inView ? 'show-contact' : 'hide-contact'

  return (
    <>
      <section ref={mergeRefs([contactRef, ref])} id='contact'>
        <h2 className='section-title pl'>{t('contact.title')}</h2>


        <div className='form-wrapper'>
          <img src={envelopeLeft} alt='' className={`envelope-left ${observeClass}`} ref={ref} />
          <img src={envelopeRight} alt='' className={`envelope-right ${observeClass}`} />
          <ul className={observeClass}>
            {socialLinks.map(({ url, brand }) => (
              <li key={url}>
                <a rel="noreferrer" href={url} target='_blank'>
                  {brand}
                </a>
              </li>
            ))}
          </ul>
          <form ref={form} onSubmit={sendEmail} className={observeClass}>
            <TextField
              label={t('contact.email')}
              id='email'
              type='email'
              state={email}
              setState={setEmail}
              error={emailError}
            />
            <TextField
              label={t('contact.name')}
              id='name'
              type='name'
              state={name}
              setState={setName}
              error={nameError}
            />
            <TextField
              label={t('contact.message')}
              id='message'
              type='textarea'
              state={message}
              setState={setMessage}
              error={messageError}
            />

            <Button
              size='large'
              color='light'
            >
              {sending ? (
                <div className='flex'>
                  <Loading color='white' /> {t('contact.sending')}
                </div>
              ) : (
                t('contact.submit')
              )}
            </Button>
          </form>
        </div>
      </section>

      {success && (
        <div className='success'>
          <CheckMarkIcon />
          <p>{t('contact.success')}</p>
        </div>
      )}
    </>
  )
}

export default Contact

const usePopup = (success: boolean, endSuccess: () => void) => {
  useEffect(() => {
    if (!success) return

    const timeout = setTimeout(() => {
      endSuccess()
    }, 4000)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success])
}

const Loading = ({ color }: { color?: string }) => {
  return (
    <div className='center-loader'>
      <div className='wrapper-loader'>
        <div className={`line-loader line-loader-${color}`} />
        <div className={`line-loader line-loader-${color}`} />
        <div className={`line-loader line-loader-${color}`} />
      </div>
    </div>
  )
}

const socialLinks = [
  {
    brand: <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.375 4.174C18.538 3.774 19.063 2.187 18.212 0.0369999C18.212 0.0369999 16.9 -0.376 13.912 1.662C12.662 1.312 11.325 1.262 10 1.262C8.675 1.262 7.338 1.312 6.088 1.662C3.1 -0.388 1.788 0.0369999 1.788 0.0369999C0.938 2.187 1.463 3.774 1.625 4.174C0.612 5.262 0 6.662 0 8.362C0 14.799 4.162 16.249 9.975 16.249C15.788 16.249 20 14.799 20 8.362C20 6.662 19.387 5.262 18.375 4.174ZM10 15.024C5.875 15.024 2.525 14.837 2.525 10.837C2.525 9.887 3 8.987 3.8 8.249C5.138 7.024 7.425 7.674 10 7.674C12.588 7.674 14.85 7.024 16.2 8.249C17.013 8.987 17.475 9.874 17.475 10.837C17.475 14.824 14.125 15.024 10 15.024ZM6.863 8.762C6.038 8.762 5.363 9.762 5.363 10.987C5.363 12.212 6.037 13.224 6.863 13.224C7.688 13.224 8.363 12.224 8.363 10.987C8.363 9.749 7.688 8.762 6.863 8.762ZM13.137 8.762C12.312 8.762 11.637 9.749 11.637 10.987C11.637 12.224 12.312 13.224 13.137 13.224C13.962 13.224 14.637 12.224 14.637 10.987C14.637 9.749 13.975 8.762 13.137 8.762Z" fill="black" />
    </svg>
    , url: "https://github.com/idrisaltamimi"
  },
  {
    brand: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="black" />
    </svg>
    , url: "https://www.linkedin.com/in/idris-altamimi-a147b3246/"
  },
  {
    brand: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="black" />
    </svg>
    , url: "https://twitter.com/idris_altamimi"
  },
  {
    brand: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="black" />
    </svg>
    , url: "https://www.instagram.com/idris.altamimi/"
  },
]

const CheckMarkIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6 13.8L8.425 11.625C8.24167 11.4417 8.01667 11.35 7.75 11.35C7.48333 11.35 7.25 11.45 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.0833 16.0833 10.3167 16.175 10.6 16.175C10.8833 16.175 11.1167 16.0833 11.3 15.9L16.975 10.225C17.1583 10.0417 17.25 9.81667 17.25 9.55C17.25 9.28333 17.15 9.05 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z" fill="black" />
    </svg>
  )
}