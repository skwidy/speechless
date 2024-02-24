const { transcribeFile } = require("./transcript");

async function parseMessage(msg) {
  if (msg.fromMe && msg.body) {
    console.log("Message from me 👇");
  }

  console.log("Message received:", msg.body);

  if (msg.hasMedia) {
    //TODO: exclude audio transcription from "me" since it's useless except from local development
    if (msg._data.mimetype && msg._data.mimetype.includes("audio")) {
      console.log("Message mimetype:", msg._data.mimetype);
      /**
       * downloadMedia: Promise containing MessageMedia (https://docs.wwebjs.dev/Message.html#downloadMedia)
       * mimetype: MIME type of the attachment
       * data: Base64-encoded data of the file
       * filename: Document file name; value can be null
       */
      const audioMedia = await msg.downloadMedia();
      const textMessage = await transcribeFile(audioMedia);
      if (textMessage) msg.reply(textMessage);
    }
  }
}

exports.parseMessage = parseMessage;
