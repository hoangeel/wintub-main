import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Header />
            <div className='contentPage'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout