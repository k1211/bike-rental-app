# Generated by Django 2.1.1 on 2018-08-31 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('priority', models.CharField(max_length=10)),
                ('description', models.CharField(max_length=256)),
                ('task_type', models.CharField(choices=[('REPAIR', 'Repair'), ('TRANSPORT', 'Transport'), ('BATTERY', 'Swapping battery')], default='REPAIR', max_length=20)),
                ('status', models.CharField(choices=[('NEW', 'New'), ('IN_PROGRESS', 'In progress'), ('DONE', 'Done')], default='NEW', max_length=20)),
            ],
        ),
    ]
