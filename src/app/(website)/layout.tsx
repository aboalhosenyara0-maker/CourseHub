import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function WebsiteLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <>
        <NavBar />
        <section>
            {children}
        </section>
        <Footer />
        </>
    );
}