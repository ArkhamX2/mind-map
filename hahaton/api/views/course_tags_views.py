from rest_framework.decorators import api_view
from rest_framework.response import Response
from models.models import CourseTags
from api.serializers.course_tags_serializer import CourseTagsSerializer
@api_view(['GET'])
def get_course_tags(request):
    queryset = CourseTags.objects.all()
    data=CourseTagsSerializer(queryset,many=True).data
    return Response(data)
@api_view(['GET'])
def get_course_tag_by_id(request,id):
    queryset = CourseTags.objects.get(id=id)
    data=CourseTagsSerializer(queryset).data
    return Response(data)
@api_view(['GET'])
def get_course_tags_by_course(request,course_id):
    queryset = CourseTags.objects.filter(course_id=course_id)
    data=CourseTagsSerializer(queryset,many=True).data
    return Response(data)


