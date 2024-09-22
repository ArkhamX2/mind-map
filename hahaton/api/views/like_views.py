from rest_framework.decorators import api_view
from rest_framework.response import Response
from models.models import Like
from api.serializers.like_serializer import LikeSerializer
from models.models.comment import Comment
from models.models.project import Project
from django.contrib.contenttypes.models import ContentType


@api_view(['GET'])
def get_likes_to_project(request):
    id=request.data['project_id']
    queryset = Like.objects.filter(content_type=ContentType.objects.get_for_model(Project), object_id=id)
    data=LikeSerializer(queryset,many=True).data
    return Response(data)


@api_view(['POST'])
def create_like(request):
    class_dict={
        'comment':Comment,
        'project':Project,
    }
    type=request.data['type']
    id=request.data['object_id']
    user=request.data['user_id']
    like= Like.objects.all(user=user,content_type=ContentType.objects.get_for_model(class_dict[type]), object_id=id)
    if like.exists():
        like.delete()
        return Response("deleted")
    else:
        serializer = LikeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
