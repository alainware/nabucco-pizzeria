import { FaPhone } from 'react-icons/fa';

const FloatingCallButton = () => {
    const phoneNumber = "+524422150870";

    return (
        <a
            href={`tel:${phoneNumber}`}
            className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
            aria-label="Llamar a la pizzería"
        >
            <FaPhone className="text-2xl" />
        </a>
    );
};

export default FloatingCallButton;