import React from "react";
import WorkerPicture from "../../assets/images/contact/worker.png";
import ContactForm from "../../components/contact-form/contact-form.component";
import IconsBar from "../../components/icons-bar/icons-bar.component";

const ContactPage = () => {
  return (
    <section>
      <div className="row p-4">
        <div className="col my-md-5">
          <h2 className="text-center">
            Masz pytania? Chcesz nawiązać współpracę? Napisz do nas! ;-)
          </h2>
          <ContactForm />
        </div>
        <div className="row d-none d-md-block col-md-5 col-lg-4 col-xl-3">
          <img className="col my-4" src={WorkerPicture} alt="Working man :)" />
        </div>
      </div>
      <dir className="text-center px-4">
        <h2>Albo... odwiedź nasze profile:</h2>
        <IconsBar />
      </dir>
    </section>
  );
};

export default ContactPage;
