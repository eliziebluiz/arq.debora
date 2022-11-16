from django.urls import path
from .views import *

urlpatterns = [
    path('user/', UserView.as_view()),
    path('user/<int:pk>/', UpdateDeleteUserView.as_view()),
    path('project/', ProjectView.as_view()),
    path('project/<int:pk>/', UpdateDeleteProjectView.as_view()),
    path('contact/', ContactView.as_view()),
    path('contact/<int:pk>/', UpdateDeleteContactView.as_view()),
    path('scheduling/', SchedulingView.as_view()),
    path('scheduling/<int:pk>/', UpdateDeleteSchedulingView.as_view()),
]