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
          <h2 className="text-center my-5">Albo... odwiedź nasze profile:</h2>
          <IconsBar />
        </div>
        <div className="row col-12 col-md-6 col-lg-5 col-xl-4">
          <img
            className="col-6 col-md-auto mx-auto my-3 m-md-0"
            src={WorkerPicture}
            alt="Working man :)"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
