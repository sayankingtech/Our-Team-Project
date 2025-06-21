import Footer from "../components/Footer"
import Nav from "../components/Nav"

export const WithHeaderFooter = (WrappedComponent: any) => {
    return function () {
        return (
            <>
                <Nav />
                <WrappedComponent />
                <Footer />
            </>
        )
    }
}