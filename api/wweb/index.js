const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const { parseMessage } = require("./message");

function initClient() {
  {
    const client = new Client({
      authStrategy: new LocalAuth(),
      puppeteer: {},
    });

    client.initialize();

    client.on("loading_screen", (percent, message) => {
      console.log("LOADING SCREEN", percent, message);
    });

    client.on("qr", (qr) => {
      qrcode.generate(qr, { small: true });
    });

    client.on("ready", () => {
      console.log("Client is ready!");
    });

    client.on("authenticated", () => {
      console.log("AUTHENTICATED");
    });

    client.on("auth_failure", (msg) => {
      // Fired if session restore was unsuccessful
      console.error("AUTHENTICATION FAILURE", msg);
    });

    client.on("message", async (msg) => {
      return await parseMessage(msg);
    });

    client.on("message_create", async (msg) => {
      // Fired on all message creations, including your own
      return await parseMessage(msg);
    });
  }
}

exports.initClient = initClient;
