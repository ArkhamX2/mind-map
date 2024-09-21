from rest_framework.decorators import api_view
from rest_framework.response import Response
from models.models import Comment
from api.serializers.comment_serializer import CommentSerializer
from django.db.models import Count

@api_view(['GET'])
def get_comments(request):
    queryset = Comment.objects.all().annotate(Count('like')).order_by('-like__count')
    data=CommentSerializer(queryset,many=True).data
    return Response(data)
@api_view(['POST'])
def create_comment(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)
@api_view(['PUT'])
def update_comment(request):
    id=request.data['id']
    comment = Comment.objects.get(id=id)
    serializer = CommentSerializer(comment,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)

@api_view(['DELETE'])
def delete_comment(request):
    id=request.data['id']
    comment = Comment.objects.get(id=id)
    comment.delete()
    return Response("deleted")

