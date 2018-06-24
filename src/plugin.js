import VueMicrobitWebUsb from './VueMicrobitWebUSB.vue'

const plugin = {
  install: Vue => {
    Vue.component(VueMicrobitWebUsb.name, VueMicrobitWebUsb)
  }
}

VueMicrobitWebUsb.install = plugin.install

export default VueMicrobitWebUsb
