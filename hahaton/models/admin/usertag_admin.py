from django.contrib import admin
from models.models.user_tag import UserTags
@admin.register(UserTags)
class UserTagAdmin(admin.ModelAdmin):
    fields=['user_id','tag_name','level']