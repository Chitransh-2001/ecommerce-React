import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { FilterIcon, ViewGridIcon } from '@heroicons/react/solid';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard';
import { kurtaPage } from '../DATA/Kurta';
import Header from '../header/Header';
import Footer from '../Footer/Footer';

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];

const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
];

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
];

function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div>
    <Header/>
    <div className="container">
    
      <div className="row">
        <div className="col-lg-3 d-none d-lg-block">
          <h2>Categories</h2>
          <ul className="list-group">
            {subCategories.map((category, index) => (
              <li key={index} className="list-group-item">
                <a href={category.href}>{category.name}</a>
              </li>
            ))}
          </ul>
          {filters.map((section, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <h3>
                    <Disclosure.Button className="btn btn-link">{section.name}</Disclosure.Button>
                  </h3>
                  <Disclosure.Panel>
                    <div className="list-group">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="list-group-item">
                          <input
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            defaultChecked={option.checked}
                            className="form-check-input"
                          />
                          <label htmlFor={`filter-${section.id}-${optionIdx}`} className="form-check-label">{option.label}</label>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-baseline border-bottom pb-3">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
            <div className="d-flex align-items-center">
              <div className="dropdown mr-3">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="sortDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sort
                </button>
                <div className="dropdown-menu" aria-labelledby="sortDropdown">
                  {sortOptions.map((option, index) => (
                    <a key={index} className="dropdown-item" href={option.href}>{option.name}</a>
                  ))}
                </div>
              </div>
              <button className="btn btn-outline-secondary mr-3">
                <ViewGridIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button className="btn btn-outline-secondary" onClick={() => setMobileFiltersOpen(true)}>
                <FilterIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          {/* Product grid */}
          <div className="row">
            <div className="col-lg-4">
              <div className='flex flex-wrap justify-center bg-white py-5'>
              {kurtaPage.slice(0, 4).map((item, index) => (
            <ProductCard key={index} product={item} />
            ))}
                
              </div>
            </div>
            <div className="col-lg-4">
            <div className='flex flex-wrap justify-center bg-white py-5'>
            {kurtaPage.slice(4, 8).map((item, index) => (
            <ProductCard key={index} product={item} />
            ))}
              </div>
            </div>
            <div className="col-lg-4">
            <div className='flex flex-wrap justify-center bg-white py-5'>
            {kurtaPage.slice(9, 12).map((item, index) => (
            <ProductCard key={index} product={item} />
            ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={setMobileFiltersOpen}>
          <div className="min-h-screen px-4 text-center">
            <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">Filters</Dialog.Title>
            <div className="mt-2">
              {filters.map((section, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="btn btn-link">{section.name}</Disclosure.Button>
                      </h3>
                      <Disclosure.Panel>
                        <div className="list-group">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="list-group-item">
                              <input
                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="form-check-input"
                              />
                              <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="form-check-label">{option.label}</label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
            <button className="btn btn-secondary mt-4" onClick={() => setMobileFiltersOpen(false)}>Close</button>
          </div>
        </Dialog>
      </Transition.Root>
      
    </div>
    <Footer/>
    </div>
  );
}

export default Product;
