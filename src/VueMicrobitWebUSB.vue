<template>
  <div :class="rootClass">
    <button @click="connectUsbDevice" :class="rootClass + '__button'">{{buttonLabel}}</button>
  </div>
</template>

<script>
export default {
  name: 'vue-microbit-webusb',
  props: {
    vendorId: {
      type: Number,
    default: 0x0d28
    },
    productId: {
      type: Number,
      default: 0x0204
    },
    eventName: {
      type: String,
      default: 'microbit-connected'
    },
    buttonLabel: {
      type: String,
      default: 'CONNECT micro:bit'
    },
    rootClass: {
      type: String,
      default: 'vue-microbit-webusb'
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    connectUsbDevice() {
      console.log(this.vendorId);
      console.log(this.productId);
      navigator.usb.requestDevice({ 'filters': [
          { 'vendorId': this.vendorId, 'productId': this.productId }
        ]
      }).then(device => {
        console.log(device.vendorId);
        console.log(device.productId);
        console.log(device.serialNumber);
        // invoke ivent for serial number
        let event = new CustomEvent(this.eventName, {'detail': {'serialNumber': device.serialNumber}});
        document.dispatchEvent(event);
        // return device.open;
        this.$emit('on-usb-device-connected', device);
      }).catch(error => {
        this.$emit('on-usb-device-connected', undefined);
        console.log(error);
      });
    }
  }
}
</script>

<style src="./vue-microbit-webusb.css"></style>
