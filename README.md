# ionic2-lock-screen

## ***Note***
There are some compatibility issues with the AngularJS version 5 or later. Kinda busy in work these days. I will try to fix it asap.Thank you for using this.

## Intro

A rewrote and a retouched version of [ionic-lock-screen](https://github.com/AlexDisler/ionic-lock-screen) [https://github.com/AlexDisler/ionic-lock-screen] for AngularJS 2 and Ionic 2. 

Credit to: [Alex Disler](https://github.com/AlexDisler)

## Features

- Supports [Touch ID](#touch-id-ios-only) on iOS using [cordova-plugin-touchid](https://github.com/leecrossley/cordova-plugin-touchid)

## Use

Import LockScreenComponent class in the component that you want to use the lock screen

```ts
import {LockScreenComponent} from "../ionic-lock-screen/lock-screen-component";
```

Please ensure that you have imported NavController and initialized it

```ts
import { NavController } from 'ionic-angular';
...
 constructor(public navCtrl: NavController){}
```

Load whenever you want to load

```ts
this.navCtrl.push(LockScreenComponent,{
      code:'1234',
      ACDelbuttons:true,
      passcodeLabel:'Please Enter Passcode',
      onCorrect:function(){
        console.log('Correct!');
      },
      onWrong:function(attemptNumber){
        console.log(attemptNumber + ' wrong passcode attempt(s)');
      }
    });
```
AC(All Clear) button and Del button is also available:
```ts
this.navCtrl.push(LockScreenComponent,{
      code:'1234',
      ACDelbuttons:true
});
```

## Touch ID (iOS only)

Install [cordova-plugin-touchid](https://github.com/leecrossley/cordova-plugin-touchid)

    $ cordova plugin add cordova-plugin-touchid --save

Set ```touchId:true```

```ts
this.navCtrl.push(LockScreenComponent,{
      code:'1234',
  touchId: true,
});
```
