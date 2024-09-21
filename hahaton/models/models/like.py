from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models
from models.models.users import Users
class Like(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE) 
    object_id = models.PositiveIntegerField()
    object= GenericForeignKey('content_type', 'object_id')
    class Meta:
        db_table = "likes"
        verbose_name = "Like"
        verbose_name_plural = "Likes"