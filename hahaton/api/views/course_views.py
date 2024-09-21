
from rest_framework.decorators import api_view
from rest_framework.response import Response
from models.models import Course
from api.serializers.course_serializer import CourseSerializer
from django.db.models import Count
from rest_framework import status
@api_view(['GET'])
def get_courses(request):
    queryset = Course.objects.all()
    serializer = CourseSerializer(queryset,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_course_by_id(request,id):
    queryset = Course.objects.get(id=id)
    serializer = CourseSerializer(queryset)
    return Response(serializer.data)

@api_view(['GET'])
def get_courses_by_course_tags(request):
    ids=request.data
    if not isinstance(ids,list):
        return Response({"message":"ids must be an array"},status=status.HTTP_400_BAD_REQUEST)
    queryset = Course.objects.filter(tags__id__in=ids)
    serializer = CourseSerializer(queryset,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_course(request):
    serializer = CourseSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)
@api_view(['PUT'])
def update_course(request):
    id=request.data['id']
    course = Course.objects.get(id=id)
    serializer = CourseSerializer(course,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)

@api_view(['DELETE'])
def delete_course(request):
    course = Course.objects.get(id=request.data['id'])
    course.delete()
    return Response("deleted")