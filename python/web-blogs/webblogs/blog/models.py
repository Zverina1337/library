from django.db import models
from django.forms import CharField

class User(models.Model):
    name = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    email = models.EmailField()

    def __str__(self):
        return self.name
    
