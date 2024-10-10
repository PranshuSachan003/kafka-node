const { kafka } = require('./client')
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
    const producer = kafka.producer();
    console.log("connecting producer");

    await producer.connect()
    console.log("producer connected successfully")

    rl.setPrompt('> ')
    rl.prompt()

    rl.on('line', async function (line) {
        const[className, teacherName] = line.split(' ')
        await producer.send({
            topic: "knowledgeTransfer",
            messages: [
                {
                    partition: className.toLocaleLowerCase() === 'zero' ? 0:1,
                    key: "math",
                    value: JSON.stringify({ name: className, teacherName })
                }
            ]
        })
    }).on('close', async () => {await producer.disconnect();})
}

init();