# Generated by Django 4.1.2 on 2022-11-15 22:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_rename_user_scheduling_owner'),
    ]

    operations = [
        migrations.RenameField(
            model_name='scheduling',
            old_name='owner',
            new_name='user',
        ),
    ]