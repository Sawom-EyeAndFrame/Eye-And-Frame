import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
return (
<main
className="min-h-screen flex flex-col items-center justify-start p-6 bg-cover bg-center"
style={{ backgroundImage: "url('/photos/bg.jpg')" }}
>
<Navbar />

<motion.h2
className="text-white text-4xl font-bold mt-12 mb-8 drop-shadow-lg"
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
>
Welcome to Eye & Frame
</motion.h2>

<motion.div
className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.5, duration: 1 }}
>
<img
src="/photos/photo1.jpg"
alt="Photo 1"
className="rounded shadow-lg object-cover h-64 w-full"
/>
<img
src="/photos/photo2.jpg"
alt="Photo 2"
className="rounded shadow-lg object-cover h-64 w-full"
/>
<img
src="/photos/photo3.jpg"
alt="Photo 3"
className="rounded shadow-lg object-cover h-64 w-full"
/>
</motion.div>

<Footer />
</main>
);
}
