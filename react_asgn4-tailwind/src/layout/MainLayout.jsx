export default function MainLayout({ children }) {
    return (
        <section className="bg-white font-poppins">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                {children}
            </div>
        </section>
    );
}
