from django.http import HttpResponse

from rest_framework import generics

from .serializers import TaskSerializer, UserSerializer
from TaskManager.views import TaskRepository, UserRepository


class UserCView(generics.ListCreateAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        qs = UserRepository.get_all_users()
        return qs

    def post(self, request, *args, **kwargs):
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')
        username = request.data.get('username')
        password = request.data.get('password')
        is_superuser = request.data.get('is_superuser')
        is_staff = request.data.get('is_staff')
        email = request.data.get('email')

        UserRepository.create(password, is_superuser, is_staff, username, first_name, last_name, email)

        return HttpResponse(status=200)


class TaskCRUView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer

    def get_queryset(self):
        qs = TaskRepository.get_all_tasks()

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

        TaskRepository.create(priority, description, task_type, status, user)
        return HttpResponse(status=200)

    def put(self, request):
        status = request.data.get("status")
        user_id = request.data.get("user")
        task_id = request.data.get("id")

        TaskRepository.update(task_id, status, user_id)
        return HttpResponse(status=200)


class UserTaskRUView(generics.RetrieveUpdateAPIView):
    serializer_class = TaskSerializer

    def get(self, request, *args, **kwargs):
        user_id = self.request.user.id
        user_id = '1'
        if not user_id:
            return []
        qs =  TaskRepository.get_user_tasks(user_id)
        return HttpResponse(status=200, content=qs, content_type="application/json")

    def put(self, request, *args, **kwargs):
        status = request.data.get("status")
        task_id = request.data.get("id")
        user = self.request.user

        TaskRepository.update(task_id, status, user)
        return HttpResponse(status=200)
