from models.models import CourseTags
from rest_framework import serializers
class CourseTagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseTags
        fields = '__all__'