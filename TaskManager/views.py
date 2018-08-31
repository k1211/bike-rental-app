from .models import Task


class TaskRepository:
    def create_task(self, priority, description, task_type, status, user):

        if not user:
            user = None

        task = Task()
        task.priority = priority
        task.description = description
        task.task_type = task_type
        task.status = status
        task.user = user
        task.save()
        return task
