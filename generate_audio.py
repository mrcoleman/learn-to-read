from gtts import gTTS
import os

# Create the audio directory if it doesn't exist
if not os.path.exists("audio"):
    os.makedirs("audio")

words = ['sad','tap','net','dot','dog','bag','dig','ram','hug']

for word in words:
    tts = gTTS(text=word, lang='en', slow=True)
    tts.save(f"audio/{word}.mp3")

print("Generated audio files in the 'audio' directory.")
