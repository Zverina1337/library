from django.forms import ModelForm, TextInput
from .models import User

class UserForm(ModelForm):
    class Meta:
        model = User
        fields = ["name",  "password" , "email" ]

        widgets = {
            "email" : TextInput(attrs={
                "type" : "email",
                "class" : "form-control",
                "placeholder" : "name@example.com",
                "id" : "floatingInput"
            }),
            "name" : TextInput(attrs={
                "class" : "form-control",
                "placeholder" : "Login",
                "id" : "floatingLogin"
            }),
            "password" : TextInput(attrs={
                "type" : "password",
                "class" : "form-control",
                "placeholder" : "Password",
                "id" : "floatingPassword"
            })
        }