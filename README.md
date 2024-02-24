# Speechless

Converts audio messages to text.

Designed to be an app, though still under exploration, the /app folder is currently useless.

The alpha version works with WhatsApp.

For every incoming audio messages, it replies with a transcription.

Transcripts are using the Deepgram API.

You need a .env file under the folder /api with the key "DEEPGRAM_LOCAL_API_KEY"

# TODO

- [x] First working version 24 Feb
- [x] Deploy to an instance (GCP VM)
- [ ] Enable or disable for "from me" audio messages
- [ ] Enable or Disable the transcript feature in group discussions

# Deployment

For a minimal deployment, choose a GCP or equivalent VM.

Choose at least 1 to 2GB RAM since Puppeteer is running.

It's an alpha, it might crash :)

Make sure to add the following libraries, for example on Linux:

```bash
sudo apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

I encourage you to install any version of Node (at least 10) and then install `n` https://github.com/tj/n to manage Node.

You might need to SSH again to the VM to see the latest node version with `node -v`.

And don't forget to add your .env inside the `/api` folder :)
