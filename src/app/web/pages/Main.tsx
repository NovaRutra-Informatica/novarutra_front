import Header from "@components/Header";
import Hero from "@components/Hero";
import About from "@components/About";
import Services from "@components/Services";
import Clients from "@components/Clients";
// import Testimonials from "@components/Testimonials";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

export default function Main() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Clients />
                {/* <Testimonials /> */}
                <Contact />
            </main>
            <Footer />
        </>
    );
}