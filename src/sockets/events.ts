export enum TimerEvents {
    tick = 'tick',
    timerStart = 'timerStart',
    timerStop = 'timerStop',
    parcelDeliveryRequest = 'parcelDeliveryRequest',
    parcelDeliveryAccepted = 'parcelDeliveryAccepted',
    parcelDeliveryRejected = 'parcelDeliveryRejected',
    newOrder = 'newOrder',
    updateOrderDeliveryStatus = 'updateOrderDeliveryStatus',
    setDriverOnline = 'setDriverOnline',
    setDriverOffline = 'setDriverOffline',
    setSOS = 'setSOS',
  }