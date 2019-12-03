from django.contrib.auth.models import User
from rest_framework import serializers
from login.models import Classes, Students, DailyAttendance


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password']

class ClassesSerializer(serializers.ModelSerializer):

    classes_enrolled = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Classes
        fields = ['id','courseId', 'courseName', 'meetingSchedule','username', 'classes_enrolled']

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Students
        fields = ['id', 'studentName','school_id','attendence','studentPicture', 'classEnrolled']

class DailyAttendanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = DailyAttendance
        fields = ("id", "attendanceClass")
    