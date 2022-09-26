
from gtts import gTTS
import gradio as gr
import os
import speech_recognition as sr
from googletrans import Translator, constants
from pprint import pprint
from moviepy.editor import *
from Model import translate
def video_to_translate(file_obj,initial_language,final_language):
    videoclip = VideoFileClip(file_obj.name)
    videoclip.audio.write_audiofile("test.wav",codec='pcm_s16le')
    r = sr.Recognizer()

    
    with sr.AudioFile("test.wav") as source:
        audio_data = r.record(source)
        text = r.recognize_google(audio_data, language = "en-US")

    
    if final_language == "French":
        lang='fr'

    print("\n\n"+text+"\n\n")
    trans= translate(text)


    myobj = gTTS(text=trans, lang=lang, slow=True) 
    myobj.save("audio.wav") 

    audioclip = AudioFileClip("audio.wav")
    
    new_audioclip = CompositeAudioClip([audioclip])
    videoclip.audio = new_audioclip
    videoclip.write_videofile("new_filename.mp4")
    return 'new_filename.mp4'


initial_language = gr.inputs.Dropdown(["English"])
final_language = gr.inputs.Dropdown([ "French"])


gr.Interface(fn = video_to_translate,
            inputs = ['file',initial_language,final_language],
            outputs = 'video', 
            verbose = True,
            title = 'Video Translator',
            description = 'A simple application that translate from English to French.',
             article = 
                        '''<div>
                            <p style="text-align: center"> </a>
                            </p>
                        </div>'''
            ).launch()

        

