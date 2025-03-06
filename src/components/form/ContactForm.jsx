import useContactForm from "../../hooks/useContactForm";

function ContactForm() {
  const { formData, errors, successMessage, handleChange, handleSubmit } = useContactForm();

  return (
    <div className="w-full mx-auto bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Contact Us</h2>

      {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
    
        <div>
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-gray-800"
            required
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

 
        <div>
          <label className="block text-gray-700 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-gray-800"
            required
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
        </div>

     
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-gray-800"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

       
        <div>
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-gray-800"
            required
          />
          {errors.body && <p className="text-red-500 text-sm">{errors.body}</p>}
        </div>


        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;