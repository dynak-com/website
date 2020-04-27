import React from 'react';
import WorkerPicture from '../../assets/images/contact/worker.png';
import ContactForm from '../../components/contact-form/contact-form.component';
import IconsBar from '../../components/icons-bar/icons-bar.component';

const ContactPage = (props) => {
  const { header, socials, form } = props.content;
  return (
    <section>
      <div className='row p-4'>
        <div className='col my-md-5 col-xl-6 mx-lg-auto'>
          <h2 className='text-center'>{header}</h2>
          <ContactForm content={form} />
        </div>
        <div className='row d-none d-md-block col-md-5 col-lg-4 col-xl-3 mx-lg-auto'>
          <img className='col my-4' src={WorkerPicture} alt='Working man :)' />
        </div>
      </div>
      <dir className='text-center px-4'>
        <h2>{socials}</h2>
        <IconsBar />
      </dir>
    </section>
  );
};

export default ContactPage;
