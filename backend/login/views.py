from django.contrib.auth.models import User
from rest_framework import viewsets
from login.serializers import UserSerializer, ClassesSerializer, StudentSerializer
from login.models import Classes, Students
from rest_framework.decorators import api_view
from rest_framework.response import Response

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

@api_view(['GET'])
def TakeAttendance(request):
    if request.method == 'POST':
        intake = request.data
        print(intake)
        return Response({"data": request.data})
    return Response({"data": "None"})


