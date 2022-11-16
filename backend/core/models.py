from django.db import models
from django.contrib.auth.models import User
from .funcs import generateNumber

class Project(models.Model):
    type_property = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    type_project = models.CharField(max_length=50)
    with_one = models.CharField(max_length=50)
    with_two = models.CharField(max_length=50)
    description = models.TextField(max_length=500)

class Contact(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=50)


class Scheduling(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type_property = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    type_attendance = models.CharField(max_length=50)
    type_project = models.CharField(max_length=50)
    with_one = models.CharField(max_length=50)
    with_two = models.CharField(max_length=50)

class EmailCode(models.Model):
    code = models.CharField(max_length=50, editable=False)
    date = models.DateTimeField(auto_now_add=True)
    email = models.CharField(max_length=50)

    def save(self, *args, **kwargs):
        if not self.id:
            self.code = generateNumber()
        return super(EmailCode, self).save(*args, **kwargs)
