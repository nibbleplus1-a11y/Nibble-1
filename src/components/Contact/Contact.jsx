import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#05070D] py-24 text-white"
    >
      <ContactHero />

      <div className="mx-auto mt-12 sm:mt-20 grid max-w-7xl gap-8 sm:gap-12 px-4 sm:px-6 lg:grid-cols-2 min-w-0">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}

export default Contact;