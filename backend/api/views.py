from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from .serializers import UserRegistrationSerializer, LoginSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated


class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            token, created = Token.objects.get_or_create(user=serializer['username'])
            return Response({'status': 'success', 'message': 'User successfully registered', 'token': token.key},
                            status=status.HTTP_201_CREATED)
        else:
            # return the errors message to frontend
            # In fetch function get data.errors
            return Response({
                'status': 'error',
                'message': 'Registration failed',
                'errors': serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']  # 从validated_data中获取用户实例
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'status': 'success'}, status=status.HTTP_200_OK)
        else:
            return Response({'errors': serializer.errors}, status=status.HTTP_401_UNAUTHORIZED)


class GetUserProfileView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user = request.username
        print(user)
        serializer = UserSerializer(user)
        return Response(serializer.data)
