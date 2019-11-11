from django.urls import path, include
from .api import LoginAPI
from rest_framework import routers

router = routers.DefaultRouter()
router.register('Student', views.StudentViewSet)

urlpatterns = [
     path('', include(router.urls)),
]