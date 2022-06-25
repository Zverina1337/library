from pprint import pprint
from unicodedata import name
from urllib import request
from django.shortcuts import render
from .models import User
from .forms import UserForm

def blog(request):
    return render(request,"blog/index.html")

def blogs(request):
    return render(request,"blog/blogs.html")

def bloggers(request):
    return render(request,"blog/bloggers.html")

def login(request):
    users = User.objects
    login = ''
    password = ''
    check = ''
    form = UserForm(request.POST or None)
    print(form)
    if form.is_valid and request.method == "POST":
        login = form.cleaned_data.get("name")
        password = form.cleaned_data.get("password")
        print(login)
        print(password)
        print(users.count())
        i = 0;
        print(User.objects.get(name = "Daniel"))
        i += 1
    data = {
        "form" : form,
        "check" : check
    }
    return render(request,"blog/login.html",data)

def sign_in(request):
    error = ''
    form = UserForm()
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            error = "Форма была неверной"
    
    data = {
        "form" : form,  
        "error" : error
    }
    return render(request,"blog/sign_in.html", data)