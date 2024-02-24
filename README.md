# Speechless

Converts audio messages to text.

Designed to be an app, though still under exploration, the /app folder is currently useless.

The alpha version works with WhatsApp.

For every incoming audio messages, it replies with a transcription.

Transcripts are using the Deepgram API.

You need a .env file under the folder /api with the key "DEEPGRAM_LOCAL_API_KEY"

# TODO

- [x] First working version 24 Feb
- [] Deploy to an instance (GCP?)
- [] Enable or Disable the transcript feature in group discussions
