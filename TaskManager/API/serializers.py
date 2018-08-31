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