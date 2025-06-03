interface PizzaCardProps {
    name: string;
    price: string;
    ingredients?: string;
    imageUrl?: string; // Nueva prop para la URL de la imagen
}

const PizzaCard = ({ name, price, ingredients, imageUrl }: PizzaCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            {/* Sección de la imagen */}
            <div className="h-48 bg-stone-100 overflow-hidden">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-stone-400">
                        <span className="text-lg">Imagen no disponible</span>
                    </div>
                )}
            </div>

            {/* Sección del contenido */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-green-800">{name}</h3>
                    <span className="bg-stone-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${price}
                    </span>
                </div>
                {ingredients && (
                    <p className="text-stone-600 italic mt-2 border-t pt-2 border-amber-100">
                        {ingredients}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PizzaCard;