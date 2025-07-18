import { X } from "lucide-react";

const EnquiryForm = ({ onClose }) => {
  const submitHandler = (e) => {
    e.preventDefault()
    onClose()
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Enquiry Form</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              placeholder="Your Phone"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              rows="3"
              placeholder="Your Message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors cursor-pointer"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
