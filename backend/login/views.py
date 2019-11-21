from django.contrib.auth.models import User
from rest_framework import viewsets
from login.serializers import UserSerializer, ClassesSerializer
from login.models import Classes


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class ClassesView(viewsets.ModelViewSet):
    queryset = Classes.objects.all()
    serializer_class = ClassesSerializer

