import Button from './Button';

function Navigation() {
    return (
        <nav className="mb-10 py-6 bg-white dark:bg-dark-mode-elements shadow-sm">
            <div className="container mx-auto flex items-center justify-between ">
                <h1 className="font-extrabold text-lg">Where in the world</h1>
                <Button />
            </div>
        </nav>
    );
}

export default Navigation;
