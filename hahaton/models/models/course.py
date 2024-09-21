from django.db import models
class Course(models.Model):
    name = models.CharField(max_length=63)
    description = models.CharField(max_length=511, null=True, blank=True)
    avatar = models.ImageField(upload_to='courses/', null=True, blank=True)

    class Meta:
        db_table = "courses"
        verbose_name = "Course"
        verbose_name_plural = "Courses"

