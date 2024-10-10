const {Kafka} = require('kafkajs')

exports.kafka = new Kafka({
    clientId: "my-app",
    brokers: ["private-ip:9092"],
  });