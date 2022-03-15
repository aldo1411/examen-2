const mongoose = require('mongoose');
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const Person = require('../models/person');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    sendWishes()
});

const connectWhatsapp = () =>{
    client.initialize();
}

const sendWishes = async () =>{
    const persons = await Person.find({});
    const date = new Date()

    persons.forEach(person =>{
        if(person.birthday.getDate() === date.getDate() && person.birthday.getMonth() === date.getMonth()){
            console.log("entré")
            client.sendMessage(`521${person.phoneNo}@c.us`, 'FEliz cumple').catch(err => console.error);
        }
    })
}

module.exports = {
    connectWhatsapp
}