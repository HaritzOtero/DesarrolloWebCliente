from django import forms

from proyectos.models import Pregunta

class PostForm(forms.ModelForm):

    class Meta:
        model = Pregunta
        fields = ('pregunta_texto',)