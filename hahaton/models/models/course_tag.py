from django.db import models
from models.models.course import Course
from models.models.project import Project
class CourseTags(models.Model):
    course_id=models.ManyToManyField(Course,related_name="tags",null=True,blank=True)
    project_id=models.ManyToManyField(Project,related_name="tags",null=True,blank=True)
    tag_name=models.CharField(max_length=63)
    level=models.IntegerField()
    class Meta:
        db_table = "course_tags"
        verbose_name = "CourseTag"
        verbose_name_plural = "CourseTags"
    
    def __str__(self):
        return f"id: {self.pk}, course_id: {self.course_id}, project_id: {self.project_id}, tag_name: {self.tag_name}, level: {self.level}"