const { kafka } = require('./client');

async function init() {
    const admin = kafka.admin();
    console.log("admin connecting");
    admin.connect();
    console.log("admin connection success")

    console.log("creating topic [kt]")
    const topics = await admin.listTopics();
    if (!topics.includes("knowledgeTransfer")) {
        
        await admin.createTopics({
            topics: [
                { topic: "knowledgeTransfer", numPartitions: 2 }
            ]
        });
    }else{
        console.log("Topic already exists")
    }
    console.log("topic [knowledgeTransfer] created success");
    console.log("disconnecting admin");
    await admin.disconnect();
}

init()