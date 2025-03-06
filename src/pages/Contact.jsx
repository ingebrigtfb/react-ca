import ContactForm from "../components/form/ContactForm";

const Contact = () => {
    return ( 
        <div className="flex flex-col items-center gap-10 mt-10 mb-15 px-6 max-w-[600px] mx-auto">
            <h1 className="text-3xl">Contact Us</h1>
            <p className="">We’re here to help! Whether you have a question about our products, need support, or just want to say hello, feel free to reach out.</p>
            <h2 className="text-2xl">📞 Get in Touch</h2>
            <div className="flex flex-col">
            <p>Email: dont@mailMe.com</p>
            <p>Phone: +Dont call me</p>
            <p>Live Chat: Never available Monday - Sunday, 12 AM - 12 PM</p>
            </div>
            <h2 className="text-2xl">📍 Visit Us</h2>
            <p>123 Dont Visit, City, Country</p>
            <h2 className="text-2xl">💬 Send Us a Message</h2>
            <p>Have a question? Fill out the form below, and we’ll get back to you as soon as possible.</p>
            <ContactForm />



        </div>
    );
};

export default Contact