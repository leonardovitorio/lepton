import { LoginCtrl } from "../controllers/LoginCtrl.js";
import { LoginModel } from "../models/LoginModel.js";
import { assert } from "../commom/assert.js";
import { Test } from "../commom/Test.js";
import { ModelView } from "../commom/ModelView.js";
import { ModelBindTest } from "../commom/ModelBindTest.js";

export class LoginTest extends Test {
    run() {
        this.loginCtrl = new LoginCtrl()
        this.onLoginSuccess('leonardo','123456')
        this.onLoginFail('leonardo','1234567')
    }
    onLoginSuccess(username, password) {
        this.loginCtrl.login = new ModelBindTest('login',new LoginModel(username, password))
        var view = this.loginCtrl.on_click();
        view.test(childView => {
            var result = false
            if (childView.constructor.name === "NavigateView") {
                result = true
            }
            assert(result, "onLoginSuccess", "onLoginFail");
        });
    }
    onLoginFail(username, password) {
        this.loginCtrl.login = new ModelBindTest('login',new LoginModel(username, password))
        var view = this.loginCtrl.on_click();
        view.test(childView => {
            var result = true
            if (childView.constructor.name === "NavigateView") {
                result = false
            }
            assert(result, "onLoginSuccess", "onLoginFail");
        });
    }
};