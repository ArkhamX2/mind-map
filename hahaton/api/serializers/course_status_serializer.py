from models.models.course_status import CourseStatus
from rest_framework import serializers
class CourseStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model =CourseStatus
        fields = '__all__'