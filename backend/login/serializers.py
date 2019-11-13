from django.contrib.auth.models import User
from rest_framework import serializers
from login.models import Classes


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password']

class ClassesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classes
        fields = ['courseId', 'courseName', 'meetingSchedule']