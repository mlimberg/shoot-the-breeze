import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';


import Application from '../lib/components/Application';
import Search from '../lib/components/Search';
import MessageContainer from '../lib/components/MessageContainer';
import Users from '../lib/components/Users';
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

describe('Search', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Search messages/>)
    assert.equal(wrapper.type(), 'div');
 });

  it('should have an input', () => {
    const wrapper = shallow(<Search messages/>)
    expect(wrapper.find('input')).to.have.length(1)
  })

  it('should have an input class of .searchInput', () => {
    const wrapper = shallow(<Search messages />)
    expect(wrapper.find('.searchInput')).to.have.length(1);
  })

  it('should have a button', () => {
    const wrapper = shallow(<Search messages />)
    expect(wrapper.find("button")).to.have.length(1);
  })

  it('should have an button class of .sortButton', () => {
    const wrapper = shallow(<Search messages />)
    expect(wrapper.find('.sortButton')).to.have.length(1);
  })
});

describe('MessageContainer', () => {

  it.skip('renders as a <div>', () => {
    const wrapper = shallow(<MessageContainer messages />)
    assert.equal(wrapper.type(), 'div');
  });

})

describe('Users', () => {

  it('renders as a <p>', () => {
    const wrapper = shallow(<Users />)
    assert.equal(wrapper.type(), 'p');
  });

})



describe('Input', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Input />)
    assert.equal(wrapper.type(), 'div');
  });

  it('should have an input', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.find("input")).to.have.length(1);
  })

  it('should have an input class of .messageInput', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.find('.messageInput')).to.have.length(1);
  })

  it('should have 2 buttons', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.find("button")).to.have.length(2);
  })

  it('should have an button class of .submitMsgBtn', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.find('.submitMsgBtn')).to.have.length(1);
  })

  it('should have an button class of .clearMsgBtn', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.find('.clearMsgBtn')).to.have.length(1);
  })


});
