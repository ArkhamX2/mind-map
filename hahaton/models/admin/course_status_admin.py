from django.contrib import admin
from models.models.course_status import CourseStatus
@admin.register(CourseStatus)
class CourseStatusAdmin(admin.ModelAdmin):
    fields=['user','course','status']