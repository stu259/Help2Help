import { Injectable } from '@angular/core';

import { App } from '../app/app';
import { AlertCmp } from './alert-component';
import { AlertOptions, AlertInputOptions, AlertButton } from './alert-options';
import { isPresent } from '../../util/util';
import { NavOptions } from '../../navigation/nav-util';
import { ViewController } from '../../navigation/view-controller';


/**
 * @private
 */
export class Alert extends ViewController {
  private _app: App;

  constructor(app: App, opts: AlertOptions = {}) {
    opts.inputs = opts.inputs || [];
    opts.buttons = opts.buttons || [];
    opts.enableBackdropDismiss = isPresent(opts.enableBackdropDismiss) ? !!opts.enableBackdropDismiss : true;

    super(AlertCmp, opts, null);
    this._app = app;
    this.isOverlay = true;
  }

  /**
  * @private
  */
  getTransitionName(direction: string): string {
    let key = (direction === 'back' ? 'alertLeave' : 'alertEnter');
    return this._nav && this._nav.config.get(key);
  }

  /**
   * @param {string} title Alert title
   */
  setTitle(title: string): Alert {
    this.data.title = title;
    return this;
  }

  /**
   * @param {string} subTitle Alert subtitle
   */
  setSubTitle(subTitle: string): Alert {
    this.data.subTitle = subTitle;
    return this;
  }

  /**
   * @param {string} message  Alert message content
   */
  setMessage(message: string): Alert {
    this.data.message = message;
    return this;
  }

  /**
   * @param {object} input Alert input
   */
  addInput(input: AlertInputOptions): Alert {
    this.data.inputs.push(input);
    return this;
  }

  /**
   * @param {any} button Alert button
   */
  addButton(button: AlertButton|string): Alert {
    this.data.buttons.push(button);
    return this;
  }

  /**
   * @param {string} cssClass Set the CSS class names on the alert's outer wrapper.
   */
  setCssClass(cssClass: string): Alert {
    this.data.cssClass = cssClass;
    return this;
  }

  /**
   * @param {string} mode Set the mode of the alert (ios, md, wp).
   */
  setMode(mode: string) {
    this.data.mode = mode;
  }

  /**
   * Present the alert instance.
   *
   * @param {NavOptions} [opts={}] Nav options to go with this transition.
   * @returns {Promise} Returns a promise which is resolved when the transition has completed.
   */
  present(navOptions: NavOptions = {}): Promise<any> {
    navOptions.minClickBlockDuration = navOptions.minClickBlockDuration || 400;
    return this._app.present(this, navOptions);
  }

}


/**
 * @name AlertController
 * @description
 * An Alert is a dialog that presents users with information or collects
 * information from the user using inputs. An alert appears on top
 * of the app's content, and must be manually dismissed by the user before
 * they can resume interaction with the app. It can also optionally have a
 * `title`, `subTitle` and `message`.
 *
 * You can pass all of the alert's options in the first argument of
 * the create method: `create(opts)`. Otherwise the alert's instance
 * has methods to add options, such as `setTitle()` or `addButton()`.
 *
 *
 * ### Alert Buttons
 *
 * In the array of `buttons`, each button includes properties for its `text`,
 * and optionally a `handler`. If a handler returns `false` then the alert
 * will not automatically be dismissed when the button is clicked. All
 * buttons will show up in the order they have been added to the `buttons`
 * array, from left to right. Note: The right most button (the last one in
 * the array) is the main button.
 *
 * Optionally, a `role` property can be added to a button, such as `cancel`.
 * If a `cancel` role is on one of the buttons, then if the alert is
 * dismissed by tapping the backdrop, then it will fire the handler from
 * the button with a cancel role.
 *
 *
 * ### Alert Inputs
 *
 * Alerts can also include several different inputs whose data can be passed
 * back to the app. Inputs can be used as a simple way to prompt users for
 * information. Radios, checkboxes and text inputs are all accepted, but they
 * cannot be mixed. For example, an alert could have all radio button inputs,
 * or all checkbox inputs, but the same alert cannot mix radio and checkbox
 * inputs. Do note however, different types of "text"" inputs can be mixed,
 * such as `url`, `email`, `text`, etc. If you require a complex form UI
 * which doesn't fit within the guidelines of an alert then we recommend
 * building the form within a modal instead.
 *
 *
 * @usage
 * ```ts
 *
 * import { AlertController } from 'ionic-angular';
 *
 * constructor(private alertCtrl: AlertController) {
 *
 * }
 *
 * presentAlert() {
 *   let alert = this.alertCtrl.create({
 *     title: 'Low battery',
 *     subTitle: '10% of battery remaining',
 *     buttons: ['Dismiss']
 *   });
 *   alert.present();
 * }
 *
 * presentConfirm() {
 *   let alert = this.alertCtrl.create({
 *     title: 'Confirm purchase',
 *     message: 'Do you want to buy this book?',
 *     buttons: [
 *       {
 *         text: 'Cancel',
 *         role: 'cancel',
 *         handler: () => {
 *           console.log('Cancel clicked');
 *         }
 *       },
 *       {
 *         text: 'Buy',
 *         handler: () => {
 *           console.log('Buy clicked');
 *         }
 *       }
 *     ]
 *   });
 *   alert.present();
 * }
 *
 * presentPrompt() {
 *   let alert = this.alertCtrl.create({
 *     title: 'Login',
 *     inputs: [
 *       {
 *         name: 'username',
 *         placeholder: 'Username'
 *       },
 *       {
 *         name: 'password',
 *         placeholder: 'Password',
 *         type: 'password'
 *       }
 *     ],
 *     buttons: [
 *       {
 *         text: 'Cancel',
 *         role: 'cancel',
 *         handler: data => {
 *           console.log('Cancel clicked');
 *         }
 *       },
 *       {
 *         text: 'Login',
 *         handler: data => {
 *           if (User.isValid(data.username, data.password)) {
 *             // logged in!
 *           } else {
 *             // invalid login
 *             return false;
 *           }
 *         }
 *       }
 *     ]
 *   });
 *   alert.present();
 * }
 * ```
 * @advanced
 *
 *
 *  Alert options
 *
 *  | Property              | Type      | Description                                                               |
 *  |-----------------------|-----------|---------------------------------------------------------------------------|
 *  | title                 | `string`  | The title for the alert.                                                  |
 *  | subTitle              | `string`  | The subtitle for the alert.                                               |
 *  | message               | `string`  | The message for the alert.                                                |
 *  | cssClass              | `string`  | Additional classes for custom styles, separated by spaces.                |
 *  | mode                  | `string`  | Set alert mode (ios, md, wp).                                             |
 *  | inputs                | `array`   | An array of inputs for the alert. See input options.                      |
 *  | buttons               | `array`   | An array of buttons for the alert. See buttons options.                   |
 *  | enableBackdropDismiss | `boolean` | Whether the alert should be dismissed by tapping the backdrop.            |
 *
 *
 *  Input options
 *
 *  | Property    | Type      | Description                                                     |
 *  |-------------|-----------|-----------------------------------------------------------------|
 *  | type        | `string`  | The type the input should be: text, tel, number, etc.           |
 *  | name        | `string`  | The name for the input.                                         |
 *  | placeholder | `string`  | The input's placeholder (for textual/numeric inputs)            |
 *  | value       | `string`  | The input's value.                                              |
 *  | label       | `string`  | The input's label (only for radio/checkbox inputs)              |
 *  | checked     | `boolean` | Whether or not the input is checked.                            |
 *  | id          | `string`  | The input's id.                                                 |
 *  | min         | `string | number`  | The input's minimum authorized value (string only for date inputs, number
 *  only for number inputs)
 *  |
 *  | max         | `string | number`  | The input's maximum authorized value (string only for date inputs, number
 *  only for number inputs)
 *  |
 *
 *  Button options
 *
 *  | Property | Type     | Description                                                     |
 *  |----------|----------|-----------------------------------------------------------------|
 *  | text     | `string` | The buttons displayed text.                                     |
 *  | handler  | `any`    | Emitted when the button is pressed.                             |
 *  | cssClass | `string` | An additional CSS class for the button.                         |
 *  | role     | `string` | The buttons role, null or `cancel`.                             |
 *
 * ### Dismissing And Async Navigation
 *
 * After an alert has been dismissed, the app may need to also transition
 * to another page depending on the handler's logic. However, because multiple
 * transitions were fired at roughly the same time, it's difficult for the
 * nav controller to cleanly animate multiple transitions that may
 * have been kicked off asynchronously. This is further described in the
 * [`Nav Transition Promises`](../../nav/NavController) section. For alerts,
 * this means it's best to wait for the alert to finish its transition
 * out before starting a new transition on the same nav controller.
 *
 * In the example below, after the alert button has been clicked, its handler
 * waits on async operation to complete, *then* it uses `pop` to navigate
 * back a page in the same stack. The potential problem is that the async operation
 * may have been completed before the alert has even finished its transition
 * out. In this case, it's best to ensure the alert has finished its transition
 * out first, *then* start the next transition.
 *
 * ```ts
 * let alert = this.alertCtrl.create({
 *   title: 'Hello',
 *   buttons: [{
 *     text: 'Ok',
 *     handler: () => {
 *       // user has clicked the alert button
 *       // begin the alert's dismiss transition
 *       let navTransition = alert.dismiss();
 *
 *       // start some async method
 *       someAsyncOperation().then(() => {
 *         // once the async operation has completed
 *         // then run the next nav transition after the
 *         // first transition has finished animating out
 *
 *         navTransition.then(() => {
 *           this.nav.pop();
 *         });
 *       });
 *       return false;
 *     }
 *   }]
 * });
 *
 * alert.present();
 * ```
 *
 * It's important to note that the handler returns `false`. A feature of
 * button handlers is that they automatically dismiss the alert when their button
 * was clicked, however, we'll need more control regarding the transition. Because
 * the handler returns `false`, then the alert does not automatically dismiss
 * itself. Instead, you now have complete control of when the alert has finished
 * transitioning, and the ability to wait for the alert to finish transitioning
 * out before starting a new transition.
 *
 *
 * @demo /docs/v2/demos/src/alert/
 */
@Injectable()
export class AlertController {

  constructor(private _app: App) {}
  /**
   * Display an alert with a title, inputs, and buttons
   * @param {AlertOptions} opts Alert. See the table below
   */
  create(opts: AlertOptions = {}): Alert {
    return new Alert(this._app, opts);
  }

}