import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Components from './components/Components';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import { ChakraProvider, Stack, extendTheme } from '@chakra-ui/react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
// import MyCarousel from './components/MyCarousel';
import Categories from './pages/Categories';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Default from './pages/Default';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import SellerLogin from './sellerPages/SellerLogin';
import Seller from './sellerPages/Seller';
import SellerPlatformPage from './sellerPages/SellerPlatformPage';
import SellerRegistrationForm from './sellerPages/SellerRegistrationForm';
import SellerProfile from './sellerPages/SellerProfile';
import Product from './pages/Product';
import SellerStory from './sellerPages/SellerStory';
import PaymentPage from './pages/PaymentPage';
import ShoppingCart from './components/ShoppingCart';
// DOCS
//  <Container /> will be used afterward and as a template when using redux

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      0;
      return state - 1;

    default:
      return state;
  }
};

const store = createStore(countReducer);

const MapStateToProps = (state) => {
  return {
    count: state,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};

const Component = ({ count, increment, decrement }) => {
  return (
    <>
      <h1>Count = {count}</h1>
      <button className="bg-blue-400" onClick={increment}>
        Increment
      </button>
      <br />
      <button className="bg-blue-200" onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

const Container = connect(MapStateToProps, MapDispatchToProps)(Component);

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        background: '',
      },
    }),
  },
});

export default function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <div>
            <Stack spacing={4}>
              <Navbar />
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/log-in" element={<Login />} />
                  <Route path="/seller-log-in" element={<SellerLogin />} />
                  <Route path="/seller" element={<Seller />} />
                  <Route
                    path="/seller-platform"
                    element={<SellerPlatformPage />}
                  />
                  <Route path="*" element={<Default />} />
                  <Route
                    path="/seller-registration-form"
                    element={<SellerRegistrationForm />}
                  />
                  <Route path="/seller-profile" element={<SellerProfile />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/seller-story" element={<SellerStory />} />
                  <Route path="/PaymentPage" element={<PaymentPage />} />
                  <Route path="/ShoppingCart" element={<ShoppingCart />} />
                </Routes>
              </Router>
              <Footer />
            </Stack>
          </div>
        </Provider>
      </ChakraProvider>
    </>
  );
}
