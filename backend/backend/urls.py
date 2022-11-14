from django.contrib import admin
from django.urls import include, path
from rest_framework.authtoken import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('core/', include('core.urls')),
    path('api-auth/', views.obtain_auth_token, name='api-token-auth'),
]
