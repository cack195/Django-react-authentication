from django import views
from django.urls import path
from .views import home, SignUp

urlpatterns = [
	path('home/', home, name='home'),
	path('signup/', SignUp.as_view(), name='signup'),
]