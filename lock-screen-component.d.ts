/**
 * [Auto Generated] Created by :Carson. Chen
 */
import { OnInit } from "@angular/core";
import { Events, NavParams, NavController } from "ionic-angular";
export declare class LockScreenComponent implements OnInit {
    events: Events;
    private navCtrl;
    private navParams;
    _showLockScreen: boolean;
    ACDelbuttons: boolean;
    passcodeWrong: boolean;
    touchId: boolean;
    passcodeAttempts: number;
    enteredPasscode: string;
    passcode: string;
    passcodeLabel: string;
    touchLabel: string;
    onCorrect: any;
    onWrong: any;
    selected: any;
    constructor(events: Events, navCtrl: NavController, navParams: NavParams);
    ngOnInit(): void;
    allClear(): void;
    remove(): void;
    digit(digit: any): void;
}
