"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalConstants = void 0;
class GlobalConstants {
}
exports.GlobalConstants = GlobalConstants;
//message
GlobalConstants.genericError = "Something went wrong. Please try again later...";
GlobalConstants.unauthorized = "You are not an authorized user.";
GlobalConstants.productExistError = "Product already exists";
GlobalConstants.productAdded = "Product added successfully";
//Regex
GlobalConstants.nameRegex = "[a-zA-Z0-9 ]*";
GlobalConstants.emailRegex = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
GlobalConstants.phoneNumberRegex = "^[e0-9]{10,10}$";
//variable
GlobalConstants.error = "error";
