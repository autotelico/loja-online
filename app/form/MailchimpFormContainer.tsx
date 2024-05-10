'use client';
import { subscribe } from 'diagnostics_channel';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import CustomForm from './CustomForm';
import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config();

export default function MailchimpFormContainer(): JSX.Element {
  // dotenv.config({path: path.join(__dirname, 'mailchimp.env')})

  console.log(process.env);
  const test = 'test';
  const U = process.env.U_KEY;
  const ID = process.env.ID_KEY;

  const postURL = `https://gmail.us18.list-manage.com/subscribe/post?u=${U}&id=${ID}`;

  return (
    <>
      <p>bahahah</p>
      <p>
        I am {U} and I am {test}
      </p>
      <div className="mc__form-container">
        <MailchimpSubscribe
          url={postURL}
          render={({ subscribe, status, message }) => {
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData: any) => subscribe(formData)}
            />;
          }}
        />
      </div>
    </>
  );
}
