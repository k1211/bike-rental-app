from django.contrib.auth.models import User

from .models import Task


class TaskRepository:

    @staticmethod
    def get_all_tasks():
        return Task.objects.all()

    @staticmethod
    def get_user_tasks(user_id):
        return Task.objects.filter(user=user_id)

    @staticmethod
    def create(priority, description, task_type, status, user_id):
        task = Task()
        task.priority = priority
        task.description = description
        task.task_type = task_type
        task.status = status
        task.user = UserRepository.get_user_by_id(user_id)
        task.save()
        return task

    @staticmethod
    def update(task_id, status, user_id):
        task = Task.objects.get(id=task_id)
        task.status = status
        task.user = UserRepository.get_user_by_id(user_id)
        task.save()
        return task


class UserRepository:

    @staticmethod
    def get_all_users():
        return User.objects.all()

    @staticmethod
    def get_user_by_id(user_id):
        if not user_id:
            user = None
        else:
            try:
                user = User.objects.get(id=user_id)
            except ValueError:
                user = None
        return user

    @staticmethod
    def create(password, is_superuser, is_staff, is_active, username, first_name, last_name, email):
        user = User()
        user.password = password
        user.is_superuser = is_superuser
        user.is_staff = is_staff
        user.is_active = is_active
        user.username = username
        user.first_name = first_name
        user.last_name = last_name
        user.email = email
        user.save()
        return user