from gtts import gTTS
from playsound import playsound
audio = "speach.mp3"
lang = 'en'
sp = gTTS(text = "hey I am Jarvis.", lang=lang )
sp.save(audio)
playsound(audio)
