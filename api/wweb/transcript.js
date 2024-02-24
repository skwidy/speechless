// TODO: adapt to different environments
const DEEPGRAM_API_KEY = process.env.DEEPGRAM_LOCAL_API_KEY;

const { createClient } = require("@deepgram/sdk");

const transcribeFile = async (audioMedia) => {
  // TODO: catch errors when client is not properly init (e.g. API_KEY)
  const deepgram = createClient(DEEPGRAM_API_KEY);

  // Converts the media base 64 data to a readable Buffer
  const audioBuffer = Buffer.from(
    audioMedia.data.replace("data:audio/ogg; codecs=opus;base64,", ""),
    "base64"
  );

  // Call the transcribeFile method with the audio payload and options
  const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
    audioBuffer,
    {
      model: "nova-2",
      smart_format: true,
      detect_language: true,
    }
  );

  if (error) throw error;
  if (!error) {
    // console.log("Transcription results:", result);
    const transcript = result.results.channels[0].alternatives[0].transcript;
    if (transcript) {
      console.log("Text transcript:", transcript);
      return transcript;
    }
  }
};

exports.transcribeFile = transcribeFile;
