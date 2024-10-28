
import Utils from "./utils";

import { EventEmitter } from 'fbemitter';
import ErrorMessageFormatter from '../error-message.js/error-messages';
import conf from "../config/config"
import { jwtDecode } from "jwt-decode";



const emitter = new EventEmitter();

class Api {
  constructor() {
    this.showServerError = Utils.debounce((message) => {
      emitter.emit("toast", {
        type: "Error",
        from: "Api",
        message: message || "Error: ",
        duration: 10000,
      });
    }, 400);
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  hasValidToken() {
    var token = this.getToken();
    if (!token) return false;

    return !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    if (!token) return true;
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp < currentTime;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  };

  callApi(method, options) {
    let completeUrl =
      options && options.completeUrl
        ? options.completeUrl
        : conf["realhome"] + options.uri;
    let headers = {
      "Content-Type":
        options && options.contentType
          ? options.contentType
          : "application/json",
      Accept:
        options && options.acceptType ? options.acceptType : "application/json",
    };

    const token = this.getToken();
    if (token) {
      headers["Authorization"] = "Bearer " + token;
    }

    completeUrl = completeUrl.replace(/[&]{0,1}[a-zA-Z0-9]*=undefined/g, "");

    if (options.contentType === false) {
      delete headers["Content-Type"];
    }

    if (options.acceptType === false) {
      delete headers["Accept"];
    }

    let config = {
      method: method,
      headers: headers,
    };

    if (options.signal) {
      config = {
        ...config,
        signal: options.signal,
      };
    }

    if (options.data) {
      if (method !== "get") {
        if (
          options.raw ||
          (options.contentType && options.contentType !== "application/json")
        ) {
          config.body = options.data;
        } else {
          config.body = JSON.stringify(options.data);
        }
      } else {
        let urlParams = new URLSearchParams(Object.entries(options.data));
        completeUrl += "?" + urlParams;
      }
    }

    return new Promise((resolve, reject) => {
      fetch(completeUrl, config)
        .then((response) => {
          if (response.ok) {
            if (response.status === 204) {
              resolve();
            } else if (
              response.headers
                .get("Content-Type")
                .indexOf("application/json") !== -1
            ) {
              const responseClone = response.clone();
              resolve(responseClone.json());
            } else {
              response
                .blob()
                .then((blob) => {
                  resolve(blob);
                })
                .catch((error) => {
                  let errorMessage =
                    "Request failed! Details: " +
                    ErrorMessageFormatter.format(error);
                  this.showServerError(errorMessage);
                  reject(error);
                });
            }
          } else {
            if (response.status === 401) {
              localStorage.clear();
              window.location.href = "/Login";
            }
            if (response.status === 304) {
              resolve();
            } else {
              if (response.status === 404) {
                let errorMessage =
                  "Endpoint not found! Please contact dev team.";
                this.showServerError(errorMessage);
                reject(errorMessage);
              } else {
                response
                  .json()
                  .then((error) => {
                    let errorMessage =
                      "Request failed! Details: " +
                      ErrorMessageFormatter.format(error);
                    this.showServerError(errorMessage);
                    reject(error);
                  })
                  .catch((error) => {
                    let errorMessage =
                      "Request failed! Details: " +
                      ErrorMessageFormatter.format(error);
                    this.showServerError(errorMessage);
                    reject(error);
                  });
              }
            }
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default new Api();
