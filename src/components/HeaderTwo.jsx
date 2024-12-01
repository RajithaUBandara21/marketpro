import React, { useEffect, useState } from "react";
import query from "jquery";
import { Link, NavLink } from "react-router-dom";
const HeaderTwo = ({ category }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
    const selectElement = query(".js-example-basic-single");
    selectElement.select2();

    return () => {
      if (selectElement.data("select2")) {
        selectElement.select2("destroy");
      }
    };
  }, []);

  // Set the default language
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Set the default currency
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  // Mobile menu support
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  // Search control support
  const [activeSearch, setActiveSearch] = useState(false);
  const handleSearchToggle = () => {
    setActiveSearch(!activeSearch);
  };

  // category control support
  const [activeCategory, setActiveCategory] = useState(false);
  const handleCategoryToggle = () => {
    setActiveCategory(!activeCategory);
  };
  const [activeIndexCat, setActiveIndexCat] = useState(null);
  const handleCatClick = (index) => {
    setActiveIndexCat(activeIndexCat === index ? null : index);
  };

  return (
    <>
      <div className='overlay' />
      <div
        className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
      />
      {/* ==================== Search Box Start Here ==================== */}

      <form action='#' className={`search-box ${activeSearch && "active"}`}>
        <button
          onClick={handleSearchToggle}
          type='button'
          className='search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1'
        >
          <i className='ph ph-x' />
        </button>
        <div className='container'>
          <div className='position-relative'>
            <input
              type='text'
              className='form-control py-16 px-24 text-xl rounded-pill pe-64'
              placeholder='Search for a product or brand'
            />
            <button
              type='submit'
              className='w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
            >
              <i className='ph ph-magnifying-glass' />
            </button>
          </div>
        </div>
      </form>

      <header className='header-middle style-two bg-color-neutral'>
        <div className='container container-lg'>
          <nav className='header-inner flex-between'>
          
            <div className='header-right flex-align d-lg-block d-none'>
              <div className='header-two-activities flex-align flex-wrap gap-32'>
                <button
                  type='button'
                  className='flex-align search-icon d-lg-none d-flex gap-4 item-hover-two'
                >
                  <span className='text-2xl text-white d-flex position-relative item-hover__text'>
                    <i className='ph ph-magnifying-glass' />
                  </span>
                </button>
                <Link
                  to='/account'
                  className='flex-align flex-column gap-8 item-hover-two'
                >
                  <span className='text-2xl text-white d-flex position-relative item-hover__text'>
                    <i className='ph ph-user' />
                  </span>
                  <span className='text-md text-white item-hover__text d-none d-lg-flex'>
                    Profile
                  </span>
                </Link>
             
               
                <Link
                  to='/cart'
                  className='flex-align flex-column gap-8 item-hover-two'
                >
                  <span className='text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text'>
                    <i className='ph ph-shopping-cart-simple' />
                    <span className='w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4'>
                      2
                    </span>
                  </span>
                  <span className='text-md text-white item-hover__text d-none d-lg-flex'>
                    Cart
                  </span>
                </Link>
              </div>
            </div>
        
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderTwo;
