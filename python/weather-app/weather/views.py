import requests
from django.shortcuts import render

from weather.models import City
from .forms import City_form

def index(request):
    appid = '8d6a88f062859f48cb86d6339b13d1ee'
    url = 'https://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid=' + appid

    if(request.method == "POST"):
        form = City_form(request.POST)
        form.save()

    form = City_form()

    cities = City.objects.all()

    all_cities = []

    for city in cities:
        res = requests.get(url.format(city.name)).json()
        city_info = {
            'city': city.name,
            'temp': res["main"]["temp"],
            'icon': res["weather"][0]["icon"]
        }
        all_cities.append(city_info)

    context = {
        "all_info" : all_cities,
        "form" : form,
    }

    return render(request,'weather/index.html',context)