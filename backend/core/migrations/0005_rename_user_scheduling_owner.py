# Generated by Django 4.1.2 on 2022-11-15 21:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_scheduling'),
    ]

    operations = [
        migrations.RenameField(
            model_name='scheduling',
            old_name='user',
            new_name='owner',
        ),
    ]