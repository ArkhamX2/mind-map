from rest_framework.decorators import api_view
from rest_framework.response import Response
from models.models import Project
from api.serializers.project_sereializer import ProjectSerializer
from django.db.models import Count
from rest_framework import status
@api_view(['GET'])
def get_projects(request):
    queryset = Project.objects.all().annotate(Count('like')).order_by('-like__count')
    data=ProjectSerializer(queryset,many=True).data
    return Response(data)
@api_view(['GET'])
def get_project_by_user_id(request,id):
    queryset = Project.objects.filter(user_id=id)
    data=ProjectSerializer(queryset,many=True).data
    return Response(data)
@api_view(['GET'])
def get_project_by_tags(request,id):
    ids=request.data
    if not isinstance(ids,list):
        return Response({"message":"ids must be an array"},status=status.HTTP_400_BAD_REQUEST) 
    queryset = Project.objects.filter(tags__id__in=ids)
    data=ProjectSerializer(queryset,many=True).data
    return Response(data)
@api_view(['POST'])
def create_project(request):
    serializer = ProjectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)
@api_view(['PUT'])
def update_project(request):
    id=request.data['id']
    project = Project.objects.get(id=id)
    serializer = ProjectSerializer(project,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)

@api_view(['DELETE'])
def delete_project(request):
    project = Project.objects.get(id=request.data['id'])
    project.delete()
    return Response("deleted")