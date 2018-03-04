import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Auth from '../src/modules/Auth';
import toJson from 'enzyme-to-json';
import raf from './tempPolyfills'

import LocalStorageMock from '../localStorage';

import HomePage from '../src/components/HomePage';
import Type from '../src/components/Type';
import Token from '../src/components/Token';

import lagers from '../src/beers/lagers';
import ales from '../src/beers/ales';
import specialty from '../src/beers/specialty';
import ambers from '../src/beers/ambers';

Enzyme.configure({adapter: new Adapter()});

// const wrapper = Enzyme.shallow(<HomePage />);

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;

// describe('stuff', () => {
//   it('renders...', () => {
//     expect(wrapper).to.have.length(1);
//   });
// });

describe('Home Page', () => {
    it('should render 4 <Type /> components', () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find(Nav)).to.have.length(1);
    });
});



// import React from 'react';
// import { configure, shallow } from 'enzyme';
// import { expect } from 'chai'
// import sinon from 'sinon';
// import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
//
// import HomePage from '../src/components/HomePage';
// import Type from '../src/components/Type';
// import Token from '../src/components/Token';
//
// configure({ adapter: new ReactSixteenAdapter() });
//
//
// describe('Home Page', () => {
//     it('should render 4 <Type /> components', () => {
//       const wrapper = shallow(<HomePage />);
//       expect(wrapper.find(Type)).to.have.length(4);
//     });
// });
//
//
// describe('<Type />', () => {
//     it('should render 12 <Token /> components', () => {
//       const wrapper = shallow(<Type />);
//       expect(wrapper.find(Token)).to.have.length(12);
//     });
//
//     // it('should render an `.icon-star`', () => {
//     //     const wrapper = shallow(<MyComponent />);
//     //     expect(wrapper.find('.icon-star')).to.have.length(1);
//     // });
//     //
//     // it('should render children when passed in', () => {
//     //     const wrapper = shallow((
//     //         <MyComponent>
//     //             <div className="unique" />
//     //         </MyComponent>
//     //         ));
//     //     expect(wrapper.contains(<div className="unique" />)).to.equal(true);
//     // });
//     //
//     // it('simulates click events', () => {
//     //     const onButtonClick = sinon.spy();
//     //     const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
//     //     wrapper.find('button').simulate('click');
//     //     expect(onButtonClick.calledOnce).to.equal(true);
//     // });
// });
