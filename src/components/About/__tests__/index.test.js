import React from "react";
import {render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import About from "..";

afterEach(cleanup);

describe('About compoenet', () => {
    //redner about test
    

    //First Test
    it('renders', ()=>{
        render(<About />);
    })

    // Second Test
    it('matches snapshot Dom node structure', ()=>{
        //  About
        const {asFragment}= render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })

});


