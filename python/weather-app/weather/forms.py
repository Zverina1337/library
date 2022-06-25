from dataclasses import field
from .models import City
from django.forms import ModelForm, TextInput

class City_form(ModelForm):
    class Meta:
        model = City
        fields = ['name']
        widgets = { 'name' : TextInput(attrs={
            'class' : 'form-control',
            'id' : 'floatingPassword',
            'placeholder' : 'text'
            })}
        