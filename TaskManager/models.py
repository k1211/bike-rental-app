from django.db import models
from django.conf import settings

class Task(models.Model):
    priority = models.CharField(max_length=10)
    description = models.CharField(max_length=256)
    REPAIR = 'REPAIR'
    TRANSPORT = 'TRANSPORT'
    BATTERY = 'BATTERY'
    TASK_TYPE_CHOICES = (
        (REPAIR, 'Repair'),
        (TRANSPORT, 'Transport'),
        (BATTERY, 'Swapping battery')
    )
    task_type = models.CharField(
        max_length=20,
        choices=TASK_TYPE_CHOICES,
        default=REPAIR,
    )
    NEW = 'NEW'
    IN_PROGRESS = 'IN_PROGRESS'
    DONE = 'DONE'
    STATUS_CHOICES = (
        (NEW, 'New'),
        (IN_PROGRESS, 'In progress'),
        (DONE, 'Done')
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default=NEW,
    )
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
