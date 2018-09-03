from django.contrib.auth.models import User

from rest_framework import serializers

from TaskManager.models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = [
            'id',
            'priority',
            'description',
            'task_type',
            'status',
            'user'
        ]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'password',
            'is_superuser',
            'is_staff',
            'is_active',
            'username',
            'first_name',
            'last_name',
            'email'
        ]