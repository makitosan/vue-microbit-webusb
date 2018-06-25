/* eslint-env jest */
import {shallowMount} from '@vue/test-utils'
import VueMicrobitWebUSB from '@/VueMicrobitWebUSB.vue'
import flushPromises from 'flush-promises'

describe('VueMicrobitWebUSB.vue', () => {
  it('render button label', () => {
    const wrapper = shallowMount(VueMicrobitWebUSB, {propsData: {buttonLabel: 'CLICK ME'}})
    expect(wrapper.find('.vue-microbit-webusb__button').text()).toEqual('CLICK ME')
  })

  it('click button and invoke navigator.usb.requestDevice is called with default parameters', (done) => {
    // mock usb
    const usb = {
      requestDevice: () => Promise.resolve({serialNumber: 'my_serial_number'})
    };
    navigator.usb = usb;
    // run test
    const wrapper = shallowMount(VueMicrobitWebUSB, {propsData: {}})
    const spy = jest.spyOn(navigator.usb, 'requestDevice')
    const vmspy = jest.spyOn(wrapper.vm, '$emit')

    wrapper.find('.vue-microbit-webusb__button').trigger('click')
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith({
      'filters': [
        {'vendorId': 0x0d28, 'productId': 0x0204}
      ]
    })

    wrapper.vm.$nextTick(() => {
      expect(vmspy).toHaveBeenCalled()
      expect(vmspy).toBeCalledWith('on-usb-device-connected', {serialNumber: 'my_serial_number'})
      done()
    })
  })

  it('click button and invoke navigator.usb.requestDevice is called with props value parameters', (done) => {
    // mock usb
    const usb = {
      requestDevice: () => Promise.resolve({serialNumber: 'my_serial_number'})
    };
    navigator.usb = usb;
    // run test
    const wrapper = shallowMount(VueMicrobitWebUSB, {propsData: {vendorId: 0x1111, productId: 0x2222}})
    const spy = jest.spyOn(navigator.usb, 'requestDevice')
    const vmspy = jest.spyOn(wrapper.vm, '$emit')
    wrapper.find('.vue-microbit-webusb__button').trigger('click')
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith({
      'filters': [
        {'vendorId': 0x1111, 'productId': 0x2222}
      ]
    })

    wrapper.vm.$nextTick(() => {
      expect(vmspy).toHaveBeenCalled()
      expect(vmspy).toBeCalledWith('on-usb-device-connected', {serialNumber: 'my_serial_number'})
      done()
    })

  })

  it('click button and error handle', async() => {
    // mock usb
    const usb = {
      requestDevice: () => Promise.reject({message: 'error message'})
    };
    navigator.usb = usb;
    // run test
    const wrapper = shallowMount(VueMicrobitWebUSB, {propsData: {}})
    const vmspy = jest.spyOn(wrapper.vm, '$emit')

    wrapper.find('.vue-microbit-webusb__button').trigger('click')
    // use flushPromises() to execute codes inside of catch, read the following article for detail
    // https://vue-test-utils.vuejs.org/ja/guides/testing-async-components.html
    await flushPromises()
    expect(vmspy).toHaveBeenCalled()
    expect(vmspy).toBeCalledWith('on-usb-device-connected', undefined)
  })

  it('render with props rootClass', () => {
    const wrapper = shallowMount(VueMicrobitWebUSB, {propsData: {rootClass: 'a'}})
    expect(wrapper.find('.a__button').text()).toEqual('CONNECT micro:bit')
    expect(wrapper.contains('.a')).toBe(true)
  })

}) // describe



