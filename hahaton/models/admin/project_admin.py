from django.contrib import admin
from models.models.project import Project
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    fields=['name','description','avatar']