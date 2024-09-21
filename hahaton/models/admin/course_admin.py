from django.contrib import admin
from models.models.course import Course
@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    fields=['name','description','avatar']