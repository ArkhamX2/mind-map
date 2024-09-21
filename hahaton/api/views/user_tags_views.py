from rest_framework.decorators import api_view
from rest_framework.response import Response
from models.models import UserTags
from api.serializers.user_tags_serializer import UserTagsSerializer
@api_view(['GET'])
def get_user_tags_by_user_id(request,id):
    queryset = UserTags.objects.filter(user_id=id)
    data=UserTagsSerializer(queryset,many=True).data
    return Response(data)
