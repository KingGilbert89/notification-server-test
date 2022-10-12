const webpush = require('web-push');

const publicKey = 'BOQo2dBUgQoO77jpQkQ600JZrgVxIiVWzmmdVytvwuUqBkmx9L5mITnFglM9W3dhYo8rxkYourjFFIcZtZ5iJCw';
const privateKey = 'gKBaVaX_io6exR8SRWs294R5VYyKJxMseImSCDxwRu8';

const sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/ffQVYUV56eA:APA91bHX3m5suhFJegyeMlHBrwLHjQiX8EK3vB2J48QUY7X9FwQWbiZlBer_z-OyGXviJAwA9BkNSCDtjEVgvkisgp3JfIMCxG5lLLSCa5Xz_9y0j1AFTejzAildO8lm4o_GG_Lgnjxc",
    expirationTime: null,
    keys: {
        p256dh: "BOLuKb8V7-TMd3FxzaneDhWBlr4jlikGNtE7DdhyGBdpBUiaYaaRqr3csz8JvXbd-s3I18MY7tkKIqcUs8ZYiyw",
        auth: "RkheH3F_0O-4XGiLgeS-ag"
    }
}

webpush.setVapidDetails('mailto:example@yourdomain.org', publicKey, privateKey);

/**
 * this props are availible:
 *  actions - NotificationAction[]
 *  badge - USVString
 *  body - DOMString
 *  data - any
 *  dir - "auto"|"ltr"|"rtl"
 *  icon - USVString
 *  image - USVString
 *  lang - DOMString
 *  renotify - boolean
 *  requireInteraction - boolean
 *  silent - boolean
 *  tag - DOMString
 *  timestamp - DOMTimeStamp
 *  title - DOMString
 *  vibrate - number[]
 */
const payload = {
    notification: {
        data: {
            url: "https://www.google.de"
        },
        icon: "https://melibo.de/wp-content/uploads/2021/06/melibo_icon.png",
        title: "Test",
        vibrate: [100, 50, 100]
    }
};

webpush.sendNotification(sub, JSON.stringify(payload));