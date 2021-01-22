const iot = require('alibabacloud-iot-device-sdk');

const device3 = iot.device({
  productKey: "a19rQFum3fi", //将<productKey>修改为实际产品的ProductKey
  deviceName: "shidu",//将<deviceName>修改为实际设备的DeviceName
  deviceSecret: "5910f38724e2eea5816846513c332871",//将<deviceSecret>修改为实际设备的DeviceSecret
});



//监听connect事件
device3.on('connect', () => {
  //将<productKey> <deviceName>修改为实际值
  device3.subscribe('/a19rQFum3fi/shidu/user/get');
  device3.publish('/a19rQFum3fi/shidu/user/update', 'hello world!');
});

//监听message事件
device3.on('message', (topic, payload) => {
  console.log(topic, payload.toString());
});

module.exports = {
  device3: device3,
};