"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const conatct_list_1 = require("../Controllers/conatct-list");
router.get('/contact-list', Util_1.AuthGuard, conatct_list_1.DisplayContactList);
exports.default = router;
//# sourceMappingURL=conatct-list.js.map