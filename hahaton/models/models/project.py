from django.db import models
from django.contrib.contenttypes.fields import GenericRelation
from models.models.like import Like
class Project(models.Model):
    name = models.CharField(max_length=63)
    description = models.CharField(max_length=511, null=True, blank=True)
    avatar = models.ImageField(upload_to='projects/', null=True, blank=True)
    likes=GenericRelation(Like)

    class Meta:
        db_table = "projects"
        verbose_name = "Project"
        verbose_name_plural = "Projects"