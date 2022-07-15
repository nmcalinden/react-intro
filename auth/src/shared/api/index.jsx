import { axios } from "../../lib/axios";

function get({ url }) {
    axios
        .get(url)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return Promise.reject(error);
        });
}

function post({ url, body }) {
    axios
        .post(url, body)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return Promise.reject(error);
        });
}

function put({ url, body }) {
    axios
        .put(url, body)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return Promise.reject(error);
        });
}

function del({ url }) {
    axios
        .delete(url)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return Promise.reject(error);
        });
}

export { get, post, put, del };
