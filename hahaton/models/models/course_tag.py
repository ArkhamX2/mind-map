from django.db import models
from models.models.course import Courses
class CourseTags(models.Model):
    course_id=models.ManyToManyField(Courses,related_name="course_tags")
    tag_name=models.CharField(max_length=63)
    level=models.IntegerField()