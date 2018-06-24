/* eslint-env jest */
import {shallowMount} from '@vue/test-utils'
import VueMicrobitWebUSB from '@/VueMicrobitWebUSB.vue'

describe('VueMicrobitWebUSB.vue', () => {
  it('render button label', () => {
    const wrapper = shallowMount(VueMicrobitWebUSB, {propsData: {buttonLabel: 'CLICK ME'}})
    expect(wrapper.find('.vue-microbit-webusb__button').text()).toEqual('CLICK ME')
  })
})

