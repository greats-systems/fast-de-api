"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopTimerForUserDevice = exports.startTimerForUserDevice = exports.broadcastParcelDeliveryResolveToOrderOwner = exports.broadcastParcelDeliveryRequestToDriver = exports.sendToUserDevice = exports.getUserDeviceRoom = void 0;
const events_1 = require("./events");
var userTimers = {};
function getUserDeviceRoom(userId, deviceId) {
    return `user:${userId}-device:${deviceId}`;
}
exports.getUserDeviceRoom = getUserDeviceRoom;
function sendToUserDevice(server, userId, deviceId, event, payload) {
    console.log(`parcelDeliveryRequest to event ${event}`);
    server.to(getUserDeviceRoom(userId, deviceId)).emit(event, payload);
}
exports.sendToUserDevice = sendToUserDevice;
function broadcastParcelDeliveryRequestToDriver(server, userId, deviceId, parcelDeliveryRequest) {
    console.log(`parcelDeliveryRequest to Driver of device id ${deviceId}`);
    sendToUserDevice(server, userId, deviceId, 'parcelDeliveryRequest', parcelDeliveryRequest);
}
exports.broadcastParcelDeliveryRequestToDriver = broadcastParcelDeliveryRequestToDriver;
function broadcastParcelDeliveryResolveToOrderOwner(server, userId, deviceId, parcelDeliveryResolve) {
    console.log(`ParcelDelivery Resolve To Order to client of device id ${deviceId}`);
    sendToUserDevice(server, userId, deviceId, 'newOrder', parcelDeliveryResolve);
}
exports.broadcastParcelDeliveryResolveToOrderOwner = broadcastParcelDeliveryResolveToOrderOwner;
function startTimerForUserDevice(server, userId, deviceId, dur) {
    var counter = dur;
    var timer = setInterval(function () {
        console.log(`counting ${counter}`);
        sendToUserDevice(server, userId, deviceId, events_1.TimerEvents.tick.toString(), {
            timer: counter,
        });
        if (counter > 0) {
            counter--;
        }
        else {
            console.log(`user ${userId} has a timeout`);
        }
    }, 1000);
    userTimers[userId + deviceId] = timer;
}
exports.startTimerForUserDevice = startTimerForUserDevice;
function stopTimerForUserDevice(userId, deviceId) {
    clearInterval(userTimers[userId + deviceId]);
    delete userTimers[userId + deviceId];
}
exports.stopTimerForUserDevice = stopTimerForUserDevice;
//# sourceMappingURL=rooms.js.map