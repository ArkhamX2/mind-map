from django.db import models
from models.models.course import Course
class CourseTags(models.Model):
    course_id=models.ManyToManyField(Course,related_name="course_tags")
    tag_name=models.CharField(max_length=63)
    level=models.IntegerField()
    class Meta:
        db_table = "course_tags"
        verbose_name = "CourseTag"
        verbose_name_plural = "CourseTags"