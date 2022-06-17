"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactList = void 0;
const contact_details_1 = __importDefault(require("../Models/contact-details"));
const Util_1 = require("../Util");
function DisplayContactList(req, res, next) {
    contact_details_1.default.find(function (err, contactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contactsCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayContactList = DisplayContactList;
//# sourceMappingURL=conatct-list.js.map