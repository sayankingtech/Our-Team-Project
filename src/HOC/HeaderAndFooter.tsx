import Footer from "../components/footer"
import Nav from "../components/nav"

export const WithHeaderFooter = (WrappedComponent: any) => {
    return function () {
        return (
            <>
                <Nav />
                <WrappedComponent />
                {/* <Footer /> */}
            </>
        )
    }
}