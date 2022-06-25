from unicodedata import name
from . import views
from django.urls import path

urlpatterns = [
    path("", views.blog, name="home"),
    path("blogs", views.blogs, name="blogs"), 
    path("bloggers", views.bloggers, name="bloggers"), 
    path("sign_in", views.sign_in, name="sign_in"),
    path("login", views.login, name="login"),          
]