from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('login/', LoginView.as_view()),
    path('register/', UserRegistrationView.as_view(), name='user-register'),
    path('get-profile/', GetUserProfileView.as_view()),
]
