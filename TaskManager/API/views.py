from django.http import HttpResponse

from rest_framework import generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .serializers import TaskSerializer, UserSerializer
from TaskManager.views import TaskRepository, UserRepository


class UserCView(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        qs = UserRepository.get_all_users()
        return qs

    def post(self, request, *args, **kwargs):
        if request.user.is_admin():
            first_name = request.data.get('first_name')
            last_name = request.data.get('last_name')
            username = request.data.get('username')
            password = request.data.get('password')
            is_superuser = request.data.get('is_superuser')
            is_staff = request.data.get('is_staff')
            email = request.data.get('email')

            UserRepository.create(password, is_superuser, is_staff, username, first_name, last_name, email)

            return HttpResponse(status=200)
        else:
            return HttpResponse(status=403)


class TaskCRUView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer

    def get_queryset(self):
        qs = TaskRepository.get_all_tasks()

        query = self.request.GET.get("id")
        if query is not None:
            qs = qs.filter(id=query)

        query = self.request.GET.get("user")
        if query is not None:
            qs = qs.filter(user=query)

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
