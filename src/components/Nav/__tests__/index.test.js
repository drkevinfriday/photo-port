import React from "react";
import {render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Nav from "..";

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();
  const mockContactSelected = jest.fn();
  const mockSetContactSelected = jest.fn();
afterEach(cleanup);


describe('Nav Component', ()=>{
    //  redner Nav test

    it('renders', ()=>{
        // baseline test
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockCurrentCategory}
            currentCategory={mockSetCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}/>)       
    })
    //  snapshot test
    it('matches snapshot', ()=> {
        const{ asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected} />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('emoji is visible', ()=> {
    it('inserts emoji into h2', ()=> {
        // arrange
        const {getByLabelText} = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected} />)
        expect(getByLabelText('camera')).toHaveTextContent('📸');
        // assert
    })


})

describe('links are visble',()=> {
    it('the links work and are visible', ()=>{
        const {getByTestId} = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected} />)

        // arrange
        expect(getByTestId('link')).toHaveTextContent('Oh Snap')
        expect(getByTestId('about')).toHaveTextContent('About')
        // assert


})
})
