"use client"
import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [allowedMessages, setallowedMessages] = useState(2);
  const [sendingMessage, setSendingMessage] = useState(false);

  const form:any = useRef(null);

  const sendEmail = (e:FormEvent<HTMLFormElement>) => {

      e.preventDefault();

      if (sendingMessage) {
        return;
      }

      if (allowedMessages <= 0) {
        toast.error("You have sent too much messages");
        return;
      }

      const formData = new FormData(e.currentTarget);
      const messageInfo:any = {
        name: formData.get('name') ? formData.get("name") :'',
        email: formData.get('email') ? formData.get("email") :'',
        message: formData.get('message') ? formData.get("message") :'',
      }
      
      let IfnameError = false;
      let IfemailError = false;
      let IfmessageError = false;

      if (messageInfo.name?.toString() === "") {
        setNameError("The Name is required.");
        IfnameError = true;
      }else{
        setNameError("");
        IfnameError = false;
      };


      let EmailRegexValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!EmailRegexValidator.test(messageInfo.email.toString().toLowerCase())) {
        setEmailError('The email is invalid');
        IfemailError = true;
      }else{
        setEmailError("");
        IfemailError = false;
      };


      if (messageInfo.message?.toString() === "") {
        setMessageError("The Message must have at least 10 chracters.");
        IfmessageError = true;
      }else{
        setMessageError("");
        IfmessageError = false;
      };

      if (IfnameError || IfemailError || IfmessageError) {
        return;
      }

      setSendingMessage(true);
      setallowedMessages(allowedMessages-1);
      setTimeout(() => {

          const newPromise = new Promise((resolve:any, reject:any) => {
          emailjs.sendForm('service_ljreywj', 'template_12scdup', form.current, 'BDIxeZDcmcXTCdO5z')
                  .then((result:any) => {
                    setSendingMessage(false);
                    resolve();
                  }, (error:any) => {
                    setSendingMessage(false);
                    reject();
                  });
        }) 
        toast.promise(
            newPromise,
            {
              pending: 'Sending...',
              success: 'Thank you the message has been sent👌',
              error: 'Sorry, there was an error, please try again later. 🤯'
            }
        )
        
      }, 1000);

  }

  return (
    <form ref={form} onSubmit={sendEmail} className='w-full sm:px-[10%] lg:px-[20%] 2xl:px-[25%]'>

        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="light"
        />
 

        <div>

            <input type="text" 
                   placeholder='Name'
                   name='name'
                   className={`${(nameError !== "") ? "border-2 border-red-500" : ""} w-full mt-8 py-3 px-4 bg-[#008CFF] text-white`}
            />

            {nameError && <p className='text-red-500 text-lg'>{nameError}</p>}

        </div>
        

        <div>

            <input type="email" 
                   placeholder='Email'
                   name='email'
                   className={`${(emailError !== "") ? "border-2 border-red-500" : ""} w-full mt-8 py-3 px-4 bg-[#008CFF] text-white`}
            />

            {emailError && <p className='text-red-500 text-lg'>{emailError}</p>}

        </div>

        <div>

          <textarea name="message" 
                    rows={"5" as any} 
                    placeholder='Message'
                    className={`${(messageError !== "") ? "border-2 border-red-500" : ""} w-full mt-8 py-3 px-4 bg-[#008CFF] text-white`}>
              
          </textarea>

          {messageError && <p className='text-red-500 text-lg'>{messageError}</p>}

        </div>

        <button type='submit' className='mt-8 w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B]'>Send</button>

    </form>
  )
}
