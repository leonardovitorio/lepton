import { LoginCtrl } from "../controllers/LoginCtrl.js";
import { ModelTest } from "../commom/ModelTest.js";
import { LoginModel } from "../models/LoginModel.js";
import { assert } from "../commom/assert.js";

export var onLoginFail = {
    name: "onLoginFail",
    run: () => {
        var loginCtrl = new LoginCtrl();
        loginCtrl.login = new ModelTest(new LoginModel("leonardo", "1234567"));
        var view = loginCtrl.on_click();
        view.test(() => {
            if (view.constructor.name === "NavigateView") {
                assert(false, "onLoginFail");
            }
            else {
                assert(true, "onLoginFail");
            }
        });
    }
};