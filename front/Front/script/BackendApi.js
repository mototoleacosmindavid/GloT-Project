"use strict";
import { FetchHttpGetJson, FetchHttpGetFile, FetchHttpPostJson } from "./Fetcher.js";

export class BackendApi {
    async fetchCountries() {
        try {
            const response = await FetchHttpGetJson("/api/attacks/countries");
            return response.data.sort();
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
    async fetchAttackTypes() {
        try {
            const response = await FetchHttpGetJson("/api/attacks/attacktypes");
            return response.data.sort();
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
    async fetchTargetTypes() {
        try {
            const response = await FetchHttpGetJson("/api/attacks/targettypes");
            return response.data.sort();
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
    async fetchYears() {
        try {
            const response = await FetchHttpGetJson("/api/attacks/years");
            return response.data.sort();
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
    async fetchGroupNames() {
        try {
            const response = await FetchHttpGetJson("/api/attacks/groupnames");
            return response.data.sort();
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
    async fetchAttacks(filters) {
        try {
            const baseUrl = "/api/attacks";
            const queryString = buildAttacksQueryString(filters);
            const url = `${baseUrl}?${queryString}`;
            const response = await FetchHttpGetJson(url);
            return response.data;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
    async fetchAttacksCount(filters) {
        try {
            const baseUrl = "/api/attacks/count";
            const queryString = buildAttacksQueryString(filters);
            const url = `${baseUrl}?${queryString}`;
            const response = await FetchHttpGetJson(url);
            return response.count;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
    downloadAttacksHavingFileFormat(filters, format) {
        filters.format = format;
        const baseUrl = "/api/attacks";
        const queryString = buildAttacksQueryString(filters);
        const url = `${baseUrl}?${queryString}`;
        window.open(url, "_blank");
    }
    async LoginUser(username, password) {
        try {
            const req = { username, password };
            const response = await FetchHttpPostJson("/api/users/login", req);
            return response;
        }
        catch (err) {
            console.log(err);
            return { error: err };
        }
    }
    async RegisterUser(username, password, rights) {
        try {
            const req = { username, password, rights };
            const response = await FetchHttpPostJson("/api/users/register", req);
            return response;
        }
        catch (err) {
            console.log(err);
            return { error: err };
        }
    }
    async LogoutUser() {
        try {
            const res = await FetchHttpPostJson("/api/users/logout", req);
            return res;
        }
        catch (err) {
            console.log(err);
            return { error: err };
        }
    }
}

function buildAttacksQueryString(filters) {
    const res = {};
    for (const [key, value] of Object.entries(filters)) {
        if (value) {
            res[key] = value;
        }
    }
    let params = new URLSearchParams(res);
    return params.toString();
}
