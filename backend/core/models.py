from django.db import models

from django.contrib.auth.models import User

class List(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=50)
    list = models.ForeignKey(List, on_delete=models.CASCADE)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=50)
    type_property = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    type_project = models.CharField(max_length=50)
    with_one = models.CharField(max_length=50)
    with_two = models.CharField(max_length=50)
    description = models.TextField(max_length=500)

    def __str__(self):
        return self.name