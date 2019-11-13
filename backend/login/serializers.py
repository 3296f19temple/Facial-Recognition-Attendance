from django.contrib.auth.models import User
from .models import Student
from rest_framework import serializers
from login.models import Classes


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password']

<<<<<<< HEAD
class ClassesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classes
        fields = ['courseId', 'courseName', 'meetingSchedule']
=======

class StudentSerializer (serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Student
        fields = ('first_name','last_name','id','attendence','username')
>>>>>>> master
