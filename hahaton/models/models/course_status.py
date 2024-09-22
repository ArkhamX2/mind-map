from django.db import models
from models.models.course import Course
from models.models.users import Users
class CourseStatus(models.Model):
    CHOICE_STATE=[
        ('uncompleted','uncompleted'),
        ('liked','liked'),
        ('completed','completed'),
    ]
    user=models.ForeignKey(Users,on_delete=models.CASCADE)
    course=models.ForeignKey(Course,on_delete=models.CASCADE)
    status=models.CharField(max_length=63,choices=CHOICE_STATE)

    class Meta:
        db_table = "course_status"
        verbose_name = "CourseStatus"
        verbose_name_plural = "CourseStatus"