import VueMicrobitWebusb from 'src/VueMicrobitWebUSB.vue'

export default {
  name: 'app',
  components: {
    VueMicrobitWebusb
  },
  data() {
    return {
    }
  },
  methods: {
    onDeviceConnected: function (device) {
      device && console.log(device.serialNumber)
    }
  }
}
