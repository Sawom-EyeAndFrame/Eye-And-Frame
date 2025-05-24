import { FaWhatsapp, FaFacebook, FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";

export default function Navbar() {
return (
<nav className="w-full max-w-6xl flex justify-between items-center py-4 px-6 bg-black bg-opacity-70 text-white rounded">
<h1 className="text-2xl font-bold">Eye & Frame</h1>
<div className="flex space-x-6 text-lg">
<a href="https://wa.me/8801613018334" target="_blank" rel="noreferrer" className="flex items-center space-x-2 hover:text-green-400">
<FaWhatsapp className="h-6 w-6" />
<span>WhatsApp</span>
</a>

<a href="https://www.facebook.com/share/1Hdq5wFL3t/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex items-center space-x-2 hover:text-blue-500">
<FaFacebook className="h-6 w-6" />
<span>Facebook</span>
</a>

<a href="mailto:eyeandframe129@gmail.com" className="flex items-center space-x-2 hover:underline">
<FaEnvelope className="h-6 w-6" />
<span>eyeandframe129@gmail.com</span>
</a>

<a href="tel:+8801613018334" className="flex items-center space-x-2 hover:underline">
<FaPhone className="h-6 w-6" />
<span>01613018334</span>
</a>

<a href="https://instagram.com/eyeandframe" target="_blank" rel="noreferrer" className="flex items-center space-x-2 hover:text-pink-500">
<FaInstagram className="h-6 w-6" />
<span>Instagram</span>
</a>
</div>
</nav>
);
}