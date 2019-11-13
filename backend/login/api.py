#login api
from rest_framework import generics, permissions
from rest_framework .response import Response
from .serializers import LoginSerializer

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_execpt = True)
        user = serializer.validate_data
        return Respose({
            "user": UserSerializer(user, context = self.get_serializer_context()).data, "token": AuthToken.objects.create(user)
        })
