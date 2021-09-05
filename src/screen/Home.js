import { Switch, Route, Redirect } from "react-router-dom";
import Header from '../components/layout/Header'
import HomeBody from '../components/layout/HomeBody'
import Footer from '../components/layout/Footer'
import '../styles/home.scss'
import NewBookMore from '../components/common/card/NewBookMore'
import Detail from '../components/common/card/Detail'
import SaleBookMore from '../components/common/card/SaleBookMore'
import FeaturedBookMore from '../components/common/card/FeaturedBookMore'
import CategoryBook from '../components/common/card/CategoryBook'
import SearchBook from '../components/common/card/SearchBook'
import Cart from '../components/common/card/Cart'
import Checkout from '../components/common/card/Checkout'
import Notification from '../components/common/card/Notification'
import App from '../App'
import Admin from "./Admin";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Route path="/customer" component={Notification} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/cart" component={Cart} />
            <Route path="/search/:valueSearch" component={SearchBook} />
            <Route path="/category" component={CategoryBook} />
            <Route path="/salebook" component={SaleBookMore} />
            <Route path="/newbook" component={NewBookMore} />
            <Route path="/featuredbook" component={FeaturedBookMore} />
            <Route path="/detail" component={Detail} />
            <Route path="/home" component={HomeBody} />
            <Redirect to="/home" />
            <Footer />
        </div>
    )
}
export default Home;
