from django.contrib import admin
from models.models.like import Like
@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    fields=['user_id','content_type','object_id']