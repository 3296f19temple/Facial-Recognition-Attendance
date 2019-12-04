from django.contrib.auth.models import User
from rest_framework import serializers
from login.models import Classes, Students


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password']

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Students
        fields = ['id', 'studentName','school_id','attendence','studentPicture', 'classEnrolled']

class ClassesSerializer(serializers.ModelSerializer):

    classes_enrolled = StudentSerializer(many=True, read_only=True)

    class Meta:
        model = Classes
        fields = ['id','courseId', 'courseName', 'meetingSchedule','username', 'classes_enrolled']


    