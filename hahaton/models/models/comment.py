from django.db import models
from models.models.users import Users
from models.models.like import Like
from django.contrib.contenttypes.fields import GenericRelation
class Comment(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    content = models.CharField(max_length=511)
    like=GenericRelation(Like)
    class Meta:
        db_table = "comments"
        verbose_name = "Comment"
        verbose_name_plural = "Comments"