from django.urls import path
from .views import *

urlpatterns = [
    path('user/', UserView.as_view()),
    path('project/', ProjectView.as_view()),
]