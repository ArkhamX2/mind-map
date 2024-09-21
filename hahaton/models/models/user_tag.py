from django.db import models
from models.models.users import Users
class UserTags(models.Model):
    user_id=models.ManyToManyField(Users,related_name="user_tags")
    tag_name=models.CharField(max_length=63)
    level=models.IntegerField()
    class Meta:
        db_table = "user_tags"
        verbose_name = "UserTag"
        verbose_name_plural = "UserTags"