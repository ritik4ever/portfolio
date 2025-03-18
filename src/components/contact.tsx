import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .send(
                "your_service_id", // Replace with EmailJS Service ID
                "your_template_id", // Replace with EmailJS Template ID
                {
                    user_name: formData.name,
                    user_phone: formData.phone,
                    user_email: formData.email,
                    message: formData.message,
                },
                "your_public_key" // Replace with EmailJS Public Key
            )
            .then(
                (response) => {
                    console.log("Email sent successfully:", response);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.error("Email failed to send:", error);
                    alert("Failed to send message.");
                }
            );

        setFormData({ name: "", phone: "", email: "", message: "" });
    };

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-2xl font-bold mb-4">Let's Build Together</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone No"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
