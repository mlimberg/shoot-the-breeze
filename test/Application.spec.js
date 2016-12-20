import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';


import Application from '../lib/components/Application';
import Search from '../lib/components/Search';
import Input from '../lib/components/Input';

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

  it('has a className property of application', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.hasClass('application'));
  })

  it('has a state of messages equal to a blank array', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.state().messages).to.deep.equal([])
  })

  it('has a state of filteredMessages equal to null', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.state().filteredMessages).to.equal(null)
  })
  it('has a state of filteredUsers to null', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.state().filteredUsers).to.equal(null)
  })

  it('has a state of filteredInput to null', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.state().filteredInput).to.equal(null)
  })

  it('has a state of user equal to null', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.state().user).to.equal(null)
  })
  it('has a state of allUsers to null', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.state().allUsers).to.equal(null)
  })
  it('has a state of sortMsg to true', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.state().sortMsg).to.equal(true)
  })
  it('has a state of userSelected to null', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.state().userSelected).to.equal(null)
  })


});

describe('Input', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Input />)
    assert.equal(wrapper.type(), 'div');
  });


});
