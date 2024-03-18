from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth import authenticate


class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    # in Django Rest Framework check if there is a method def in the serializer name
    # validate_<field_name>
    def validate_email(self, value):
        # Check if the email field was provided
        if not value:
            raise serializers.ValidationError("This field may not be blank.")
        # Check if email is unique
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with that email already exists.")
        return value

    def validate(self, data):
        # 检查两次输入的密码是否匹配
        if data['password'] != data['password2']:
            raise serializers.ValidationError({'password': 'Passwords must match.'})
        return data

    # Saving: If the data passes all validations
    # The serializer's .save() method can be called to perform the operation of saving the object.
    def save(self):
        account = User(
            email=self.validated_data['email'],
            username=self.validated_data['username']
        )
        password = self.validated_data['password']
        account.set_password(password)
        account.save()
        return account


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if not user:
            raise serializers.ValidationError({"errors": "Invalid username or password.", "status": "success"})

        # 认证成功，返回用户实例
        return {'user': user}


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
