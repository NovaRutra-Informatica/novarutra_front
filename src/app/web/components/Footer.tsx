export default function Footer() {
    return (
        <footer className="bg-gray-900">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
                <p className="text-center text-xs leading-5 text-gray-400">
                    &copy; {new Date().getFullYear()} NOVARUTRA INFORMATICA
                    LTDA. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
