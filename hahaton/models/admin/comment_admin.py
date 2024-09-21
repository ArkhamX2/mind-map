from django.contrib import admin
from models.models.comment import Comment
@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    fields=['user_id','content']