from django.contrib.auth.models import User
from django.contrib.auth import (
    authenticate,
    get_user_model,
    login,
    logout
)

from django.views.generic import (CreateView,DetailView,ListView,UpdateView,DetailView)
from rest_framework import viewsets
<<<<<<< HEAD
from login.serializers import UserSerializer, ClassesSerializer
from login.models import Classes
=======
from login.serializers import UserSerializer
from .forms import UserSignInForm

>>>>>>> master


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

<<<<<<< HEAD
class ClassesView(viewsets.ModelViewSet):
    queryset = Classes.objects.all()
    serializer_class = ClassesSerializer

=======
class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
>>>>>>> master
