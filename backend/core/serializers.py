from django.contrib.auth.models import User
from .models import List, Item, Project
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

class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['name', 'done']

class ListSerializer(serializers.HyperlinkedModelSerializer):
    item_set = ItemSerializer(many=True)
    class Meta:
        model = List
        fields = ['name', 'owner', 'url', 'item_set']

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ['name', 'type_property', 'status', 'category', 'location', 'type_project', 'with_one', 'with_two', 'description']