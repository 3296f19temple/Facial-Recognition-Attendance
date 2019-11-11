from django.contrib.auth.models import User
from .models import Student
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password']


class StudentSerializer (serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Student
        fields = ('first_name','last_name','id','attendence','username')