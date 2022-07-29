import React from "react";
import {render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Nav from "..";

afterEach(cleanup);


describe('Nav Component', ()=>{
    //  redner Nav test

    it('renders', ()=>{
        // baseline test
        render(<Nav />)       
    })
    //  snapshot test
    it('matches snapshot', ()=> {
        const{ asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('emoji is visible', ()=> {
    it('inserts emoji into h2', ()=> {
        // arrange
        const {getByLabelText} = render(<Nav />)
        expect(getByLabelText('camera')).toHaveTextContent('📸');
        // assert
    })


})

describe('links are visble',()=> {
    it('the links work and are visible', ()=>{
        const {getByTestId} = render(<Nav />)

        // arrange
        expect(getByTestId('link')).toHaveTextContent('Oh Snap')
        expect(getByTestId('about')).toHaveTextContent('About')
        // assert


})
})
