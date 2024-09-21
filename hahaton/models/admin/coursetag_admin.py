from django.contrib import admin
from models.models.course_tag import CourseTags
@admin.register(CourseTags)
class CourseTagAdmin(admin.ModelAdmin):
    fields=['tag_name','level','course_id','project_id']