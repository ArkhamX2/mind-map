from rest_framework.decorators import api_view
from rest_framework.response import Response
from models.models.course_status import CourseStatus
from api.serializers.course_status_serializer import CourseStatusSerializer
@api_view(['GET'])
def get_course_status(request):
    course_status = CourseStatus.objects.all()
    serializer = CourseStatusSerializer(course_status, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def get_course_status_by_user(request,user_id):
    course_status = CourseStatus.objects.filter(user_id=user_id)
    serializer = CourseStatusSerializer(course_status, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def get_course_status_by_course(request,course_id):
    course_status = CourseStatus.objects.filter(course_id=course_id)
    serializer = CourseStatusSerializer(course_status, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def get_course_status_by_name(request,status):
    course_status = CourseStatus.objects.filter(status=status)
    serializer = CourseStatusSerializer(course_status, many=True)
    return Response(serializer.data)
@api_view(['POST'])
def create_course_status(request):
    serializer = CourseStatusSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)
@api_view(['PUT'])
def update_course_status(request):
    id=request.data['id']
    course_status = CourseStatus.objects.get(id=id)
    serializer = CourseStatusSerializer(course_status,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)
@api_view(['DELETE'])
def delete_course_status(request):
    course_status = CourseStatus.objects.get(id=request.data['id'])
    if course_status:
        course_status.delete()
        return Response("deleted")
    else:
        return Response("not found")
