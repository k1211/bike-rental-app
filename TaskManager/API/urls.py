from django.conf.urls import url
from rest_framework.authtoken.views import ObtainAuthToken
from .views import TaskCRUView, UserCView

app_name = 'TaskManager'

urlpatterns = [
    url(r'^user/$', UserCView.as_view(), name='create-user'),
    url(r'^task/$', TaskCRUView.as_view(), name='task-cru'),
    url(r'^auth/$', ObtainAuthToken.as_view()),
]
