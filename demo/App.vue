<template>
  <div id="app" class="">

    <header role="header" class="site__header header">
    </header>

    <div class="app">
      <div class="grid__row content centered">
        <h2>CONNECT USB DEVICE</h2>
        <vue-microbit-webusb buttonLabel="CLICK ME" @on-usb-device-connected="onDeviceConnected"></vue-microbit-webusb>
      </div>
    </div>

    <div class="grid__row content centered">
      <p>Copyright © 2018 <a href="https://github.com/makitosan">makitosan</a>, All Rights Reserved.</p>
    </div>

  </div>
</template>

<script src="./app.js"></script>

<style lang="scss">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

small {
  display: block;
  color: #ddd;
  font-size: 16px;
}

.grid__row {
  *zoom: 1;
  margin: 0 auto;
  max-width: 92.308em;
}
.grid__row:before,
.grid__row:after {
  display: table;
  content: " ";
}
.grid__row:after {
  clear: both;
}
.centered {
  text-align: center;
}
.content {
  margin: 0 20px;
}

</style>
