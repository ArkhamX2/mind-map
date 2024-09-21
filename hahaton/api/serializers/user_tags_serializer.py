from models.models import UserTags
from rest_framework import serializers
class UserTagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTags
        fields = '__all__'