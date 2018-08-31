from django.conf.urls import url

from .views import TaskCRUView

app_name = 'TaskManager'

urlpatterns = [
    url(r'^task/$', TaskCRUView.as_view(), name='task-cru'),
    url(r'^task/user$', TaskCRUView.as_view(), name='task-user-cr'),
]
