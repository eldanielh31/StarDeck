// api.js

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/',
});

export const getCarta = async () => {
    try {
        const response = await api.get('/carta');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getDeck = async () => {
    try {
        const response = await api.get('/deck');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const createCarta = async (newCarta) => {
    try {
        const response = await api.post('/carta', newCarta);
        return response.data;
    } catch (error) {
        // console.log(error);
    }
};

export const createDeck = async (newDeck) => {
    try {
        const response = await api.post('/deck', newDeck);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateData = async (id, updatedData) => {
    try {
        const response = await api.put(`/data/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteData = async (id) => {
    try {
        const response = await api.delete(`/data/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
