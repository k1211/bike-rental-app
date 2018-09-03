from django.conf.urls import url

from .views import TaskCRUView, UserCView, UserTaskRUView

app_name = 'TaskManager'

urlpatterns = [
    url(r'^user/$', UserCView.as_view(), name='create-user'),
    url(r'^task/$', TaskCRUView.as_view(), name='task-cru'),
    url(r'^task/user/$', UserTaskRUView.as_view(), name='user-task-ru'),
]
