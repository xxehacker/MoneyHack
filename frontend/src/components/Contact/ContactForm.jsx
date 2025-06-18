import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { contactApi } from "@/services/contact/contactService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const VALIDATION_SCHEMA = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number must be at most 15 characters")
    .required("Phone number is required"),
  message: Yup.string()
    .min(15, "Message must be at least 15 characters long")
    .required("Message is required"),
});

const ContactForm = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { mutateAsync, isPending } = useMutation({
    mutationFn: contactApi,
    mutationKey: ["contact"],
    onSuccess: (data) => {
      toast.success(data.message);
      formik.resetForm();
    },
    onError: (error) => toast.error(error.message),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: (values) => {
      if (!token) {
        toast.error("Please login to send a message to the admin");
        navigate("/login");
        return;
      }
      mutateAsync(values);
    },
  });

  return (
    <div id="contact" className="py-24 px-6 bg-gradient-to-br from-emerald-50 via-white to-blue-50 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <div className="space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-black">
            Get in
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reach out, and let's create a universe of financial possibilities together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-gray-100">
            <div className="space-y-2 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 text-left">Start a Conversation</h2>
              <p className="text-gray-600 text-left">Have questions or need help? Send us a message.</p>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                {["firstName", "lastName"].map((field) => (
                  <div key={field} className="space-y-1.5">
                    <input
                      placeholder={field === "firstName" ? "First Name" : "Last Name"}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-300"
                      type="text"
                      name={field}
                      id={field}
                      value={formik.values[field]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched[field] && formik.errors[field] && (
                      <p className="text-red-500 text-sm mt-1">{formik.errors[field]}</p>
                    )}
                  </div>
                ))}
              </div>
              {["email", "phone"].map((field) => (
                <div key={field} className="space-y-1.5">
                  <input
                    type={field}
                    placeholder={field === "email" ? "Email" : "Phone Number"}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-300"
                    name={field}
                    id={field}
                    value={formik.values[field]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[field] && formik.errors[field] && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors[field]}</p>
                  )}
                </div>
              ))}
              <div className="space-y-1.5">
                <textarea
                  placeholder="Your message"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none h-32 resize-none transition-all duration-300"
                  name="message"
                  id="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg shadow-emerald-500/25 disabled:opacity-50"
              >
                <span>Send Message</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>

          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl">📬</span>
              </div>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "Smart financial tracking transformed our chaotic spending into clear patterns, revealing the true power of mindful budgeting."
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-emerald-500"></div>
                <p className="text-emerald-600 text-sm font-medium">Financial Insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;