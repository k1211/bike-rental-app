# Generated by Django 2.1.1 on 2018-09-04 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TaskManager', '0003_auto_20180831_2205'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='priority',
            field=models.CharField(choices=[('LOW', 'Low'), ('HIGH', 'High')], default='LOW', max_length=10),
        ),
    ]
