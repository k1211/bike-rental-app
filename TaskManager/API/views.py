from django.http import HttpResponse

from rest_framework import generics

from .serializers import TaskSerializer
from TaskManager.models import Task
from TaskManager.views import TaskRepository

class TaskCRUView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer

    def get_queryset(self):
        qs = Task.objects.all()

        query = self.request.GET.get("id")
        if query is not None:
            qs = qs.filter(id=query)

        query = self.request.GET.get("user")
        if query is not None:
            qs = qs.filter(id=query)

        query = self.request.GET.get("type")
        if query is not None:
            qs = qs.filter(id=query)

        query = self.request.GET.get("status")
        if query is not None:
            qs = qs.filter(id=query)

        query = self.request.GET.get("priority")
        if query is not None:
            qs = qs.filter(id=query)

        return qs

    def post(self, request, *args, **kwargs):
        priority = request.data.get("priority")
        description = request.data.get("description")
        task_type = request.data.get("task_type")
        status = request.data.get("status")
        user = request.data.get("user")

        TaskRepository.create_task(self, priority, description, task_type, status, user)
        return HttpResponse(status=200)