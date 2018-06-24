// to enable to load <vue-microbit-webusb> format name this template as "Webusb" not "WebUSB"
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
      if(device) {
        console.log(device.serialNumber);
        // invoke ivent for serial number
        let event = new CustomEvent('microbit-connected', {'detail': {'serialNumber': device.serialNumber}});
        document.dispatchEvent(event);
      }
    }
  }
}
