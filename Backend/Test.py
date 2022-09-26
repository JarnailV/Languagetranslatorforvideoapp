import pyttsx3
text = "j'étais le malancherai. mempre-moi de trispes."
engine = pyttsx3.init()
voices = engine.getProperty('voices')
volume = engine.getProperty('volume')
engine.setProperty('volume', volume-0.25)
engine.setProperty('voice', voices[25].id)
engine.say(text)
engine.save_to_file(text , "audio.mp3")
engine.runAndWait()