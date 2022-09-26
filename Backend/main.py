# coding=utf8
from gtts import gTTS
import gradio as gr
import os
import speech_recognition as sr
from googletrans import Translator, constants
from pprint import pprint
#pip install moviepy
#pip3 install googletrans
from moviepy.editor import *
from Model import translate
def video_to_translate(file_obj,initial_language,final_language):
# Insert Local Video File Path
    videoclip = VideoFileClip(file_obj.name)
    # Insert Local Audio File Path
    videoclip.audio.write_audiofile("test.wav",codec='pcm_s16le')
# initialize the recognizer
    r = sr.Recognizer()

    



    # open the file
    with sr.AudioFile("test.wav") as source:
        # listen for the data (load audio to memory)
        audio_data = r.record(source)
        # recognize (convert from speech to text)
        text = r.recognize_google(audio_data, language = "en-US")
        print(text)

    
    if final_language == "French":
        lang='fr'

    print("\n\n"+text+"\n\n")
    trans= translate(text)


    myobj = gTTS(text=trans, lang=lang, slow=True) 
    myobj.save("audio.wav") 

    # loading audio file
    audioclip = AudioFileClip("audio.wav")
    
    # adding audio to the video clip
    new_audioclip = CompositeAudioClip([audioclip])
    videoclip.audio = new_audioclip
    videoclip.write_videofile("new_filename.mp4")
    #return 'audio.wav'
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

        

