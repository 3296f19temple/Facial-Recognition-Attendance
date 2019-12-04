from django.contrib.auth.models import User
from rest_framework import viewsets
from login.serializers import UserSerializer, ClassesSerializer, StudentSerializer
from login.models import Classes, Students
from rest_framework.decorators import api_view
from rest_framework.response import Response
import face_recognition
import requests
import os

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class ClassesView(viewsets.ModelViewSet):
    queryset = Classes.objects.all()
    serializer_class = ClassesSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer

@api_view(['GET', 'POST'])
def TakeAttendance(request):
    if request.method == 'POST':
        students_query = requests.get('http://10.0.0.146:8007/students/')
        student = request.POST['student_id']
        student_picture = request.FILES['student_daily_picture']
        for items in students_query.json():
            if items["studentName"] == student:
                findonserver = items['studentPicture'].replace('http://10.0.0.146:8007/students/students', '/var/www/html/cis-3296/sean.droke/Facial-Recognition-Attendance/backend/students')
                on_server_encoding = face_recognition.load_image_file(findonserver)
                new_encoding = face_recognition.load_image_file(student_picture)
                serverFinal = face_recognition.face_encodings(on_server_encoding)[0]
                toCompareFinal = face_recognition.face_encodings(new_encoding)[0]
                results = face_recognition.compare_faces([serverFinal], toCompareFinal)
                if(results[0] == True):
                    identifier = str(items["id"])
                    urlString = 'http://10.0.0.146:8007/students/'+identifier+'/'
                    print(urlString)
                    requests.patch(urlString, data={'attendence': 'P'})
                else:
                    identifier = str(items["id"])
                    urlString = 'http://10.0.0.146:8007/students/'+identifier+'/'
                    requests.patch(urlString, data={'attendence': 'A'})
                print(results)
    ##if request.method == 'GET':


        return Response({"data": "request.data}"})
    return Response({"data": "None"})


