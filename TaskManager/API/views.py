from rest_framework import generics

from .serializers import TaskSerializer
from TaskManager.models import Task

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
