import PizzaCard from '../components/PizzaCard';

const PizzasPage = () => {
    const pizzas = [
        { name: "PESCATORE", price: "195.00", ingredients: "SALSA DE JITOMATE Y QUESO" },
        { name: "ALLE ALGHE", price: "209.00", ingredients: "EJOTES, CHÍCHAROS Y ESPÁRRAGOS" },
        { name: "SALVAGENTE", price: "201.00", ingredients: "JAMÓN" },
        { name: "CALZONE DEL CAPITANO", price: "208.00", ingredients: "JAMÓN Y CHAMPIÑONES" },
        { name: "PIRATA", price: "201.00", ingredients: "SALAMI" },
        { name: "DELLA COSTA", price: "210.00", ingredients: "ATÚN Y ALCAPARRAS" },
        { name: "IN BARCA", price: "201.00", ingredients: "SALCHICHA" },
        { name: "FIORDO", price: "210.00", ingredients: "ATÚN Y CEBOLLA" },
        { name: "AL TIMONE", price: "201.00", ingredients: "CHAMPINONES" },
        { name: "ALL'UOVO", price: "210.00", ingredients: "SALAMI Y HUEVO" },
        { name: "A VELA", price: "203.00", ingredients: "TOCINO Y HUEVO COCIDO" },
        { name: "BANDIERA", price: "210.00", ingredients: "ACEITUNAS, AJO Y ALBAHACA" },
        { name: "ALL'ANCORA", price: "203.00", ingredients: "CHORIZO Y PIMIENTO" },
        { name: "AWAIIANA", price: "208.00", ingredients: "JAMÓN Y PIÑA" },
        { name: "ALLE VONGOLE", price: "217.00", ingredients: "ALMEJAS" },
        { name: "ALLA ROMANA", price: "244.00", ingredients: "AJO, ACEITUNAS Y ANCHOAS" },
        { name: "SETTE MARI", price: "212.00", ingredients: "JAMÓN, CHAMPIÑONES Y SALAMI" },
        { name: "CARNES FRIAS", price: "228.00", ingredients: "JAMÓN, TOCINO, CHORIZO, SALAMI Y SALCHICHA" },
        { name: "MESSICANA", price: "212.00", ingredients: "POLLO, PIMIENTO, CHORIZO Y CEBOLLA" },
        { name: "ALLA SCOGLIERA", price: "263.00", ingredients: "MARISCOS (ATÚN, ALMEJAS Y CAMARONES)" },
        { name: "FANTASIA", price: "212.00", ingredients: "CEBOLLA, PIMIENTO, SALCHICHA Y CHAMPIÑONES" },
        { name: "AI FARAGLIONI", price: "256.00", ingredients: "TRES QUESOS" },
        { name: "AI COCAI", price: "212.00", ingredients: "JAMÓN, CHAMPIÑONES, ALCAPARRA Y PIMIENTO" },
        { name: "CAPRICCIOSA", price: "245.00", ingredients: "JAMÓN, CHAMPIÑONES, ALCACHOFAS, ACEITUNAS Y ANCHOAS" },
        { name: "CORSARA", price: "212.00", ingredients: "JAMON, ACEITUNAS Y ESPARRAGOS" },
        { name: "SAPORITA", price: "262.00", ingredients: "ANCHOAS, ALCAPARRA, AJO Y CEBOLLA" },
        { name: "PEPERONI", price: "228.00" },
        { name: "CAPRESSE", price: "268.00", ingredients: "ANCHOAS, ACEITUNAS, ALBAHACA, QUESO MOZZARELLA Y REBANADAS DE JITOMATE" },
        { name: "AL GAMBERO", price: "244.00", ingredients: "CAMARONES" },
        { name: "TIROLESE", price: "241.00", ingredients: "JITOMATE CHERRY, TOCINO Y MOZZARELLA" },
        { name: "ALL'AREMBAGGIO", price: "238.00", ingredients: "ANCHOAS" },
        { name: "MARINARA", price: "244.00", ingredients: "ANCHOAS Y ACEITUNAS" },
        { name: "SALMÓN", price: "265.00" },
        { name: "SALCHICHA ITALIANA", price: "217.00" },
        { name: "JAMON SERRANO", price: "265.00" },
    ];

    return (
        <div className="min-h-screen bg-amber-50">
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-green-800 border-b-2 border-amber-300 pb-2 font-serif">
                    MENÚ DE PIZZAS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pizzas.map((pizza, index) => (
                        <PizzaCard
                            key={index}
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients}
                            imageUrl="pizza.jpg"
                        />
                    ))}
                </div>
                <div className="mt-12 bg-green-50 border-l-4 border-green-600 p-4 text-stone-800">
                    <p className="italic font-semibold">
                        TODAS NUESTRAS PIZZAS SON PREPARADAS DE MANERA TRADICIONAL EN UN TIEMPO DE 20 A 25 MINUTOS.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PizzasPage;