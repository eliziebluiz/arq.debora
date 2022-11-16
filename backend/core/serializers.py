from django.contrib.auth.models import User
from .models import *
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
  full_name = serializers.CharField(max_length=200, write_only=True)
  password = serializers.CharField(max_length=200, write_only=True)
  class Meta:
    model = User
    fields = ['id', 'username', 'email', 'full_name', 'password']
  def to_representation(self, instance):
    data = super().to_representation(instance)
    data['full_name'] = instance.get_full_name()
    return data
  def create(self, validated_data):
    first_name, last_name = validated_data['full_name'].split(' ', 1)
    user = User.objects.create(
      username=validated_data['username'], 
      email=validated_data['email'], 
      first_name=first_name, 
      last_name=last_name,
    )
    user.set_password(validated_data['password'])
    user.save()
    return user

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['pk', 'type_property', 'status', 'category', 'location', 'type_project', 'with_one', 'with_two', 'description']

class SchedulingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scheduling
        fields = ['user', 'pk', 'type_property', 'status', 'category', 'location','type_attendance', 'type_project', 'with_one', 'with_two'] 
        extra_kwargs = {
            'user': {'read_only': True}
        }
    def create(self, validated_data):
        user = self.context['user']
        scheduling = Scheduling.objects.create(user=user, **validated_data)
        return scheduling

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['pk', 'title', 'description']

class EmailCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailCode
        fields = ['date']