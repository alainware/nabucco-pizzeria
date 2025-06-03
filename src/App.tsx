import Header from './components/Header';
import PizzasPage from './pages/PizzasPage';

const App = () => {
    return (
        <div className="font-sans bg-amber-50">
            <Header />
            <main>
                <PizzasPage />
            </main>
            <footer className="bg-amber-900 text-white py-6 text-center">
                <p>© {new Date().getFullYear()} Nabucco Restaurante - Auténtica Pizzería Italiana</p>
            </footer>
        </div>
    );
};

export default App;